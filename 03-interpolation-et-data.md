# 📖 Leçon 3 : Afficher des données — `ref` et `{{ }}`

> **Prérequis** : Avoir lu les leçons 1 et 2, et avoir ton projet `mon-projet-vue` prêt.

---

## 🧠 Le concept fondamental : Réactif vs Statique

En HTML classique, si tu écris `<h1>Bonjour Alice</h1>`, ce texte est **figé**. Pour le changer, tu dois modifier ton code HTML à la main.

En Vue.js, on veut que l'interface **se mette à jour automatiquement** quand nos données changent. C'est ce qu'on appelle la **réactivité**.

---

## 1. 📦 `ref()` — Créer une variable réactive

Dans la section `<script setup>`, on déclare nos données avec `ref()`.

```vue
<script setup>
import { ref } from 'vue'

const prenom = ref('Alice')
const age = ref(25)
const estConnecte = ref(false)
</script>
```

### 🔑 Points importants :
- On doit **importer `ref`** depuis Vue : `import { ref } from 'vue'`
- `ref()` accepte n'importe quel type de valeur : texte, nombre, booléen (vrai/faux)
- La valeur entre les parenthèses est la **valeur par défaut**

### ⚠️ La règle du `.value`
Dans le `<script setup>`, pour lire ou modifier la valeur d'une `ref`, il faut utiliser `.value` :

```javascript
// Lire la valeur
console.log(prenom.value) // affiche "Alice"

// Modifier la valeur
prenom.value = 'Sophie'
```

Mais dans le `<template>` (le HTML), Vue est assez intelligent pour ne **pas** avoir besoin de `.value` !

---

## 2. 🎨 `{{ }}` — L'interpolation (afficher une variable)

Les doubles accolades `{{ }}` permettent d'afficher la valeur d'une variable directement dans le HTML.

```vue
<template>
  <h1>Bonjour, je suis {{ prenom }}</h1>
  <p>J'ai {{ age }} ans.</p>
</template>
```

Résultat affiché dans le navigateur :
```
Bonjour, je suis Alice
J'ai 25 ans.
```

### ✨ La magie de la réactivité
Si quelque chose change `prenom.value = 'Sophie'`, le HTML se met à jour **instantanément** sans recharger la page !

---

## 3. 🔗 `v-bind:` — Lier une variable à un attribut HTML

Les `{{ }}` fonctionnent dans le texte, mais **pas** dans les attributs HTML.
Pour lier une variable à un attribut (comme `href`, `src`, `class`...), on utilise `v-bind:` ou son raccourci `:`.

```vue
<script setup>
import { ref } from 'vue'
const lienSite = ref('https://vuejs.org')
const texteAlternatif = ref('Logo de Vue')
</script>

<template>
  <!-- ❌ Ne fonctionne PAS : -->
  <!-- <a href="{{ lienSite }}">Aller sur Vue.js</a> -->

  <!-- ✅ Correct avec v-bind : -->
  <a v-bind:href="lienSite">Aller sur Vue.js</a>

  <!-- ✅ Ou avec le raccourci ":" : -->
  <a :href="lienSite">Aller sur Vue.js</a>
</template>
```

> 💡 Le raccourci `:` est exactement la même chose que `v-bind:`. On utilise presque toujours le raccourci.

---

## 4. 📊 `reactive()` — Pour les objets (explication simple)

Pour les **objets** (plusieurs propriétés groupées), on peut aussi utiliser `reactive()`.

```vue
<script setup>
import { reactive } from 'vue'

const utilisateur = reactive({
  prenom: 'Alice',
  age: 25,
  ville: 'Paris'
})
</script>

<template>
  <p>{{ utilisateur.prenom }} habite à {{ utilisateur.ville }}</p>
</template>
```

> 🎯 Pour débuter, `ref()` suffit pour tout. Tu utiliseras `reactive()` plus tard naturellement.

---

## 📋 Résumé de la Leçon

| Concept | Où | Syntaxe |
|---------|-----|---------|
| Déclarer une variable | `<script setup>` | `const maVar = ref('valeur')` |
| Lire/Modifier dans le script | `<script setup>` | `maVar.value` |
| Afficher dans le HTML | `<template>` | `{{ maVar }}` |
| Lier à un attribut HTML | `<template>` | `:attribut="maVar"` |

---

## 🏋️ Exercice 3 — À toi de jouer !

👉 **Lis le fichier `exercises/EX-03-interpolation.md`** pour tes exercices.

Le fichier contient **3 niveaux** :
- ⭐ Facile
- ⭐⭐ Moyen  
- ⭐⭐⭐ Défi

Bonne chance ! 💪
