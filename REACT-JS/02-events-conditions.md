# 📖 Leçon 2 : Événements et Conditions

> Tu connais déjà `@click` et `v-if` en Vue. Voici comment ça se traduit en React.

---

## 1. Les Événements (`onClick`, `onChange`...)

### Vue vs React

| Vue.js | React |
| :--- | :--- |
| `@click="maFonction"` | `onClick={maFonction}` |
| `@click="maFonction(5)"` | `onClick={() => maFonction(5)}` |
| `@mouseover="..."` | `onMouseOver={...}` |
| `@keyup.enter="..."` | `onKeyUp={(e) => e.key === 'Enter' && ...}` |

### Exemple : Le Compteur

```jsx
import { useState } from 'react'

function App() {
  const [compteur, setCompteur] = useState(0)

  function incrementer() {
    setCompteur(compteur + 1)
  }

  function reinitialiser() {
    setCompteur(0)
  }

  return (
    <div>
      <h1>Compteur : {compteur}</h1>
      <button onClick={incrementer}>➕ Ajouter</button>
      <button onClick={reinitialiser}>🔄 Reset</button>
    </div>
  )
}
```

### ⚠️ Les pièges à éviter

```jsx
// ❌ ERREUR CLASSIQUE : Ça exécute la fonction immédiatement au rendu !
<button onClick={maFonction(5)}>Cliquer</button>

// ✅ CORRECT : On enveloppe dans une fonction fléchée
<button onClick={() => maFonction(5)}>Cliquer</button>

// ✅ CORRECT : Sans argument, pas besoin de ()
<button onClick={maFonction}>Cliquer</button>
```

---

## 2. Les Conditions (Pas de `v-if` en React !)

React n'a pas de directives. À la place, on utilise directement du **JavaScript pur** dans le JSX.

### Méthode 1 : L'opérateur ternaire `? :`

C'est l'équivalent de `v-if` / `v-else`.

```jsx
// Vue.js :
// <p v-if="estConnecte">Bienvenue !</p>
// <p v-else>Connectez-vous.</p>

// React :
<p>{estConnecte ? 'Bienvenue !' : 'Connectez-vous.'}</p>
```

Pour des blocs HTML plus gros :
```jsx
{estConnecte ? (
  <div>
    <h1>Bienvenue !</h1>
    <p>Profil de l'utilisateur.</p>
  </div>
) : (
  <p>Veuillez vous connecter.</p>
)}
```

### Méthode 2 : Le `&&` (ET logique)

C'est l'équivalent de `v-if` **sans** `v-else` (afficher quelque chose uniquement si c'est vrai).

```jsx
// Vue.js :
// <p v-if="nombreMessages > 0">Vous avez {{ nombreMessages }} messages</p>

// React :
{nombreMessages > 0 && <p>Vous avez {nombreMessages} messages</p>}
```

### Méthode 3 : Le `if` classique (avant le `return`)

Pour des conditions plus complexes (`v-else-if`), on peut faire un `if` / `else if` / `else` **avant le return** :

```jsx
function App() {
  const [note, setNote] = useState(15)

  let mention
  if (note >= 16) mention = '🏆 Excellent'
  else if (note >= 12) mention = '👍 Bien'
  else if (note >= 10) mention = '😐 Passable'
  else mention = '❌ Insuffisant'

  return <h1>Mention : {mention}</h1>
}
```

---

## 📋 Tableau de traduction Vue → React

| Concept | Vue.js | React |
| :--- | :--- | :--- |
| Clic | `@click="fn"` | `onClick={fn}` |
| Clic avec argument | `@click="fn(5)"` | `onClick={() => fn(5)}` |
| SI / SINON | `v-if` / `v-else` | `condition ? A : B` |
| SI seulement | `v-if` | `condition && <A />` |
| SI / SINON-SI / SINON | `v-if` / `v-else-if` / `v-else` | `if/else` avant le `return` |

---

## 🏋️ Exercice 2 — À toi de jouer !

👉 **Lis le fichier `exercises/EX-02-events-conditions.md`**
