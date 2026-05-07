# 🏋️ Exercice 5 — Le Gestionnaire de Tâches Full CRUD

> **Objectif** : Créer une application capable de Lire, Ajouter et Supprimer des données sur une API de test.

---

## 🚀 Étape 1 : Affichage des données (READ)

1. Dans `App.jsx`, charge la liste des posts depuis : `https://jsonplaceholder.typicode.com/posts?_limit=5` (on limite à 5 pour que ce soit plus clair).
2. Affiche-les dans une liste avec un bouton "🗑️ Supprimer" à côté de chaque titre.

---

## ➕ Étape 2 : Ajout de données (CREATE)

1. Ajoute un petit formulaire en haut (un `<input />` pour le titre).
2. Crée une fonction `ajouterTache` qui fait un `fetch` en **POST**.
3. **Important** : Si le serveur répond OK, utilise `setPosts([...posts, nouvelObjet])` pour que la nouvelle tâche apparaisse immédiatement sur ton écran sans recharger la page.

---

## 🗑️ Étape 3 : Suppression (DELETE)

1. Crée une fonction `supprimerTache(id)`.
2. Elle doit faire un `fetch` en **DELETE** vers `url-de-l-api/posts/ID`.
3. **Important** : Si le serveur répond OK, utilise `.filter()` pour retirer cette tâche de ton state `posts`.

---

## ⭐ Bonus : Modification (UPDATE)

1. Ajoute un bouton "✏️ Modifier" qui permet de changer le titre d'un post (tu peux utiliser un simple `prompt()` Javascript pour demander le nouveau nom pour aller plus vite).
2. Fais un `fetch` en **PUT** et mets à jour ton state localement.

---

## ✅ Checklist de réussite :

- [ ] Est-ce que je peux voir ma liste au chargement ?
- [ ] Est-ce que mon formulaire ajoute bien un élément en haut ou en bas de la liste ?
- [ ] Est-ce que le bouton supprimer fait disparaître l'élément de mon écran ?
- [ ] Est-ce que j'ai bien utilisé `async / await` pour toutes mes fonctions ?

---

C'est LE projet qui prouve que tu sais gérer la communication entre un Frontend React et un Backend ! Montre-moi le résultat. 💪🔥
