#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

npm run clean && mkdir dist && cd dist || exit 1

git init
git remote add origin git@github.com:9renpoto/slides.git
git fetch --prune
git checkout -b gh-pages origin/ph-pages
cd ..

npm run build && cd dist|| exit 1

msg="[ci skip] publish / `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi

git commit -m "$msg"
git push origin gh-pages
