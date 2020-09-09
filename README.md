# djib-social-media
Un réseau social pour les djiboutiens. Pourquoi je cible les djiboutiens ? Je ne sais pas ... 

## Pourquoi ?

Pour approfondir mes connaissances sur ReactJS, j'ai décidé de coder un simple reseau
social Djib-Social-Media en 24H. 

## Les principales fonctions que ce reseau social doit avoir sont :
  
  - l'utilisateur doit pouvoir **poster** des status qui peuvent être des 
  **text/images**
  
  - un visionnage en temps réels de sa **fil d'actualité**
  
  - les utilisateurs peuvent **liker** et **commenter** les posts de autres

  - **notifier** les utilisateurs de l'actualité qu'ils ont manqués

## Technologie utilisé 
  -- FRONTEND --
  - React JS : librairie javascript pour creer une interface utilisateur
  - Create react app : genere un project boilerplate et des scripts qui build des bundle 
    pour la production

  -- BACKEND --
  - Firebase Real time database, user authentification 

## Todos 

  ### Initialisation 

  [X] Initialiser un depot github avec un README.md

  [X] Créer un projet Firebase

  [X] Générer les fichiers de base avec creat-react-app

  [X] Supprimer les fichiers non nécéssaires 

  [X] Integrer Firebase dans le projet 

  [X] Installer React-router et l'integre dans le projet
  
  [ ] Créer un system de connexion (route = /user/signup & /user/signin)

      [ ] Permettre au visiteur de s'inscrire (route = /user/signup)
          
          [ ] Faire un formulaire d'inscription

          [ ] Valider les données du formulaire

          [ ] Envoyer les données du formulaire à firebase pour procèder à l'inscription

          [ ] Envoyé un email de validation de l'inscription au nouveau membre
      
      [ ] Permettre au membre de se connecter (route = /user/signin)

          [ ] Faire un formulaire de connexion

          [ ] Valider les données du formulaire

          [ ] Envoyer les données du formulaire à firebase pour procèder à la connexion

          [ ] Récuperer les données du l'utilisateur 