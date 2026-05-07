# 📖 Leçon 10 : Propriétés Calculées (`computed`) & Écouteurs (`watch`)

> **Prérequis** : Toutes les leçons précédentes (tu l'as fait ! 🎉).

---

## 🧠 Introduction

J'ai remarqué quelque chose de génial : **tu as utilisé `computed` de façon totalement spontanée** dans tes précédents composants (pour le style et le prix total). C'est le signe d'une vraie "logique de développeuse" !

Cette leçon vient donc juste mettre des mots et te montrer toute la puissance de `computed` et introduire son jumeau : `watch`.

---

## 1. `computed` (Propriétés calculées)

Un `computed` est comme une variable `ref`, mais **qui se calcule toute seule** à partir d'autres variables. 

### Pourquoi l'utiliser ?
Au lieu de mettre des calculs ou des logiques complexes directement dans ton `{{ }}` dans le HTML, tu les ranges dans un `computed`. Le code reste propre, et surtout : **Vue sauvegarde le résultat en mémoire (cache)** pour ne pas refaire le calcul s'il n'y a pas besoin. C'est génial pour les performances !

```vue
<script setup>
import { ref, computed } from 'vue'

const prenom = ref('Andoniaina')
const nom = ref('Randria')

// computed "écoute" prénom et nom.
// Dès que l'un des deux change, nomComplet se met à jour automatiquement !
const nomComplet = computed(() => {
  return `${prenom.value} ${nom.value.toUpperCase()}`
})
</script>

<template>
  <p>Bonjour, je suis {{ nomComplet }}</p>
</template>
```

> 🎯 **Règle d'or** : Un `computed` DOIT toujours avoir un `return`. Il ne modifie pas les choses, il se contente de **retourner une valeur calculée**.

### Un usage classique : le filtre 🔍
On s'en sert BEAUCOUP pour filtrer des données :

```javascript
const produits = ref([
   { nom: "Clavier", enStock: true },
   { nom: "Souris", enStock: false }
])

const afficherSeulementEnStock = ref(true)

const produitsVisibles = computed(() => {
  if (afficherSeulementEnStock.value) {
    return produits.value.filter(p => p.enStock === true)
  }
  return produits.value
})
```
Dans ton `<template>`, au lieu de faire `v-for="p dans produits"`, tu ferais `v-for="p dans produitsVisibles"`.

---

## 2. `watch` (Les Observateurs)

Alors que `computed` sert à **calculer** une nouvelle valeur, `watch` sert à **déclencher une ACTION** lorsqu'une variable change.

### Exemple : Sauvegarde automatique ou Appel API

```vue
<script setup>
import { ref, watch } from 'vue'

const pseudo = ref('')
const statutSauvegarde = ref('Sauvegardé.')

// On "surveille" la variable pseudo
watch(pseudo, (nouvelleValeur, ancienneValeur) => {
  statutSauvegarde.value = 'Enregistrement en cours...'
  
  // On simule une action qui prend du temps (comme sauvegarder en base de données)
  setTimeout(() => {
    statutSauvegarde.value = "Sauvegardé."
    console.log(`Le pseudo est passé de "${ancienneValeur}" à "${nouvelleValeur}"`)
  }, 1000)
})
</script>

<template>
  <input v-model="pseudo" placeholder="Changez de pseudo">
  <p>{{ statutSauvegarde }}</p>
</template>
```

> 🎯 **Règle** : On utilise `watch` quand on veut faire ce qu'on appelle "des effets de bords" (side-effects) : communiquer avec un serveur extérieur, changer le titre du navigateur (`document.title`), ou stocker quelque chose dans le navigateur.

---

## 3. Le duel : `computed` vs `watch` ⚔️

Il n'est pas toujours facile de savoir lequel utiliser. Voici le truc de pro :

- **J'ai besoin de calculer/créer une nouvelle donnée à partir de mes variables ?**
  👉 Je choisis `computed` 🟢 (Renvoie toujours une valeur).
  
- **J'ai besoin de lancer une vraie action "invisible" (comme appeler une API ou modifier le localStorage du navigateur) ou modifier des variables qui ne sont pas liées par un calcul direct quand la donnée X change ?**
  👉 Je choisis `watch` 🔵 (Ne renvoie pas de valeur). 

---

## 📋 Résumé

1. **`computed`** : Une valeur calculée automatiquement, mise en cache, qui dépend d'autres `ref`. A toujours un `return`.
2. **`watch`** : Une fonction qui exécute du code quand la variable qu'on lui a désignée change.

---

## 🏋️ Exercice 10 — À toi de jouer !

👉 **Lis le fichier `exercises/EX-10-computed-watch.md`**

C'est LE DERNIER CHAPITRE de notre formation. C'est l'heure de montrer tout ce que tu as appris ! 🚀
