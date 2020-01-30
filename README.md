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

# générer un fichier html qui lie js
npm install html-webpack-plugin --save-dev

# installer webpack-dev-server
npm install webpack-dev-server --save-dev

# rajouter dans le fichier webpack.conf.js , dans la section script ce qui suit :
"start":"webpack-dev-server --config webpack.config.js --env development --open",
"build":"webpack --config webpack.config.js --env production"

# rajouter un   dans la section script  du fichier webpack.conf.js
 "debugthis":"node --inspect --inspect-brk ./src/index.js"

# puis dans chrome , écrire chrome://inspect

# install nodemon : automatiser le rédemarrage du devServ chaque fois que les fichiers de conf sont maj
 npm install nodemon --save-dev