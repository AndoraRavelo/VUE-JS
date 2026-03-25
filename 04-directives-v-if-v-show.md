# 📖 Leçon 4 : Les Conditions — `v-if`, `v-else-if`, `v-else`, `v-show`

> **Prérequis** : Avoir terminé la Leçon 3 (interpolation, `ref`, `{{ }}`).

---

## 🧠 L'idée principale

En HTML classique, tu affiches toujours TOUT. Mais dans une vraie appli, tu veux :

- Afficher un message d'erreur **seulement** s'il y a une erreur
- Afficher "Connecté" **seulement** si l'utilisateur est connecté
- Afficher un badge "Promo" **seulement** si le produit est en promo

C'est exactement ce que font les **directives de condition** en Vue.js.

> 🔖 **Directive** = un attribut spécial de Vue qui commence par `v-`. Il donne des "instructions" à Vue sur ce qu'il faut faire avec un élément HTML.

---

## 1. `v-if` — Afficher SI une condition est vraie

`v-if` prend une condition (qui doit être `true` ou `false`) et affiche l'élément **seulement si c'est `true`**.

```vue
<script setup>
import { ref } from "vue";

const estConnecte = ref(true);
</script>

<template>
  <p v-if="estConnecte">Bienvenue ! Vous êtes connecté. ✅</p>
</template>
```

- Si `estConnecte` vaut `true` → le `<p>` est **affiché**
- Si `estConnecte` vaut `false` → le `<p>` est **totalement supprimé du DOM** (il n'existe plus dans la page)

---

## 2. `v-else` — Le "Sinon"

`v-else` doit **toujours** être placé juste après un élément `v-if`. Il s'affiche quand la condition est `false`.

```vue
<template>
  <p v-if="estConnecte">Bienvenue ! Vous êtes connecté. ✅</p>
  <p v-else>Veuillez vous connecter. 🔒</p>
</template>
```

C'est exactement comme le `if / else` que tu connais peut-être en programmation :

```
SI estConnecte est vrai  → affiche "Bienvenue"
SINON                    → affiche "Veuillez vous connecter"
```

---

## 3. `v-else-if` — Les conditions multiples ("Sinon Si")

Pour avoir plus de deux cas, on utilise `v-else-if` :

```vue
<script setup>
import { ref } from "vue";

const note = ref(15); // Une note sur 20
</script>

<template>
  <p v-if="note >= 16">🏆 Très bien !</p>
  <p v-else-if="note >= 12">👍 Bien</p>
  <p v-else-if="note >= 10">😐 Passable</p>
  <p v-else>😥 Insuffisant</p>
</template>
```

Vue lit les conditions **de haut en bas** et s'arrête à la première qui est vraie.

---

## 4. `v-show` — Afficher/Cacher visuellement

`v-show` fonctionne **presque** comme `v-if`, MAIS avec une différence importante :

|              | `v-if`                                   | `v-show`                                                            |
| ------------ | ------------------------------------------ | --------------------------------------------------------------------- |
| Quand faux   | L'élément est**supprimé** du HTML | L'élément reste mais devient**invisible** (`display: none`) |
| Usage idéal | Éléments qui changent**rarement**  | Éléments qui s'affichent/cachent**souvent**                   |

```vue
<template>
  <p v-show="estConnecte">Ce texte est caché mais existe dans la page.</p>
</template>
```

> 💡 **Règle simple pour débuter** : utilise `v-if` par défaut. Passe à `v-show` si tu remarques que ton interface est lente à cause de beaucoup de changements rapides.

---

## 5. Utiliser des expressions dans les conditions

Les conditions peuvent être plus complexes. Tu peux utiliser :

```vue
<script setup>
import { ref } from "vue";
const age = ref(17);
const aUnCompte = ref(true);
</script>

<template>
  <!-- Comparaisons -->
  <p v-if="age >= 18">Vous êtes majeur.</p>
  <p v-else>Vous êtes mineur.</p>

  <!-- Négation avec ! (signifie "NON") -->
  <p v-if="!aUnCompte">Créez un compte pour continuer.</p>

  <!-- Combinaison avec && (ET) et || (OU) -->
  <p v-if="age >= 18 && aUnCompte">Accès autorisé !</p>
</template>
```

### Les opérateurs à connaître :

| Opérateur | Signification       | Exemple                 |
| ---------- | ------------------- | ----------------------- |
| `===`    | Égal à            | `couleur === 'rouge'` |
| `!==`    | Différent de       | `statut !== 'actif'`  |
| `>`      | Supérieur à       | `prix > 100`          |
| `>=`     | Supérieur ou égal | `age >= 18`           |
| `<`      | Inférieur à       | `stock < 5`           |
| `!`      | NON (inverse)       | `!estVisible`         |
| `&&`     | ET                  | `majeur && inscrit`   |
| `\|\|`     | OU                  | `admin \|\| moderateur` |

---

## 📋 Résumé de la Leçon

DirectiveRôleQuand l'utiliser`v-if="condition"`Affiche si `true`Toujours comme point de départ`v-else-if="condition"`Sinon-siJuste après un `v-ifv-else`SinonJuste après `v-if` ou `v-else-ifv-show="condition"`Cache visuellementBasculements fréquents

---

## 🏋️ Exercice 4 — À toi de jouer !

👉 **Lis le fichier `exercises/EX-04-conditions.md`** pour tes exercices.

Il contient **3 niveaux** avec des mises en situation concrètes. Bonne chance ! 💪
