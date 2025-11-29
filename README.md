# Convertisseur de Devises

**Auteur : Med Yassine Chkire**

## Description du projet
Ce projet est une application web simple permettant de convertir une devise vers une autre en temps réel à l’aide d’une API.  
Il inclut également un bouton permettant d’inverser les devises et des options d’amélioration visuelle en HTML/CSS.

## Technologies utilisées
- HTML
- CSS
- JavaScript
- API de taux de change (Fetch API)

## Fonctionnalités principales
- Conversion d’une devise à une autre.
- Bouton **swap** permettant d’inverser les deux devises.
- Mise à jour automatique du résultat après swap ou changement de valeur.
- Gestion d’erreurs lors du chargement des données depuis l’API.

## Lien vers la page GitHub Pages
[Voir le projet en ligne](https://medyassine-hub.github.io/yassine_chkire_Convertisseur-de-devises/)

## Lien vers le dépôt GitHub
[Voir le code source sur GitHub](https://github.com/medyassine-hub/yassine_chkire_Convertisseur-de-devises)

## Nouveautés explorées
- Manipulation du DOM : sélection d’éléments, gestion d’événements, mise à jour dynamique.
- Utilisation d’une API externe avec `fetch()` et gestion des réponses JSON.
- Débogage avec `console.log()` pour comprendre le flux de données.
- Mise en place d’un bouton **swap** et gestion de l’état entre deux sélecteurs.

## Difficultés rencontrées
- Compréhension du fonctionnement de `addEventListener` et du flux des événements.
- Confusion entre les valeurs affichées et celles envoyées à la fonction `convert()`.
- Erreurs dues à l’API : structure inattendue des données, réponses manquantes.
- Le bouton swap inversait les devises sans déclencher la conversion.
- Nécessité d’utiliser `console.log()` pour tracer correctement les données.
- Problèmes avec Python dans le CMD : commande non reconnue, PATH mal configuré.

## Solutions apportées
- Ajout de `console.log()` pour suivre le comportement du code et comprendre où les valeurs changeaient.
- Correction du fonctionnement du bouton swap afin qu'il appelle également la fonction `convert()`.
- Vérification et adaptation du code selon la structure réelle des données retournées par l’API.
- Tests pas à pas pour isoler les erreurs et comprendre le comportement du DOM.
- Résolution des problèmes Python/CMD : ajout de Python au PATH, test avec `python --version` ou `py`, et installation correcte des modules nécessaires.

