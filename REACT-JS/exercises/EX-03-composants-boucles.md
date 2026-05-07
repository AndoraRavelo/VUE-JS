# 🏋️ Exercice 3 — Créer une liste de composants React

> **Cours à lire avant** : `03-composants-boucles.md`

---

## ⭐ Exercice 1 — Créer l'enfant (`CarteTache.jsx`)

**Objectif** : Apprendre à utiliser les Props.

### Ce que tu dois faire :

1. Dans `src/`, crée un dossier `components/` (si tu ne l'as pas déjà fait).
2. Crée un composant `CarteTache.jsx`.
3. Ce composant doit accepter 2 props : `{ titre, terminee }`.
4. Rendu JSX attendu :
   - Affiche le `titre` dans un `<h3>`.
   - Si `terminee` est vrai, affiche le tag `[✅ Fait]`. Sinon, `[⏳ En cours]`.

---

## ⭐⭐ Exercice 2 — La Boucle Complète (`App.jsx`)

**Objectif** : Importer l'enfant dans notre parent et lui passer une liste !

### Ce que tu dois faire :

1. Dans `App.jsx`, importe ton composant `CarteTache`.
2. Crée un state `taches` avec ce tableau par défaut :
   ```javascript
   const [taches, setTaches] = useState([
     { id: 1, titre: "Apprendre React", terminee: true },
     { id: 2, titre: "Faire des boucles", terminee: false },
     { id: 3, titre: "Créer un composant", terminee: true }
   ])
   ```
3. Dans ton `return`, fais une boucle `taches.map((tache) => ...)`
4. À l'intérieur de ce `map`, appelle ton composant `<CarteTache />`.
5. Obligation : Tu dois lui passer `key={tache.id}`, `titre={tache.titre}` et `terminee={tache.terminee}`.

---

## 💡 Indice syntaxe boucle :

Voici un rappel exact pour éviter les erreurs de syntaxe de boucle :

```jsx
// Dans le HTML de App.jsx :
{tableau.map((element) => (
  <MonEnfant key={element.id} proprieteX={element.xxx} />
))}
```

---

## ✅ Auto-évaluation

- [X] L'enfant `CarteTache.jsx` déstructure bien ses props avec des `{}` dans ses paramètres ?
- [X] Dans `App.jsx`, la parenthèse du `map` utilise bien `=> (` pour retourner du JSX ?
- [X] J'ai bien mis mon attribut `key` **directement sur `<CarteTache>`** et non pas dans le composant interne ?

---

Montre-moi ton `App.jsx` et ton `CarteTache.jsx` quand c'est prêt ! On approche déjà de la fin des bases React ! 🚀
