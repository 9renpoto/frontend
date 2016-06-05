#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

cd dist
git init
git add -A
msg="[ci skip] publish / `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"
git push -f git@github.com:9renpoto/slides.git master:gh-pages
