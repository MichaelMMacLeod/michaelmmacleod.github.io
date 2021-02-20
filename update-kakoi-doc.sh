#!/usr/bin/sh

set -ex

cd ~/projects/kakoi/documentation
make compile
cd ~/projects/michaelmmacleod.github.io
mv kakoi-documentation old-kakoi-documentation
cp -r ~/projects/kakoi/documentation/build kakoi-documentation
