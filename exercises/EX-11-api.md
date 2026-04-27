# 🏋️ Exercice 11 — Se connecter à une API

> **Cours à lire avant cet exercice** : `11-travailler-avec-api.md`

---

## 📌 Consignes Générales

Dans cet exercice, on va utiliser l'API gratuite **JSONPlaceholder**. C'est une fausse API utilisée par tous les développeurs pour s'entraîner.

URL à utiliser : `https://jsonplaceholder.typicode.com/posts`

---

## ⭐ Exercice 1 — Afficher une liste de Blog

**Objectif** : Faire ton premier `fetch` et afficher les données avec un `v-for`.

### Ce que tu dois faire :

1. Crée une variable `articles` (un tableau vide au début).
2. Crée une variable `enChargement` (un booléen à `true`).
3. Crée une fonction `chargerArticles()` :

   - Elle doit être `async`.
   - Elle doit faire un `fetch` sur l'URL des posts (voir plus haut).
   - Elle doit transformer le résultat en `json()`.
   - Elle doit remplir ta variable `articles` avec les données reçues.
   - À la fin, passe `enChargement` à `false`.
4. Utilise `onMounted` pour appeler cette fonction dès le démarrage.
5. Dans le template :

   - Si `enChargement` est vrai, affiche "Chargement des articles... ⏳".
   - Sinon, affiche la liste des titres d'articles avec un `v-for`.

---

## ⭐⭐ Exercice 2 — Le mini-moteur de recherche API

**Objectif** : Combiner un appel API avec un `input`.

### Ce que tu dois faire :

1. Utilise l'API des utilisateurs : `https://jsonplaceholder.typicode.com/users`
2. Charge tous les utilisateurs au démarrage.
3. Ajoute un `<input v-model="recherche">` en haut de ta page.
4. Crée un **`computed`** qui filtre la liste des utilisateurs pour ne garder que ceux dont le nom contient ce que tu as tapé dans l'input.

> 💡 **Pourquoi c'est bien ?** Tu simules une vraie barre de recherche d'entreprise !

---

## ⭐⭐⭐ Exercice 3 — Simulation d'envoi (POST)

**Objectif** : Simuler l'envoi d'un nouveau post.

### Ce que tu dois faire :

1. Crée un petit formulaire avec deux champs : `Titre` et `Contenu`.
2. Crée une fonction `envoyerPost()` qui :
   - Prépare un objet avec tes données.
   - Fait un `fetch` avec la méthode `POST`.
   - Affiche un message de succès si la réponse est `ok`.

> 💡 **Note** : L'API JSONPlaceholder ne va pas vraiment enregistrer ton post sur leur serveur (c'est une API de test), mais elle va te répondre "OK" comme si c'était vrai. C'est parfait pour s'entraîner !

---

## ✅ Auto-évaluation

- [X] Est-ce que j'ai bien utilisé `await` devant `fetch` ET devant `.json()` ?
- [X] Est-ce que mon `onMounted` est bien importé de `'vue'` ?
- [X] Est-ce que je gère l'état de chargement (pour que l'utilisateur ne voit pas une page vide) ?
- [X] Est-ce que je comprends que les données viennent d'un **vrai serveur** sur internet ?

---

## 🌟 La suite ?

Une fois que tu maîtrises ça, tu peux dire sur ton CV : **"Je sais connecter une interface Vue.js à un Backend Spring Boot via des API REST"**. C'est une phrase qui ouvre beaucoup de portes ! 🚪✨

Montre-moi ton code quand tu es prête ! 💪
