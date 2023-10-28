#!/usr/bin/env bash
set -e

# Necessary prerequisites:
# pdftk (on Debian/Ubuntu: sudo apt install pdftk)
# libopenjp2-tools (on Debian/Ubuntu: sudo apt install libopenjp2-tools)
# pdfly (pip install pdfly)
# imagemagick (mine is 7.1.1, built from source)
# multicrop imagemagick script in the same directory (http://www.fmwconcepts.com/imagemagick/multicrop/index.php)

usage() {
    printf 'Usage: %s [-h|--help] <INPUT>\n' $0
    printf '\055h|--help\t\t\tShow this help message\n'
    printf 'INPUT\t\t\t\tThe input PDF file\n'
}

if [[ $# -ne 1 || "$1" == "-h" || "$1" == "--help" ]]; then
    usage
    exit 1
fi

input="$1"
root=$(pwd)

printf 'Splitting "%s" into pages...' "$input"
mkdir pages
pdftk "$input" burst output pages/%02d.pdf
printf '\rSplitting "%s" into pages...Done.\n' "$input"

mkdir images
i=1
for pagePath in pages/*.pdf; do
    pageName=$(printf "$pagePath" | sed 's?^\(.*/\)*\(.*\)\.pdf$?\2?')
    imageDir="$root/images/$pageName"

    mkdir "$imageDir"
    cd "$imageDir"

    printf 'Extracting images from page %d:\n' $i
    /usr/bin/env python -m pdfly extract-images "$root/$pagePath"

    mapfile -t images < <(ls -l *.jp2 | awk '{if ($5 >= 100000) print $9}')
    for image in "${images[@]}"; do
        imageOutput=$(printf "$image" | sed 's/\.jp2/.png/')
        printf 'Converting %s to %s:\n' "$image" "$imageOutput"
        opj_decompress -i "$image" -o "$imageOutput"
    done
    
    rm *.jp2
    mapfile -t remove < <(ls -l | awk 'NR > 1{if ($5 < 100000) print $9}')
    if [[ ${#remove[@]} -gt 0 ]]; then
        rm "${remove[@]}"
    fi

    if [[ -e "0-Im1.png" ]]; then
        printf 'Splitting images (page %d)\n' $i
        "$root/multicrop" 0-Im1.png split.png
        rm 0-Im1.png
    else
        printf 'Images are already split (page %d)\n' $i
        rm 0-Im0.png
    fi

    ((i++))
done
