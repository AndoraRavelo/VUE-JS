# 🏋️ Exercice 3 — Interpolation et Données Réactives

> **Cours à lire avant cet exercice** : `03-interpolation-et-data.md`

---

## Comment travailler ?

1. Ouvre le fichier `mon-projet-vue/src/App.vue` dans VS Code
2. **Supprime tout ce qu'il y a dedans** et remplace par la structure vide ci-dessous
3. Lance ton serveur : dans un terminal, tape `cd mon-projet-vue` puis `npm run dev`
4. Ouvre `http://localhost:5173` dans ton navigateur
5. Fais les exercices un par un !

### Structure vide pour commencer :

```vue
<script setup>
// Ton code JavaScript ira ici

</script>

<template>
  <!-- Ton code HTML ira ici -->

</template>

<style scoped>
/* Ton CSS ira ici (optionnel) */

</style>
```

---

## ⭐ Exercice 1 — Facile : Ta Carte de Visite

**Objectif** : Afficher des informations personnelles avec `ref` et `{{ }}`

### Ce que tu dois faire :

1. Dans `<script setup>`, crée **3 variables** avec `ref()` :

   - `prenom` avec **ton prénom**
   - `metier` avec **ton métier (ou futur métier)**
   - `ville` avec **ta ville**
2. Dans `<template>`, affiche ces variables dans le HTML pour obtenir quelque chose qui ressemble à ça :

```
🪪 Carte de visite
Prénom : [ton prénom]
Métier : [ton métier]
Ville  : [ta ville]
```

### 💡 Indices si tu es bloquée :

- N'oublie pas d'importer `ref` : `import { ref } from 'vue'`
- Pour afficher une variable dans le HTML, utilise `{{ nomDeLaVariable }}`
- Tu peux utiliser des balises `<h1>`, `<p>`, `<ul>`, `<li>`... comme en HTML normal !

---

## ⭐⭐ Exercice 2 — Moyen : La Fiche d'un Produit

**Objectif** : Travailler avec différents types de données

### Ce que tu dois faire :

1. Crée ces variables :

   - `nomProduit` (texte) → ex: `"Casque Audio Pro"`
   - `prix` (nombre) → ex: `89.99`
   - `stock` (nombre) → ex: `12`
   - `disponible` (booléen) → `true` ou `false`
   - `imageUrl` (texte) → `"https://placehold.co/200x200?text=Produit"`
2. Affiche tout ça dans une "fiche produit" :

   - Le nom du produit dans un `<h2>`
   - Le prix dans un `<p>` avec le symbole € (tu peux juste écrire `{{ prix }}€`)
   - Le stock dans un `<p>`
   - L'image avec une balise `<img>` — **Attention** : pour l'attribut `src`, utilise `:src="imageUrl"` !

### 💡 Ce que tu vas apprendre :

- `ref()` marche avec les textes, les nombres ET les booléens
- La différence entre `{{ }}` (pour le texte) et `:` (pour les attributs)

---

## ⭐⭐⭐ Exercice 3 — Défi : La Bio Dynamique

**Objectif** : Comprendre que Vue "compose" les variables

### Ce que tu dois faire :

1. Crée ces variables `ref()` :

   - `prenom`
   - `nom`
   - `age`
   - `hobby`
2. Dans le template, affiche une phrase **complète** qui **combine** plusieurs variables :

```
Bonjour ! Je m'appelle [prenom] [nom], j'ai [age] ans
et j'adore [hobby].
```

3. **Bonus** ⭐⭐⭐⭐ : Essaie d'ajouter une variable `anneeNaissance` et affiche une phrase du genre "Je suis né(e) en [anneeNaissance]." — Le nombre doit venir d'une variable, pas être écrit en dur !

### 💡 Rappel :

- Dans les `{{ }}`, tu peux même faire de petits calculs très simples ou coller des textes avec `+`
- Ex : `{{ prenom + ' ' + nom }}`

---

## ✅ Auto-évaluation

Après avoir fait les exercices, pose-toi ces questions :

- [X] Est-ce que j'ai bien importé `ref` depuis `'vue'` ?
- [X] Est-ce que mes variables sont déclarées dans `<script setup>` ?
- [X] Est-ce que j'affiche les variables avec `{{ }}` dans le `<template>` ?
- [X] Est-ce que j'ai utilisé `:src` (et non `src="{{ }}"`) pour l'image ?
- [X] Est-ce que la page se met à jour si je change la valeur dans le code et que je sauvegarde ?

---

## 🌟 Quand tu as terminé

Montre-moi ce que tu as fait ! Tu peux me copier-coller ton code `App.vue` et on le regarde ensemble.

Ensuite on passera à la **Leçon 4 : les conditions avec `v-if`** ! 🎉j
