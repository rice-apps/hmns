#!/usr/bin/env bash
set -e

usage() {
    printf 'Usage: %s [-h|--help] <INDIR> <OUTDIR>\n' $0
    printf '\055h|--help\t\t\tShow this help message\n'
    printf 'INDIR\t\t\t\tThe input folder\n'
    printf 'OUTDIR\t\t\t\tThe output folder\n'
}

if [[ $# -ne 2 || "$1" == "-h" || "$1" == "--help" ]]; then
    usage
    exit 1
fi

indir="$1"
outdir="$2"

mkdir "$outdir"

mapfile -t dirs < <(ls -ld "$indir"/*/ | awk '{print $9}')
for dir in "${dirs[@]}"; do
    printf 'Traversing %s:\n' "$dir"
    mapfile -t files < <(ls -l "$dir"* | awk '{print $9}')
    dirName=$(printf "$dir" | sed 's~^\([^/]*/\)*\([^/]\+\)/\?$~\2~')
    i=1
    for file in "${files[@]}"; do
        sedLine=$(printf 's?^.\+\.\([^.]\+\)$?butterfly-%s-%d.\\1?' "$dirName" $i)
        outFilename=$(printf "$file" | sed $sedLine)
        outFile="$outdir/$outFilename"
        printf '\tFile: %s -> %s\n' "$file" "$outFile"
        cp "$file" "$outFile"
        ((i++))
    done
done
