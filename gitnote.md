# cloner le repo 
git clone https://github.com/hmahroug/webpackformation.git

#rajouter le fichier .gitignore

# créer une branche
  git branch feature/01-init
# se ^positionner sur la nouvelle branche
  git checkout feature/01-init
# faire les deux étapes précedentes en une seule ligne de commande
git checkout -b feature/01-init

# commit 
git commit -m "commentaire"

# push
git push -u origin feature/01-init
git push -u origin feature/02-config
# lister les branch du repo
git branch
# lister les branch remote et local

git branch -a

# annuler les changement non commité

# annuler les changements commités

#