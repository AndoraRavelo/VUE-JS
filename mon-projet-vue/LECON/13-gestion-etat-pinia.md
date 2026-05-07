# 📖 Leçon 13 : Pinia — Gérer les données globales (Store)

> **Prérequis** : Maîtriser les `ref` et `computed`.

---

## 🧠 Pourquoi Pinia ?

Dans une application moyenne ou grande, plusieurs pages ou composants ont besoin de la **même information**. 
Exemples :
- L'utilisateur est-il connecté ?
- Quel est son nom ?
- Qu'y a-t-il dans son panier d'achat ?

**Pinia** est le magasin (Store) officiel de Vue.js. Tu y déposes tes données, et n'importe quel composant peut venir les chercher ou les modifier.

---

## 1. Créer un Store (Le Magasin)

En général, on crée un dossier `src/stores/`. Un Store ressemble énormément à un composant Vue, mais sans HTML.

```javascript
// src/stores/user.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // 1. Notre "State" (Les données)
  const nom = ref('Invité')
  const estConnecte = ref(false)

  // 2. Nos "Actions" (Les fonctions pour modifier les données)
  function seConnecter(nouveauNom) {
    nom.value = nouveauNom
    estConnecte.value = true
  }

  function seDeconnecter() {
    nom.value = 'Invité'
    estConnecte.value = false
  }

  // 3. Nos "Getters" (Comme des computed)
  const messageBienvenue = computed(() => {
    return estConnecte.value ? `Bonjour ${nom.value} !` : "Veuillez vous connecter."
  })

  return { nom, estConnecte, seConnecter, seDeconnecter, messageBienvenue }
})
```

---

## 2. Utiliser le Store dans un Composant

C'est très simple ! On importe le store, on l'appelle dans le script, et on utilise ses variables comme si elles étaient locales.

```vue
<script setup>
import { useUserStore } from '../stores/user'

const userStore = useUserStore()
</script>

<template>
  <div>
    <h1>{{ userStore.messageBienvenue }}</h1>
    
    <button v-if="!userStore.estConnecte" @click="userStore.seConnecter('Andoniaina')">
      Se connecter
    </button>
    
    <button v-else @click="userStore.seDeconnecter">
      Se déconnecter
    </button>
  </div>
</template>
```

---

## 3. Pourquoi c'est génial ?

Si tu changes le nom de l'utilisateur sur la page **Profil**, il sera **automatiquement** mis à jour dans la **NavBar** ou sur la page **Accueil**, car tous lisent la même source de vérité : le Store Pinia.

---

## 📋 Résumé des termes

| Terme Pinia | Équivalent Vue | Rôle |
| :--- | :--- | :--- |
| **State** | `ref()` | Les données stockées. |
| **Actions** | `function()` | Les méthodes pour modifier le State. |
| **Getters** | `computed()` | Les données calculées à partir du State. |

---

## 🏋️ Exercice 13 — À toi de jouer !

Tu vas créer ton premier magasin d'informations !

👉 **Lis le fichier `exercises/EX-13-pinia.md`** 🚀
