rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:JackMa007yes/QING-UI-publish.git &&
git push -f -u origin main &&
cd -