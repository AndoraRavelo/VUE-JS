# 📖 Leçon 3 : Composants, Props & Boucles

> On accélère le rythme ! Ici on va regrouper la création de composants, la transmission d'informations et l'affichage de listes.

---

## 1. Créer et utiliser un composant

En Vue.js, tu créais un fichier `MonComposant.vue`.
En React, un composant **n'est qu'une simple fonction Javascript qui retourne du HTML**.

```jsx
// src/components/Salutation.jsx
function Salutation() {
  return <h2>Coucou, je suis un composant !</h2>
}

export default Salutation
```

Puis, pour l'utiliser dans `App.jsx` :
```jsx
// src/App.jsx
import Salutation from './components/Salutation'

function App() {
  return (
    <div>
      <Salutation />
      <Salutation />
    </div>
  )
}
export default App
```

---

## 2. Les Props (Remplacer `defineProps`)

En React, pas besoin de `defineProps`. Les props sont tout simplement **les arguments de la fonction** ! 
Oublie le `v-bind` (`:`), en React on ouvre simplement des `{ }` pour dire "C'est du code JS".

```jsx
// src/components/CartePasseport.jsx

// 1. On "déstructure" l'objet props directement dans les () de la fonction
function CartePasseport({ nom, age, estMajeur }) {
  return (
    <div className="carte">
      <h3>Nom : {nom}</h3>
      <p>Âge : {age} ans</p>
      {estMajeur && <p>✅ Valide pour voyager</p>}
    </div>
  )
}

export default CartePasseport
```

Pour appeler ce composant côté "Parent" (`App.jsx`) :
```jsx
<CartePasseport nom="Andoniaina" age={25} estMajeur={true} />
{/* Note : age et estMajeur ont des { } pour prouver que ce sont un nombre et un booléen, pas du texte */}
```

---

## 3. Les Boucles (Adieu `v-for`, bonjour `.map()`)

En Vue, tu écrivais cela directement dans le HTML : `<div v-for="user in users" :key="user.id">`.

En React, tu utilises la fonction Javascript **`.map()`** à l'intérieur des `{ }`. C'est une fonction qui prend un tableau, et qui "transforme" (map) chaque élément en un bloc HTML.

```jsx
import { useState } from 'react'

function App() {
  const [fruits, setFruits] = useState([
    { id: 1, nom: 'Pomme' },
    { id: 2, nom: 'Banane' },
    { id: 3, nom: 'Fraise' }
  ])

  return (
    <ul>
      {/* On va faire une boucle avec .map() */}
      {fruits.map((fruit) => (
        <li key={fruit.id}>{fruit.nom}</li>
      ))}
    </ul>
  )
}
```
**⚠️ RÈGLE D'OR** : L'élément juste après le `return` de la boucle du `.map()` DOIT obtenir l'attribut `key={...}` (exactement comme le `:key` de Vue.js).

---

## 📋 Tableau de traduction ultime

| Vue.js | React |
| :--- | :--- |
| `src/components/Carte.vue` | `src/components/Carte.jsx` (ou juste `.js`) |
| `defineProps(['nom'])` | `function Carte({ nom })` |
| `<Carte :prix="50" />` | `<Carte prix={50} />` |
| `<li v-for="tag in liste" :key="tag.id">` | `{liste.map(tag => <li key={tag.id}>)}` |

---

## 🏋️ Exercice 3 — À toi de jouer !

👉 **Lis le fichier `exercises/EX-03-composants-boucles.md`**
