# webpackformation
webpack training

# création du fichier package.json
npm init -y

# installer le package webpack
npm install webpack --save-dev

# installer webpack-cli
npm install webpack-cli --save-dev

#note : node_modules\.bin\webpack --json

# créer le répertoire src
# dans le répertoire src , créer le fichier index.js
# dans le fichier package.json , rajouter dans la section script , la clé valeur "webpack":"wepack"
# exécuter la commande
npm run webpack
# dans le même fichier rajouter les clé valeurs suivants
  "dev":"webpack --mode development",
   "prod":"webpack --mode production"
# dans le même fichier rajouter la clé valeurs suivants
"dev:debug":"webpack --mode development --watch"

# exécuter le fichier js produit 
node ./dist/main.js