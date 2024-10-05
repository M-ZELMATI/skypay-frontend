# ![Logo SkyPay](./src/Assets/Logos/skypay.jpg) SkyPay - Test Frontend

## Résumé

Ce projet est un **test de SkyPay**, démontrant la conception et l'implémentation d'un système de compte bancaire basique. Le projet est conçu selon une approche orientée utilisateur, en utilisant des critères d'acceptation et des tests pour guider le développement.

### Objectif du Projet
L'objectif est de développer un programme de gestion de compte bancaire avec les fonctionnalités suivantes :
- Dépôts et retraits.
- Affichage d'un relevé bancaire avec l'historique des transactions.

Le projet est développé en **ReactJS**, en se basant sur des principes **TDD** (Test Driven Development).

---

## Fonctionnalités

- **Dépôt & Retrait** : Les utilisateurs peuvent effectuer des dépôts et des retraits.
- **Relevé Bancaire** : Affichage des transactions effectuées par l'utilisateur sous forme de relevé.
- **Interface Utilisateur** : Simple et intuitive, conçue en **ReactJS**.

---

## Prérequis

- **Node.js** : Assurez-vous d'avoir Node.js installé sur votre machine. [Télécharger Node.js](https://nodejs.org/).
- **npm** : Installé par défaut avec Node.js.

---

## Installation et Démarrage

### 1. Cloner le dépôt

```bash
git clone https://github.com/M-ZELMATI/skypay-frontend.git
cd skypay-frontend
```
```bash
npm install
```

### Lancer le projet
```bash
npm start
```
## Technologies Utilisées

- **ReactJS** : Pour la gestion de l'interface utilisateur.
- **Tailwind Bootstrap CSS** : Pour le design rapide et efficace.
- **JWT (mock)** : Simulé uniquement pour les besoins du test d'authentification utilisateur.


## Désactivation de la Sécurité du Navigateur

Si vous rencontrez des problèmes de politique de sécurité lors des requêtes entre le frontend et un backend situé sur un port différent (comme des erreurs **CORS**), vous pouvez temporairement désactiver la sécurité du navigateur pour les tests locaux.

### Exemple avec Google Chrome

Vous pouvez lancer Google Chrome avec l'option de désactivation de la sécurité CORS :

```bash
chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
```
