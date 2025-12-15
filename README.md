# Examen Docker - M2 TNSID - INSA S9

**Auteur :** Samrou TEOURI  
**Date :** 15 Décembre 2025

## Description du projet
Ce projet est une application ExpressJS conteneurisée avec Docker, utilisant MongoDB comme base de données. Il consiste en un compteur dont la valeur est stockée dans une table *Compteur* sur MongoDB.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/samTeouri/examen_docker_S9.git
   cd examen_docker_S9
   ```

## Lancement du projet

### Avec Docker Compose

```bash
docker-compose up --build
```

### Accès à l'application

- **Application web** : http://localhost:3000
- **MongoDB** : localhost:27018 (utilisateur: root, mot de passe: password)

## Structure du projet

- `Dockerfile` : Configuration pour construire l'image de l'application Node.js
- `docker-compose.yml` : Configuration pour l'orchestration des conteneurs (application + MongoDB)
- `public/` : Contient le fichier statique index.html
- `package.json` : Dépendances et scripts du projet Node.js

## Fonctionnalités

- Application Node.js conteneurisée
- Base de données MongoDB avec authentification
- Gestion des volumes pour la persistance des données
- Configuration réseau personnalisée

## Arrêt des conteneurs

Pour arrêter les conteneurs et supprimer les conteneurs, réseaux et volumes créés :

```bash
docker-compose down -v
```

## Notes supplémentaires

- Les données de MongoDB sont persistantes grâce à un volume Docker
- Le conteneur MongoDB est configuré avec un utilisateur administrateur par défaut
- L'application est configurée pour fonctionner en mode développement