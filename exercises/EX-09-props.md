# 🏋️ Exercice 9 — Les Props

> **Cours à lire avant cet exercice** : `09-props.md`

---

## 📌 Consignes Générales

Pour ces exercices :

1. Les fichiers de tes composants s'enregistrent toujours dans `src/components/`.
2. Tes tests se font dans `Exo9-1.vue`, `Exo9-2.vue` (ou `App.vue`).

---

## ⭐ Exercice 1 — La Bannière de Notification

**Objectif** : Un composant simple avec 2 props de texte.

### Ce que tu dois faire :

1. Dans `src/components/`, crée `BanniereNotif.vue`.
2. Dans ce composant :
   - Utilise `defineProps(['type', 'message'])`.
   - Dans le template, affiche : `[ {{ type }} ] : {{ message }}`.
3. Depuis ton fichier de test (ex: `Exo9-1.vue`), importe `BanniereNotif` et utilise-le **3 fois** avec des textes différents :
   ```html
   <BanniereNotif type="Succès" message="Votre profil a été mis à jour" />
   <BanniereNotif type="Erreur" message="Mot de passe incorrect" />
   <BanniereNotif type="Info" message="Une nouvelle mise à jour est disponible" />
   ```

*(Optionnel) Ajoute un super style avec `v-if="type === 'Succès'"` pour afficher la modale en vert, en rouge pour `Erreur`, etc.*

---

## ⭐⭐ Exercice 2 — La Carte Produit Personnalisée

**Objectif** : Utiliser des props numériques et booléennes (RAPPEL : avec `:`).

### Ce que tu dois faire :

1. Dans `src/components/`, crée `CarteProduitInteractive.vue`.
2. Dans l'enfant :
   - Déclare 3 props : `['nom', 'prix', 'enStock']`.
   - Construit le `<template>` : Affiche le Nom, le Prix (avec le symbole €) et un badge :
     - Si `enStock` est vrai → "✅ Disponible"
     - Si `enStock` est faux → "❌ Rupture"
3. Dans ton fichier de test (`App.vue` ou autre) :
   - Appelle le composant et passe-lui les bonnes valeurs.
   - **⚠️ ATTENTION : Les nombres et les booléens doivent être passés avec `:` !**

   ```html
   <CarteProduitInteractive nom="Clavier Mécanique" :prix="120" :enStock="true" />
   <CarteProduitInteractive nom="Souris Ergonomique" :prix="45" :enStock="false" />
   ```

---

## ⭐⭐⭐ Exercice 3 — L'Assemblage Pro (`v-for` + Props)

**Objectif** : Générer une liste de cartes à partir d'un grand tableau de données ! 🚀

### Ce que tu dois faire :

1. Prends ton composant précédent (`CarteProduitInteractive.vue`).
   *(Si tu ne l'as pas gardé, crées-en un nouveau du même style).*
2. Dans le fichier parent (`App.vue`) :

   - Dans la balise `<script setup>`, déclare une `ref` appelée `mesArticles` contenant ce tableau :
     ```javascript
     const mesArticles = ref([
       { id: 1, nom: 'Écran 4K', prix: 350, stock: true },
       { id: 2, nom: 'Clavier', prix: 120, stock: false },
       { id: 3, nom: 'Webcam', prix: 70, stock: true },
       { id: 4, nom: 'Tapis XXL', prix: 20, stock: true }
     ])
     ```
3. Dans le fameux `<template>` de `App.vue` :

   - Utilise une boucle `v-for="article in mesArticles"` **sur ton composant** pour ne l'écrire **qu'une seule fois** !

   ```html
   <CarteProduitInteractive 
      v-for="..." 
      :key="..."
      :nom="..."
      :prix="..."
      :enStock="..."
   />
   ```

> 🎯 Si tout s'affiche bien... Un grand bravo ! ✨ Tu connais maintenant la technique principale utilisée par 100% des développeurs Vue !

---

## ✅ Auto-évaluation

- [ ] L'enfant possède bien une ligne `const props = defineProps(['...'])` dans son `<script setup>` ?
- [ ] J'ai utilisé `:` (v-bind) pour passer les nombres (`:prix="100"`) et les booléens (`:enStock="true"`) ?
- [ ] Dans l'exercice 3, la clé `:key` de mon `v-for` a bien la valeur de l'`id` de l'article ?

---

## 🌟 Quand tu as terminé

Montre-moi tes exercices ! 💪
Il ne te restera plus qu'UN SEUL chapitre (Leçon 10, optionnel mais très puissant) avant de te lancer dans un VRAI PROJET final complet ! 🚀
