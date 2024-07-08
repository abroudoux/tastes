request-access-token =>

- lire les variables d'environnement dans le fichier .env
- faire la requête http en utilisant les variables
- reécupérer l'access token dans la response
- lancer un timeout d'1h
- quand le timeout est fini, relancer le script
- changer les valeurs de ENV_SPOTIFY_ACCESS_TOKEN dans le fichier .env
- relancer le serveur de dev ?
