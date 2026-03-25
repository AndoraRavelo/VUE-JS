# 📖 Leçon 5 : Les Listes — `v-for`

> **Prérequis** : Avoir terminé la Leçon 4 (conditions avec `v-if`).

---

## 🧠 Pourquoi `v-for` ?

Imagine que tu as une liste de 10 films à afficher. En HTML classique, tu devrais écrire 10 `<li>` à la main. Et si demain tu en as 50 ? Pire, si la liste vient d'une base de données et change tout le temps ?

`v-for` résout ça : tu décris **comment afficher UN élément**, et Vue répète automatiquement ce modèle pour **chaque élément** de ta liste.

---

## 1. 📋 Parcourir un tableau simple

La syntaxe de base est : `v-for="element in tableau"`

```vue
<script setup>
import { ref } from "vue";

const fruits = ref(["Pomme", "Banane", "Orange", "Mangue"]);
</script>

<template>
  <ul>
    <li v-for="fruit in fruits">{{ fruit }}</li>
  </ul>
</template>
```

**Résultat affiché :**

```
• Pomme
• Banane
• Orange
• Mangue
```

### 🔑 Ce qu'il se passe :

- `fruits` est ton tableau (la source de données)
- `fruit` est le **nom que TU choisis** pour désigner chaque élément **au singulier** — tu pourrais l'appeler `item`, `truc`, n'importe quoi, mais utilise toujours un nom qui a du sens !
- Vue répète le `<li>` pour chaque élément du tableau

---

## 2. 🔢 Obtenir la position avec l'index

Tu peux aussi récupérer la **position** (numéro) de chaque élément avec une deuxième variable :

```vue
<template>
  <ul>
    <li v-for="(fruit, index) in fruits">{{ index + 1 }}. {{ fruit }}</li>
  </ul>
</template>
```

**Résultat :**

```
1. Pomme
2. Banane
3. Orange
4. Mangue
```

> 💡 L'index commence à **0** (c'est toujours le cas en programmation), donc on fait `index + 1` pour afficher des numéros "humains".

---

## 3. 🗂️ Parcourir un tableau d'objets

En pratique, tes listes ne contiennent pas juste des mots. Elles contiennent des **objets** (des éléments avec plusieurs propriétés).

```vue
<script setup>
import { ref } from "vue";

const produits = ref([
  { id: 1, nom: "Casque Audio", prix: 89, disponible: true },
  { id: 2, nom: "Souris Gaming", prix: 45, disponible: false },
  { id: 3, nom: "Clavier Mécanique", prix: 120, disponible: true },
]);
</script>

<template>
  <div v-for="produit in produits">
    <h3>{{ produit.nom }}</h3>
    <p>Prix : {{ produit.prix }}€</p>
    <p v-if="produit.disponible">✅ En stock</p>
    <p v-else>❌ Rupture de stock</p>
  </div>
</template>
```

### ✨ Ce qui est puissant ici :

- On accède aux propriétés de chaque objet avec `produit.nom`, `produit.prix`, etc.
- On peut **combiner `v-for` et `v-if`** à l'intérieur du bloc répété !

---

## 4. 🔑 L'attribut `:key` — TRÈS IMPORTANT

Vue a besoin de pouvoir identifier chaque élément de liste de façon **unique** pour fonctionner efficacement. On lui donne cet identifiant avec `:key`.

```vue
<template>
  <!-- ✅ Bonne pratique : toujours mettre :key -->
  <div v-for="produit in produits" :key="produit.id">
    {{ produit.nom }}
  </div>
</template>
```

### Pourquoi c'est important ?

Sans `:key`, Vue peut faire des erreurs d'affichage quand la liste change (éléments ajoutés, supprimés, réordonnés). C'est une **bonne habitude à prendre dès maintenant**.

> 🎯 **Règle** : La valeur de `:key` doit être **unique** pour chaque élément. En général, on utilise un `id`.  
> Si tu n'as pas d'id, tu peux utiliser l'index : `:key="index"` (moins bien, mais ça dépanne).

---

## 5. 🔢 Répéter N fois avec un nombre

`v-for` peut aussi prendre un simple **nombre** pour répéter N fois :

```vue
<template>
  <!-- Affiche les étoiles ★ cinq fois -->
  <span v-for="n in 5" :key="n">⭐</span>
</template>
```

**Résultat :** ⭐⭐⭐⭐⭐

Ici `n` aura les valeurs 1, 2, 3, 4, 5.

---

## 6. 🔀 Combiner `v-for` et `v-if`

**⚠️ Attention :** Il ne faut **JAMAIS** mettre `v-if` et `v-for` sur le **même** élément HTML. À la place, utilise `v-if` sur un élément **à l'intérieur** du `v-for`.

```vue
<!-- ❌ Ne fais pas ça -->
<li v-for="produit in produits" v-if="produit.disponible">...</li>

<!-- ✅ Fais plutôt ça -->
<li v-for="produit in produits" :key="produit.id">
  <span v-if="produit.disponible">{{ produit.nom }}</span>
</li>
```

---

## 📋 Résumé de la Leçon

| Syntaxe                                | Ce que ça fait                      |
| -------------------------------------- | ----------------------------------- |
| `v-for="item in liste"`                | Répète pour chaque élément          |
| `v-for="(item, index) in liste"`       | Avec la position (0, 1, 2...)       |
| `v-for="item in liste" :key="item.id"` | Bonne pratique (identifiant unique) |
| `item.propriete`                       | Accéder aux propriétés d'un objet   |
| `v-for="n in 5"`                       | Répéter 5 fois (n = 1 à 5)          |

---

## 🏋️ Exercice 5 — À toi de jouer !

👉 **Lis le fichier `exercises/EX-05-v-for.md`** pour tes exercices.

Trois niveaux t'attendent, avec des listes de plus en plus riches. 🚀
