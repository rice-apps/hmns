#!/usr/bin/env bash
set -e

usage() {
    printf 'Usage: %s [-h|--help] <INDIR> <OUTDIR>\n' $0
    printf '\055h|--help\t\t\tShow this help message\n'
    printf 'INDIR\t\t\t\tThe input folder\n'
    printf 'OUTDIR\t\t\t\tThe output folder\n'
}

# Check for help flags and incorrect number of arguments
if [[ $# -ne 2 || "$1" == "-h" || "$1" == "--help" ]]; then
    usage
    exit 1
fi

indir="$1" # first argument is input directory
outdir="$2" # second argument is output directory

mkdir "$outdir"

# Set the array "dirs" to contain the child directories of $indir.
mapfile -t dirs < <(ls -ld "$indir"/*/ | awk '{print $9}')
for dir in "${dirs[@]}"; do
    printf 'Traversing %s:\n' "$dir"
    # Set the array "files" to contain the child files in $dir.
    mapfile -t files < <(ls -l "$dir"* | awk '{print $9}')
    # Take last path component.
    # For example, this transforms input/01/ to 01
    dirName=$(printf "$dir" | sed 's~^\([^/]*/\)*\([^/]\+\)/\?$~\2~')
    i=1
    for file in "${files[@]}"; do
        # Need to construct the sed command separately to include variable values in it
        # The sed command replaces the entire file path with the intended filename,
        # in the form butterfly-01-1.png.
        # Note that the extension of the input is maintained for the output.
        sedLine=$(printf 's?^.\+\.\([^.]\+\)$?butterfly-%s-%d.\\1?' "$dirName" $i)
        outFilename=$(printf "$file" | sed $sedLine)
        outFile="$outdir/$outFilename"
        printf '\tFile: %s -> %s\n' "$file" "$outFile"
        cp "$file" "$outFile"
        ((i++))
    done
done
