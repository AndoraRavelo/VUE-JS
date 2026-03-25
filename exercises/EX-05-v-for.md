# 🏋️ Exercice 5 — Les Listes avec `v-for`

> **Cours à lire avant cet exercice** : `05-directive-v-for.md`

---

## 📌 Structure de départ (copie ça dans ton `App.vue`)

```vue
<script setup>
import { ref } from "vue";

// Tes données ici
</script>

<template>
  <div class="container">
    <!-- Ton HTML ici -->
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
}
</style>
```

---

## ⭐ Exercice 1 — Ma Liste de Courses

**Objectif** : Afficher une liste simple avec `v-for`.

### Ce que tu dois faire :

1. Crée une variable `courses` qui est un tableau `ref` contenant au moins **5 éléments** de ton choix (des textes simples). Par exemple des fruits, des légumes, des vêtements...
2. Affiche cette liste dans le HTML avec :

   - Un titre `<h2>` : `🛒 Ma Liste de Courses`
   - Une liste `<ul>` avec un `<li>` pour **chaque élément** du tableau grâce à `v-for`
   - Le **numéro** de l'article devant chaque item (ex: `1. Pommes`, `2. Lait`...)
3. N'oublie pas de mettre `:key` !

### 💡 Indices :

- Pour avoir le numéro : `v-for="(item, index) in courses"` puis affiche `{{ index + 1 }}`
- Pour la clé sans id : utilise `:key="index"`

---

## ⭐⭐ Exercice 2 — La Bibliothèque

**Objectif** : Travailler avec un tableau **d'objets**.

### Ce que tu dois faire :

1. Crée une variable `livres` qui contient un tableau de **4 objets**. Chaque livre doit avoir :

   - `id` (nombre unique : 1, 2, 3, 4)
   - `titre` (texte)
   - `auteur` (texte)
   - `lu` (booléen : `true` si tu l'as lu, `false` sinon)
2. Affiche une "carte" pour chaque livre avec :

   - Le **titre** en gras (`<strong>` ou dans un `<h3>`)
   - L'**auteur** dans un `<p>`
   - Si `lu` est `true` → affiche `✅ Lu` en vert
   - Si `lu` est `false` → affiche `📖 À lire` en orange
3. Ajoute n'importe quel style CSS pour que ça ressemble à de vraies cartes (une bordure, un background, un peu de padding...).

### 💡 Indices :

- Pour la couleur : utilise `:style="{ color: 'green' }"` directement sur le `<p>`
- Ou ajoute une classe CSS et utilise `:class`
- N'oublie pas `:key="livre.id"` !

---

## ⭐⭐⭐ Exercice 3 — Le Tableau de Bord des Élèves

**Objectif** : Combiner `v-for`, `v-if`, calculs et mise en forme.

### Ce que tu dois faire :

1. Crée une variable `eleves` avec un tableau de **5 objets**. Chaque élève a :

   - `id`
   - `prenom`
   - `matiere` (ex: `'Maths'`, `'Histoire'`, `'Science'`...)
   - `note` (un nombre entre 0 et 20)
2. Affiche un **tableau HTML** (`<table>`) avec une ligne par élève :

| Prénom | Matière | Note | Mention      |
| ------- | -------- | ---- | ------------ |
| Alice   | Maths    | 18   | 🏆 Excellent |
| Bob     | Histoire | 11   | 😐 Passable  |

3. La colonne **"Mention"** doit être calculée avec `v-if` / `v-else-if` / `v-else` :

   - `note >= 16` → `🏆 Excellent`
   - `note >= 14` → `👍 Bien`
   - `note >= 12` → `🙂 Assez bien`
   - `note >= 10` → `😐 Passable`
   - En dessous → `❌ Insuffisant`
4. **Bonus ⭐⭐⭐⭐** : Colore la ligne entière selon la mention :

   - Excellent → fond vert clair
   - Bien / Assez bien → fond bleu clair
   - Passable → fond orange clair
   - Insuffisant → fond rouge clair

   > 💡 Pour ça, tu peux utiliser `:style` ou `:class` sur la balise `<tr>`.
   >

### 💡 Indices :

- La structure de base d'un tableau HTML :
  ```html
  <table>
    <thead>
      <tr>
        <th>Prénom</th>
        <th>Matière</th>
        ...
      </tr>
    </thead>
    <tbody>
      <tr v-for="eleve in eleves" :key="eleve.id">
        <td>{{ eleve.prenom }}</td>
        ...
      </tr>
    </tbody>
  </table>
  ```
- N'oublie pas un peu de CSS pour `table, th, td` (border, padding...)

---

## ✅ Auto-évaluation

- [X] J'ai bien mis `:key` sur chaque `v-for` ?
- [X] J'utilise le **nom singulier** pour la variable itérée (ex: `livre` pour `livres`) ?
- [X] J'accède bien aux propriétés avec `objet.propriete` dans le template ?
- [X] Je n'ai pas mis `v-if` et `v-for` sur le **même** élément HTML ?
- [X] Mes données sont dans le `<script setup>` et l'affichage dans le `<template>` ?

---

## 🌟 Quand tu as terminé

Montre-moi ton code ! Ensuite on attaque la **Leçon 6 : les Événements avec `@click`** — c'est là que ton interface commence à vraiment **réagir** aux clics ! 🖱️
