# 📖 Leçon 4 : Formulaires et Cycle de vie (`useEffect`)

> Voici la dernière grande brique ! Comment gérer la saisie utilisateur et comment parler à une API.

---

## 1. Les Formulaires (Remplacer `v-model`)

En React, **`v-model` n'existe pas**. On doit faire le travail "à la main" :
1. On lie la `value` à notre variable `state`.
2. On écoute le changement avec `onChange` pour mettre à jour la variable.

```jsx
import { useState } from 'react'

function MonFormulaire() {
  const [texte, setTexte] = useState('')

  return (
    <div>
       <input 
         type="text" 
         value={texte} 
         onChange={(e) => setTexte(e.target.value)} 
       />
       <p>Tu tapes : {texte}</p>
    </div>
  )
}
```

---

## 2. L'effet de bord : `useEffect`

C'est l'un des outils les plus puissants de React. Il remplace à la fois `onMounted` et `watch` de Vue.js.

### Pourquoi l'utiliser ?
Pour faire des actions qui ne sont pas liées directement à l'affichage : appeler une API, changer le titre de la page, mettre un timer, etc.

```javascript
import { useEffect, useState } from 'react'

useEffect(() => {
  // 🚀 Ce code s'exécute APRÈS que le composant soit affiché (comme onMounted)
  console.log("Composant monté !")
}, []) // 👈 Le tableau vide [] signifie : "Ne le fais qu'une seule fois au début"
```

### Surveiller un changement (comme `watch`)
```javascript
useEffect(() => {
  console.log("Le texte a changé !")
}, [texte]) // 👈 Il s'exécute chaque fois que 'texte' change
```

---

## 3. Appeler une API (`fetch`)

C'est presque pareil qu'en Vue, mais on met souvent l'appel dans un `useEffect`.

```jsx
function ListeUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // On appelle l'API dès le début
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  )
}
```

---

## 📋 Tableau de survie Vue → React

| Vue.js | React |
| :--- | :--- |
| `v-model="maRef"` | `value={maRef}` + `onChange={...}` |
| `onMounted(() => ...)` | `useEffect(() => ..., [])` |
| `watch(maRef, () => ...)` | `useEffect(() => ..., [maRef])` |
| `@submit.prevent` | `onSubmit={(e) => { e.preventDefault(); ... }}` |

---

## 🏋️ Exercice 4 — Le Grand Final !

👉 **Lis le fichier `exercises/EX-04-formulaires-effets.md`**

C'est ici que tu vas assembler tout ce que tu as appris en React pour créer une application qui cherche des données sur internet ! 🚀🔍
