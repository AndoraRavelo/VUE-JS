# 🏋️ Exercice 6 — Les Événements (`@click`, fonctions)

> **Cours à lire avant cet exercice** : `06-evenements-v-on.md`

---

## 📌 Structure de départ (copie ça dans ton `App.vue`)

```vue
<script setup>
import { ref } from "vue";

// Tes variables et fonctions ici
</script>

<template>
  <div class="container">
    <!-- Ton HTML ici -->
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
}

button {
  cursor: pointer;
  padding: 8px 16px;
  margin: 5px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
}
</style>
```

---

## ⭐ Exercice 1 — Le Compteur

**Objectif** : Créer ton premier élément interactif.

### Ce que tu dois faire :

1. Crée une variable `compteur` avec la valeur `0`
2. Crée **deux fonctions** :

   - `incrementer()` → ajoute 1 au compteur
   - `reinitialiser()` → remet le compteur à 0
3. Dans le template, affiche :

   - Le compteur dans un `<h2>` : `Compteur : 0`
   - Un bouton **"➕ Ajouter"** qui appelle `incrementer`
   - Un bouton **"🔄 Réinitialiser"** qui appelle `reinitialiser`
4. **Bonus ⭐⭐** : Affiche un message différent selon la valeur du compteur :

   - Compteur = 0 → `"Commence à cliquer !"`
   - Compteur entre 1 et 9 → `"Continue..."`
   - Compteur ≥ 10 → `"🏆 Tu as atteint 10 !"`

### 💡 Indices :

- Dans ta fonction : `compteur.value++` pour ajouter 1
- Dans ton template : `@click="incrementer"` (sans parenthèses !)
- Pour le message bonus, utilise `v-if` / `v-else-if` / `v-else`

---

## ⭐⭐ Exercice 2 — La Calculatrice de Score

**Objectif** : Appeler une fonction avec des **arguments**.

### Ce que tu dois faire :

1. Crée ces variables :

   - `score` → `0`
   - `historique` → un tableau vide `[]`
2. Crée une fonction `modifier(valeur)` qui :

   - Ajoute `valeur` au score
   - Empêche le score de descendre en dessous de 0 (si le score serait négatif, il reste à 0)
   - Ajoute une entrée dans `historique` pour tracer l'action

   > 💡 Pour l'historique : `historique.value.push('+ 10 points')` ajoute une ligne au tableau
   >
3. Dans le template, affiche :

   - Le score actuel dans un `<h2>`
   - **4 boutons** avec ces valeurs : `+10`, `+5`, `-5`, `-10`
     → Ils appellent tous `modifier(...)` avec la bonne valeur en argument
   - La liste de l'historique des actions avec `v-for` (les 5 dernières seulement si tu veux faire le bonus)

### 💡 Indices :c

- Avec argument dans le template : `@click="modifier(10)"`
- Pour empêcher le score d'être négatif :
  ```javascript
  if (score.value + valeur < 0) {
    score.value = 0;
  } else {
    score.value += valeur;
  }
  ```
- Pour afficher le signe + devant un nombre positif dans l'historique, tu peux construire le texte dans la fonction : `'+ 10 points'` ou `'- 5 points'`

---

## ⭐⭐⭐ Exercice 3 — La Liste de Tâches (To-Do List)

**Objectif** : Combiner `@click`, `v-for`, `v-if` et modifier un tableau.

### Ce que tu dois faire :

1. Crée ces variables :

   - `taches` → un tableau avec **3 tâches de départ** (juste des textes)
   - `nouvelleTache` → une chaîne vide `''`
2. Crée ces fonctions :

   - `ajouterTache()` → ajoute `nouvelleTache` dans le tableau `taches`, puis vide `nouvelleTache`
     - ⚠️ Ne pas ajouter si le texte est vide ! Utilise `.trim()` pour vérifier
   - `supprimerTache(index)` → supprime la tâche à la position `index`
3. Dans le template, construis :

   - Un `<h2>` qui affiche : `📝 Mes tâches (X)` — le X est le nombre de tâches
   - Un `<input>` lié à `nouvelleTache` avec `v-model="nouvelleTache"`
   - Un bouton **"Ajouter ➕"** qui appelle `ajouterTache`
   - Un bouton **"Entrée"** qui fonctionne aussi avec `@keyup.enter="ajouterTache"` sur l'input
   - La liste des tâches avec un bouton **"❌"** sur chaque ligne pour supprimer
4. **Bonus ⭐⭐⭐⭐** : Si la liste est **vide**, affiche un message : `"Aucune tâche, profite !  😎"` à la place de la liste

### 💡 Indices :

- `taches.value.push(nouvelleTache.value)` → ajoute au tableau
- `taches.value.splice(index, 1)` → supprime 1 élément à la position `index`
- `taches.value.length` → nombre d'éléments
- `nouvelleTache.value.trim() !== ''` → vérifie que le texte n'est pas vide
- Pour le bouton Entrée sur l'input : `@keyup.enter="ajouterTache"` (en plus du `v-model`)
- Pour le bonus : `v-if="taches.length === 0"` sur ton message, `v-else` sur la liste

---

## ✅ Auto-évaluation

- [X] Mes fonctions sont bien dans `<script setup>` ?
- [X] J'utilise `.value` pour modifier mes variables **dans les fonctions** (mais pas dans le template) ?
- [X] Sans argument : `@click="maFonction"` — Avec argument : `@click="maFonction(valeur)"` ?
- [X] Mon tableau se met bien à jour automatiquement dans le navigateur quand je clique ?

---

## 🌟 Quand tu as terminé

Bravo ! La To-Do List c'est l'exercice classique de tous les cours de Vue — et tu l'as fait ! 🎉

Montre-moi ton code et on passe à la **Leçon 7 : `v-model` et les formulaires** ! 📝
