echo "Switching to branch master"
git checkout master

echo "Bulding app ..."
npm run build

echo "Deploying files to server..."
scp -r dist/* shrf@165.227.136.194:/var/www/shrf.com/
echo "Done!"