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

# Check for help flags or incorrect number of arguments
if [[ $# -ne 1 || "$1" == "-h" || "$1" == "--help" ]]; then
    usage
    exit 1
fi

input="$1" # input is the first command-line argument
root=$(pwd) # root is the current directory

printf 'Splitting "%s" into pages...' "$input"
mkdir pages
# Splits the input PDF into many PDFs, each that is one page.
pdftk "$input" burst output pages/%02d.pdf
printf '\rSplitting "%s" into pages...Done.\n' "$input"

mkdir images
i=1 # page number
for pagePath in pages/*.pdf; do
    # name of page -- strips pdf extension and path
    # should be a two digit number
    pageName=$(printf "$pagePath" | sed 's?^\(.*/\)*\(.*\)\.pdf$?\2?')
    imageDir="$root/images/$pageName" # directory to output images for this page

    mkdir "$imageDir"
    cd "$imageDir"

    printf 'Extracting images from page %d:\n' $i
    /usr/bin/env python -m pdfly extract-images "$root/$pagePath"

    # Set the array "images" to contain the jp2 files that are at least 100K in size
    # These are the images we'll convert to png
    mapfile -t images < <(ls -l *.jp2 | awk '{if ($5 >= 100000) print $9}')
    for image in "${images[@]}"; do
        # Replace .jp2 extension with .png
        imageOutput=$(printf "$image" | sed 's/\.jp2/.png/')
        printf 'Converting %s to %s:\n' "$image" "$imageOutput"
        # Convert jp2 file to a png
        opj_decompress -i "$image" -o "$imageOutput"
    done
    
    rm *.jp2
    # Set the array "remove" to contain all files that are less than 100K in size
    mapfile -t remove < <(ls -l | awk 'NR > 1{if ($5 < 100000) print $9}')
    # Delete every file in "remove" if it's not empty.
    if [[ ${#remove[@]} -gt 0 ]]; then
        rm "${remove[@]}"
    fi

    # If this file exists, it's likely a composite image consisting of multiple
    # butterfly images. We'll split it by whitespace into the component images.
    # Note that this heuristic is only an approximation, as some pages
    # are layed out slightly differently.
    if [[ -e "0-Im1.png" ]]; then
        printf 'Splitting images (page %d)\n' $i
        # Use multicrop script to split by whitespace.
        "$root/multicrop" 0-Im1.png split.png
        # Remove the composite image
        rm 0-Im1.png
    else
        # Images were included separately in the PDF.
        printf 'Images are already split (page %d)\n' $i
        # Likely an image containing text and such
        rm 0-Im0.png
    fi

    ((i++))
done
