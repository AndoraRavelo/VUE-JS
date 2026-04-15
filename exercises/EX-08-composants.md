# 🏋️ Exercice 8 — Créer et utiliser des Composants

> **Cours à lire avant cet exercice** : `08-composants.md`

---

## 📌 Contexte pour cet exercice

Jusqu'à maintenant, on travaillait dans un seul fichier.
Pour cet exercice, **tu vas devoir créer de nouveaux fichiers `.vue`** !

1. Les fichiers de test (`Exo8-1.vue`, etc.) seront ta page principale (tu vas mettre le code de test dedans).
2. Tes "briques" (les composants) devront être créées dans **`mon-projet-vue/src/components/`**.

---

## ⭐ Exercice 1 — La Navigation Principale

**Objectif** : Isoler un morceau de l'interface en composant (un `header` commun).

### Ce que tu dois faire :

1. Dans le dossier `mon-projet-vue/src/components/`, **CRÉE UN NOUVEAU FICHIER** nommé `NavBar.vue`.
2. Dedans, écris un `<script setup>`, et dans le `<template>` mets ce code HTML :

   ```html
   <header class="navbar">
     <h2>🌐 Mon Super Site</h2>
     <nav>
       <a href="#">Accueil</a>
       <a href="#">À propos</a>
       <a href="#">Contact</a>
     </nav>
   </header>
   ```

   *Ajoute un peu de `<style scoped>` (couleur de fond, disposition, etc.) pour faire joli.*
3. Dans ton fichier d'exercice principal (ex: `Exo8-1.vue`), **importe** ton tout nouveau composant et affiche-le tout en haut de la page.

### 💡 Indice pour l'import :

```javascript
// Dans Exo8-1.vue, le composant est plus loin dans les dossiers...
// Si Exo8-1 est dans `exercises/` et NavBar est dans `mon-projet-vue/src/components/` :
// Attention au chemin ! Parfois c'est plus simple de travailler dans `App.vue` pour les imports.

// 👈 CONSEIL : Fais cet exercice DIRECTEMENT dans `mon-projet-vue/src/App.vue`.
import NavBar from './components/NavBar.vue'
```

> **Conseil pratique :** Placer `App.vue` comme fichier de travail (point d'entrée) rend l'importation de `./components/...` très simple. Utilise `App.vue` !

---

## ⭐⭐ Exercice 2 — Le Composant Indépendant (Post de Réseau Social)

**Objectif** : Voir que chaque composant est 100% indépendant (variables propres).

### Ce que tu dois faire :

1. Crée un fichier `PostSocial.vue` dans `mon-projet-vue/src/components/`.
2. Dedans, crée un petit Post :
   - Variable `ref`: `likes` (commence à 0)
   - Variable `ref`: `aSuivi` (commence à false)
   - `<template>`: Un mini post avec un texte de ton choix, un **bouton "J'aime (X)"** (qui au clic incrémente "likes") et un **bouton "S'abonner"** (qui au clic toggle "aSuivi" et change de texte "S'abonner" / "Abonné ✅").
3. Dans ton `App.vue`, importe `PostSocial.vue` et **utilise-le 3 fois de suite** (copier-coller la balise `<PostSocial />` 3 fois).

### 🧐 Ce qu'il faut observer :

Ouvre ton navigateur sur `http://localhost:5173`. Tu devrais voir 3 posts identiques.
Si tu cliques sur "J'aime" du Post 1... le compteur des posts 2 et 3 ne bougera pas ! Magique non ?

---

## ⭐⭐⭐ Exercice 3 — L'Assemblage Ultime

**Objectif** : Construire une mini-page complète en Lego !

### Ce que tu dois faire :

1. Crée UN composant `EnTete.vue` (un titre de page et un sous-titre).
2. Crée UN composant `ProduitBoutique.vue` (Une image placeholder, un nom, un prix et un compteur de quantité modifiable avec un bouton + et -).
3. Crée UN composant `PiedDePage.vue` (un footer simple "© 2026 - Tous droits réservés").
4. Dans ton `App.vue`, assemble tout ça pour créer une boutique :

   ```html
   <!-- Structure attendue dans App.vue -->
   <template>
     <EnTete />

     <div class="boutique-liste">
        <ProduitBoutique />
        <ProduitBoutique />
        <ProduitBoutique />
     </div>

     <PiedDePage />
   </template>
   ```

*(Tu peux styliser la `boutique-liste` dans `App.vue` en grille CSS ou Flexbox pour les afficher côte à côte).*

### 💡 Indice :

C'est exactement comme ça que l'on construit TOUS les sites webs modernes (Amazon, Netflix, Facebook...). Un grand jeu d'assemblage ! 🧱

---

## ✅ Auto-évaluation

- [X] J'ai bien créé mes fichiers `.vue` (avec majuscule au début du nom, c'est la convention ! Ex: `MaCarte.vue`) dans `components/`.
- [X] J'ai écrit l'`import` dans `<script setup>`.
- [X] J'ai utilisé mon composant avec la balise `<NavBar />` (avec la majuscule) dans `<template>`.
- [X] Mes composants ont chacun leur **propre** `<style scoped>`.

---

## 🌟 Quand tu as terminé

Tu viens de passer un cap **énorme**.
La logique des composants, c'est ce qui différencie le simple HTML bidouillé, du développement professionnel ("Ingénierie Front-End").

Montre-moi ton `App.vue` et un de tes composants ! Ensuite on verra la **Leçon 9 : les Props** (comment envoyer des données DANS le composant). 💪
