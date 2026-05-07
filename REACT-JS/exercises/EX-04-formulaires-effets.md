# 🏋️ Exercice 4 — Le Chercheur de Profils (API & Form)

> **Cours à lire avant** : `04-formulaires-effets.md`

---

## ⭐ Exercice 1 — La barre de recherche

**Objectif** : Créer un formulaire "vivant".

### Ce que tu dois faire :

1. Dans `App.jsx`, crée un state `recherche` (texte vide).
2. Affiche un `<input />` lié à ce state (souviens-toi : `value` et `onChange`).
3. En dessous, affiche en temps réel : "Vous recherchez l'utilisateur : {recherche}".

---

## ⭐⭐ Exercice 2 — Charger des données Réelles

**Objectif** : Utiliser `useEffect` pour appeler une API.

### Ce que tu dois faire :

1. Crée un state `utilisateurs` (un tableau vide `[]`).
2. Utilise `useEffect` pour aller chercher les données sur `https://jsonplaceholder.typicode.com/users` au chargement de la page.
3. Affiche la liste des noms (`name`) dans le HTML en utilisant `.map()`.

---

## ⭐⭐⭐ Exercice 3 — Mixer le tout (Filtrage)

**Objectif** : Filtrer la liste d'utilisateurs en fonction de l'input.

### Ce que tu dois faire :

1. **Avant ton `return`**, crée une variable `resultatsFiltres`.
2. Utilise la fonction `.filter()` sur ton tableau `utilisateurs` pour ne garder que ceux dont le nom contient ce qui est tapé dans `recherche`.
   *(Astuce : passe tout en `.toLowerCase()` pour ne pas avoir de soucis avec les majuscules).*
3. Modifie ta boucle `.map()` pour qu'elle utilise `resultatsFiltres` au lieu de `utilisateurs`.

---

## ✅ Auto-évaluation

- [ ] Mon `input` met-il bien à jour mon state quand je tape au clavier ?
- [ ] Mes données se chargent-elles bien dès que la page s'ouvre ?
- [ ] Si je tape "Leanne" dans mon input, est-ce que seule Leanne s'affiche dans la liste ?

---

C'est ton dernier grand défi pour les bases de React ! 
Une fois que tu auras fini, tu sauras faire les deux frameworks les plus populaires au monde. 🏆🚀
