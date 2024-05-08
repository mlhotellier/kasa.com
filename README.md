<img src="https://github.com/mlhotellier/kasa.com/raw/main/head_readme.png" alt="Kasa Logo" style="width: 100%;">

# Kasa - Plateforme de location d'appartements entre particuliers

Ce projet consiste en une refonte complète de la plateforme Kasa.com, l'un des leaders de la location d'appartements entre particuliers en France. L'objectif est de moderniser et d'optimiser l'expérience utilisateur en développant une nouvelle application avec React. Projet développé en tant que freelance.

## Table des matières

1. [Description](#description)
2. [Fonctionnalités](#fonctionnalités)
3. [Installation](#installation)
4. [Technologies utilisées](#technologies-utilisées)
5. [Structure du projet](#structure-du-projet)
6. [Utilisation](#utilisation)
7. [Contributions](#contributions)
8. [Licence](#licence)
9. [Contact](#contact)

## Description

La plateforme Kasa.com est une application en ligne destinée à faciliter la location d'appartements entre particuliers en France. Projet 5 parcours Développeur Web d'@Openclassrooms.

## Fonctionnalités

### Page d'accueil (Home)

- Affiche une bannière du composant <Banner />.
- Présente une liste d'annonces de locations avec des cartes interactives du composant <Card />.
- Permet de naviguer vers les détails de chaque annonce en cliquant sur la carte correspondante.

### À propos (About)

- Affiche une bannière du composant <Banner />.
- Présente des informations sur Kasa à l'aide du composant <CollaspeItem/>.
- Donne des informations sur la plateforme, les CGV et l'entreprise Kasa.

### Détails de la location (RentalDetails)

- Affiche les détails complets d'une annonce de location, y compris les images, le titre, l'emplacement, les tags, la description, les équipements et les informations sur l'hôte.
- Propose une fonctionnalité de diaporama avec le composant <Slideshow/> pour visualiser les images de la location.
- Affiche la note de la location avec le composant <Rating />.
- Permet à l'utilisateur d'accéder à la page d'erreur en cas de location non trouvée.

### Page d'erreur (Error)

- Affiche une page d'erreur 404 en cas de URL invalide ou de location non trouvée.
- Propose un lien de retour à la page d'accueil pour faciliter la navigation de l'utilisateur.

### Header

- Comporte le logo de l'entreprise et une barre de navigation permettant à l'utilisateur de passer de la page d'accueil à la page À propos (et inversement!).
- Indique à l'utilisateur sur quelle page il se trouve grâce à un effet de style.

### Footer

- Affiche le logo de l'entreprise en blanc sur fond noir, ainsi qu'un texte indiquant les droits d'auteur.

### Scroll vers le haut (ScrollToTop)

- Permet de faire défiler automatiquement la fenêtre vers le haut de la page à chaque fois que l'utilisateur navigue vers une nouvelle route dans l'application. Elle est implémentée à l'aide de React Hooks, notamment useEffect et useLocation fournis par React Router DOM.

Ces fonctionnalités garantissent une expérience utilisateur fluide et intuitive sur la plateforme Kasa.com, en offrant aux utilisateurs des informations détaillées sur les locations disponibles et en facilitant la navigation entre les différentes pages.

## Installation

Ce projet a été initialisé avec [Create React App](https://github.com/facebook/create-react-app).
Pour installer et exécuter localement ce projet, suivez les étapes suivantes :

1. Clonez ce dépôt GitHub sur votre machine locale : [Lien GitHub](https://github.com/mlhotellier/kasa.com)
2. Assurez-vous d'avoir Node.js installé sur votre machine.
3. Allez dans le répertoire du projet.
4. Installez les dépendances en exécutant la commande `npm install` ou `yarn install`, selon votre gestionnaire de paquets préféré.
5. Lancez l'application en exécutant la commande `npm start` ou `yarn start`.
6. Ouvrez votre navigateur web et accédez à l'adresse `http://localhost:PORT`, où `PORT` est le numéro de port spécifié dans la configuration du serveur.

## Technologies utilisées

- React
- SASS
- JavaScript
- Node.js
- JSON
- Yarn

## Structure du projet

- `README.md`: Fichier contenant la documentation du projet.
- `node_modules/`: Répertoire contenant les dépendances du projet.
- `package.json`: Fichier décrivant les métadonnées du projet et les dépendances.
- `public/`: Répertoire contenant les ressources statiques accessibles au public.
- `src/`: Répertoire principal du projet, contenant le code source de l'application.
- `src/index.js`: Fichier central de l'application.

## Utilisation

Une fois le serveur lancé, vous pouvez accéder à la plateforme Kasa.com dans votre navigateur et explorer les différentes annonces de location disponibles.

## Contributions

Les contributions à ce projet sont les bienvenues ! Si vous souhaitez contribuer, veuillez soumettre une pull request avec vos modifications proposées. Assurez-vous de suivre les bonnes pratiques de développement et de tester vos modifications avant de les soumettre.

## Licence

Ce projet est sous licence MIT.

## Contact

Pour toute question ou demande de renseignements, veuillez contacter mathislhotellier@gmail.com.
