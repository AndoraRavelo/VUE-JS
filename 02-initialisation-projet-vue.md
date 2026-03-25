# Leçon 1.5 : Créer un vrai projet Vue.js (Vite, package.json)

Tu as tout à fait raison ! L'approche avec le lien CDN est utile pour tester rapidement, mais dans le monde professionnel, on crée des **vrais projets** avec une structure complète. 

Pour cela, on utilise un outil appelé **Node.js** (qui inclut `npm`, le gestionnaire de paquets) et un outil de construction super rapide appelé **Vite**.

## 1. La commande magique pour initialiser le projet

Au lieu de créer nos fichiers à la main, on demande à Vue de générer la base du projet pour nous. La commande officielle est :

```bash
npm create vue@latest mon-projet-vue
```

*(Lorsqu'on lance ça, on nous pose quelques questions (TypeScript, Routeur, etc.). Pour débuter, on répond "Non" à tout pour garder les choses simples).*

## 2. Que contient ce projet généré ?

Une fois le projet créé, voici les fichiers les plus importants que tu vas découvrir :

### 📄 `package.json`
C'est la carte d'identité de ton projet. Il contient :
- Le nom de ton projet.
- Les "dépendances" : c'est-à-dire les bibliothèques dont ton projet a besoin pour fonctionner (ici, Vue.js lui-même).
- Les "scripts" : des commandes raccourcies (ex: `npm run dev` pour lancer ton site).

### 📁 `node_modules/`
C'est le dossier (souvent très lourd) où sont téléchargées et stockées toutes les dépendances listées dans le `package.json`. **On n'y touche jamais manuellement.**

### 📁 `public/`
Ce dossier contient les fichiers statiques comme le favicon (la petite icône dans l'onglet du navigateur) ou des images qui ne changeront pas.

### 📁 `src/` (Le dossier le plus important !)
C'est ici que tu vas passer 99% de ton temps. C'est le code source de ton application.
- **`main.js`** : Le point d'entrée de l'application. C'est ici qu'on retrouve le fameux `createApp()` qu'on a vu dans la leçon 1 !
- **`App.vue`** : C'est le composant principal (la racine) de ton application. Tous les autres morceaux de ton site viendront s'emboîter dedans.
- **`components/`** : Un dossier pour ranger les petits morceaux réutilisables de ton interface (des boutons, des en-têtes, des cartes...).

## 3. C'est quoi un fichier `.vue` ?

Dans un vrai projet, on utilise des fichiers `.vue` (appelés "Composants Monofichiers" ou SFC). C'est génial car cela regroupe 3 choses au même endroit :
1. `<script setup>` : Le code JavaScript (tes variables `data()`, tes fonctions).
2. `<template>` : Le code HTML (ton interface).
3. `<style>` : Le code CSS (le design).

Voici à quoi ça ressemble de manière très basique :

```vue
<script setup>
import { ref } from 'vue'

// Notre variable
const prenom = ref('Alice')
</script>

<template>
  <h1>Bonjour, je suis {{ prenom }}</h1>
</template>

<style scoped>
h1 {
  color: blue;
}
</style>
```

---

## 💡 Prêt(e) pour ton exercice ?

Je vais générer un projet de base pour toi (je l'appellerai `mon-projet-vue`).
Lis les consignes dans la discussion pour savoir comment le lancer et commencer à jouer avec !
