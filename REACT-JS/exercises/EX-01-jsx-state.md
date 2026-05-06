# 🏋️ Exercice 1 — Hello React !

> **Cours à lire avant** : `01-intro-jsx-state.md`

---

## 🛠️ Préparation

1. Va dans `d:\EVAL\VUE-JS\REACT-JS\mon-projet-react\src`.
2. Ouvre **`App.jsx`**.
3. **Supprime tout** et remplace par cette structure vide :

```jsx
import { useState } from 'react'

function App() {
  // 1. Crée tes variables ici avec useState
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* 2. Affiche tes données ici */}
      <h1>Ma première page React</h1>
    
    </div>
  )
}

export default App
```

---

## ⭐ Ton défi

**Objectif** : Afficher des données réactives.

1. Crée une variable d'état `nom` avec ton nom par défaut.
2. Crée une variable d'état `metier` avec "Développeuse".
3. Crée une variable d'état `passion` avec ce que tu aimes.
4. Affiche-les dans le HTML en utilisant les accolades `{ }`.

Exemple de rendu attendu :

> Je m'appelle **Andoniaina**, je suis **Développeuse** et j'adore **le code**.

---

## 💡 Astuce de Style

En React, pour le style "en ligne" (inline), on utilise deux paires d'accolades :
`style={{ color: 'blue', fontSize: '20px' }}`.

---

## ✅ Auto-évaluation

- [X] J'ai bien importé `useState` de `'react'` ?
- [X] Mes variables sont déclarées avec la syntaxe `const [x, setX] = useState(...)` ?
- [X] J'utilise des accolades simples `{ }` dans mon HTML ?
- [X] Mon code est bien enveloppé dans une seule balise parent (ex: `<div>`) ?

---

Quand tu as fini, dis-le moi ! On passera tout de suite à la leçon 2 (Événements et Conditions). 🚀
