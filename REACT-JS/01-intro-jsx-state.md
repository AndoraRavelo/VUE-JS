# 📖 Leçon 1 : JSX et le State (`useState`)

> **Concept Clé** : En React, on ne sépare pas le HTML du JavaScript. On utilise le **JSX**.

---

## 1. De Vue à React : Le changement de décor

| Dans Vue.js (`.vue`) | Dans React (`.jsx`) |
| :--- | :--- |
| `<template>` | La partie **`return`** de ta fonction |
| `{{ maVariable }}` | `{ maVariable }` (une seule accolade) |
| `<script setup>` | Le corps de ta fonction |
| `ref(valeur)` | `useState(valeur)` |

---

## 2. Structure d'un composant React

Voici à quoi ressemble un fichier `.jsx` :

```jsx
import { useState } from 'react'

function App() {
  // 1. La logique (comme le script setup)
  const [prenom, setPrenom] = useState('Andoniaina')

  // 2. Le rendu (comme le template)
  return (
    <div className="container">
      <h1>Bonjour {prenom} !</h1>
    </div>
  )
}

export default App
```

### 🔑 À noter absolument :
- **`className`** : On n'écrit pas `class=""` mais `className=""` car "class" est un mot réservé en JavaScript.
- **Une seule racine** : Comme dans Vue 2, ton `return` doit renvoyer **un seul élément parent** (souvent une `<div>` ou un fragment `<> ... </>`).

---

## 3. Le State : `useState`

C'est l'équivalent de `ref()`. La syntaxe est un peu spéciale : on récupère toujours deux choses.

```javascript
const [variable, fonctionPourChanger] = useState(valeurInitiale)
```

Exemple pour un compteur :
```javascript
const [compteur, setCompteur] = useState(0)

// Pour changer la valeur :
// ❌ On ne fait PAS : compteur = 5
// ✅ On utilise la fonction : setCompteur(5)
```

---

## 4. Pourquoi pas de `.value` ?

C'est la plus grande différence ! 
- Dans Vue, tu changes `compteur.value++` et Vue s'occupe de mettre à jour le HTML.
- Dans React, tu appelles `setCompteur(compteur + 1)`. React comprend alors qu'il doit **re-exécuter toute la fonction `App()`** pour calculer le nouveau HTML.

---

## 🏋️ Exercice 1 — À toi de jouer !

On va faire simple pour commencer. 

1. Ouvre `src/App.jsx` dans ton nouveau projet React.
2. Efface tout ce qu'il y a dedans.
3. Crée un composant qui affiche ton nom et un métier (stockés dans des `useState`).

👉 **Les instructions détaillées sont dans `exercises/EX-01-jsx-state.md`**.
