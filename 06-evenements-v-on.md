# 📖 Leçon 6 : Les Événements — `v-on` et `@click`

> **Prérequis** : Avoir terminé les Leçons 3, 4 et 5 (`ref`, `v-if`, `v-for`).

---

## 🧠 Pourquoi les événements ?

Jusqu'ici, tes pages **affichent** des données, mais elles ne **réagissent** pas encore à l'utilisateur. Un site web réel doit pouvoir :

- Répondre quand on **clique** sur un bouton
- Réagir quand on **tape** dans un champ
- Déclencher une action au **survol** de la souris

C'est le rôle des **événements** en Vue.js.

---

## 1. `v-on:click` — Écouter un clic

La directive `v-on:` permet "d'écouter" un événement sur un élément HTML.

```vue
<script setup>
import { ref } from "vue";

const compteur = ref(0);

function incrementer() {
  compteur.value++;
}
</script>

<template>
  <p>Compteur : {{ compteur }}</p>
  <button v-on:click="incrementer">Cliquer ici</button>
</template>
```

- `v-on:click` → écoute l'événement "clic" sur ce bouton
- `"incrementer"` → appelle la fonction `incrementer()` quand on clique

---

## 2. Le raccourci `@` — Toujours utilisé en pratique

`v-on:` a un raccourci : le symbole `@`. C'est **exactement pareil**, juste plus court.

```vue
<!-- Ces deux lignes font la même chose -->
<button v-on:click="incrementer">Cliquer</button>
<button @click="incrementer">Cliquer</button>
✅ ← on utilise toujours ça
```

> 🎯 **Règle** : En pratique, on écrit toujours `@click`, `@input`, `@submit`... jamais `v-on:` en entier.

---

## 3. Les fonctions dans `<script setup>`

Les fonctions qui répondent aux événements sont écrites dans `<script setup>` avec le mot-clé `function` (ou avec `const` + flèche):

```vue
<script setup>
import { ref } from "vue";

const score = ref(0);
const message = ref("Prête à jouer ?");

// Façon 1 : déclaration classique
function gagnerPoint() {
  score.value++;
  message.value = "🎉 +1 Point !";
}

// Façon 2 (identique) : fonction fléchée
const perdrePoint = () => {
  if (score.value > 0) {
    score.value--;
    message.value = "😢 -1 Point...";
  }
};
</script>

<template>
  <h2>Score : {{ score }}</h2>
  <p>{{ message }}</p>
  <button @click="gagnerPoint">➕ Gagner un point</button>
  <button @click="perdrePoint">➖ Perdre un point</button>
</template>
```

### 🔑 Points importants :

- Dans les fonctions, on **doit** utiliser `.value` pour modifier une `ref` : `score.value++`
- Dans le `@click`, on écrit le **nom** de la fonction **sans parenthèses** : `@click="gagnerPoint"` ✅
- On peut modifier **plusieurs** variables `ref` dans une même fonction

---

## 4. Passer un argument à la fonction

Si tu veux appeler une fonction avec une valeur spécifique, tu ajoutes les **parenthèses avec l'argument** dans le template :

```vue
<script setup>
import { ref } from "vue";

const score = ref(0);

function modifier(valeur) {
  score.value += valeur;
}
</script>

<template>
  <p>Score : {{ score }}</p>
  <button @click="modifier(10)">+10</button>
  <button @click="modifier(-5)">-5</button>
  <button @click="modifier(0)">Reset (0)</button>
</template>
```

> 💡 Avec des arguments, on met les parenthèses dans le template : `@click="modifier(10)"`  
> Sans argument, pas de parenthèses : `@click="maFonction"`

---

## 5. Les autres événements courants

`@click` n'est pas le seul ! Voici les plus utilisés :

| Événement      | Se déclenche quand...            | Exemple                     |
| -------------- | -------------------------------- | --------------------------- |
| `@click`       | L'utilisateur clique             | `@click="maFonction"`       |
| `@dblclick`    | L'utilisateur double-clique      | `@dblclick="maFonction"`    |
| `@mouseover`   | La souris survole l'élément      | `@mouseover="afficherInfo"` |
| `@mouseleave`  | La souris quitte l'élément       | `@mouseleave="cacherInfo"`  |
| `@keyup`       | L'utilisateur relâche une touche | `@keyup="maFonction"`       |
| `@keyup.enter` | L'utilisateur appuie sur Entrée  | `@keyup.enter="valider"`    |
| `@input`       | Le contenu d'un champ change     | `@input="maFonction"`       |
| `@submit`      | Un formulaire est soumis         | `@submit.prevent="envoyer"` |

> 🔖 Les `.prevent`, `.enter` etc. s'appellent des **modificateurs**. Ils ajoutent un comportement supplémentaire à l'événement.

---

## 6. Combiner événements, conditions et listes

La vraie puissance de Vue c'est de **tout combiner** !

```vue
<script setup>
import { ref } from "vue";

const taches = ref(["Faire les courses", "Appeler maman", "Coder en Vue"]);
const nouvelleTache = ref("");

function ajouterTache() {
  if (nouvelleTache.value.trim() !== "") {
    taches.value.push(nouvelleTache.value);
    nouvelleTache.value = ""; // vider le champ après
  }
}

function supprimerTache(index) {
  taches.value.splice(index, 1);
}
</script>

<template>
  <h2>Ma liste de tâches ({{ taches.length }})</h2>

  <ul>
    <li v-for="(tache, index) in taches" :key="index">
      {{ tache }}
      <button @click="supprimerTache(index)">❌</button>
    </li>
  </ul>

  <input v-model="nouvelleTache" placeholder="Nouvelle tâche..." />
  <button @click="ajouterTache">Ajouter</button>
</template>
```

> 🔖 `v-model` sur l'`<input>` sera expliqué en détail dans la Leçon 7, mais ici il lie simplement la valeur du champ à la variable `nouvelleTache`.

### Nouvelles choses à noter :

- `taches.value.push(x)` → **ajouter** un élément à la fin du tableau
- `taches.value.splice(index, 1)` → **supprimer** 1 élément à la position `index`
- `taches.length` → le **nombre** d'éléments dans le tableau
- `.trim()` → enlève les espaces vides en début et fin de texte

---

## 📋 Résumé de la Leçon

| Syntaxe                      | Rôle                                  |
| ---------------------------- | ------------------------------------- |
| `@click="maFonction"`        | Appelle une fonction au clic          |
| `@click="modifier(valeur)"`  | Appelle une fonction avec un argument |
| `@dblclick`, `@mouseover`... | Autres événements courants            |
| `compteur.value++`           | Modifier une ref dans une fonction    |
| `tableau.value.push(x)`      | Ajouter à la fin d'un tableau         |
| `tableau.value.splice(i, 1)` | Supprimer l'élément à la position i   |

---

## 🏋️ Exercice 6 — À toi de jouer !

👉 **Lis le fichier `exercises/EX-06-evenements.md`**

Tu vas créer tes **premières interfaces interactives** — ça va te faire sourire ! 😄
