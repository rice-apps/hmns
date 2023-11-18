# Butterfly Images

## Prerequisites
The dependencies of the `extract.sh` script are listed in the file itself.

## General Process
1. Run `./extract.sh butterflies.pdf`.
2. Fix the anomalies manually (see below).
3. Run `./rename.sh images butterflies`.

All of the extracted images will be contained in folder `butterflies`, with
names of the form `butterfly-#-#.png`, where the first number is the number of
the page the image was extracted from, and the second number refers to the
image within the page.

## Anomalies

The PDF processing script isn't perfect, as the PDF isn't completely uniform.
Different pages have slightly different formats, so the output is slightly
different for every page. The below pages have anomalies that must be corrected
manually.

- page 16: split-003 is something random
- page 25: split-002 is rotated randomly
- page 33: split-004 is something random
- page 39: split-002 is something random
- page 44: 0-Im2 also needs to be split
- page 52: empty
- page 56: empty
- page 70: split-001 is something random
- page 89: 0-Im3 also needs to be split
- page 89: split-001 - split-003.png are something random
- page 91: wacky as hell
