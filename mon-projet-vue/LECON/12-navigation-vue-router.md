# 📖 Leçon 12 : Vue Router — Créer plusieurs pages

> **Prérequis** : Maîtriser les composants (`import`, `<Composant />`).

---

## 🧠 C'est quoi Vue Router ?

Jusqu'ici, ton application ne contient qu'une seule page (`App.vue`). Si tu veux faire un site avec une page **Accueil**, une page **Boutique** et une page **Profil**, tu ne vas pas tout cacher et montrer avec des `v-if` !

On utilise **Vue Router**. Il permet de lier une **URL** (ex: `/contact`) à un **Composant** spécifique.

---

## 1. La structure du Router

Dans un vrai projet, on crée un dossier `src/router/index.js` pour configurer nos routes.

```javascript
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },      // Page d'accueil
    { path: '/about', component: AboutView } // Page À propos
  ]
})

export default router
```

---

## 2. Naviguer : `<RouterLink>` et `<RouterView>`

Une fois le router configuré, on utilise deux balises spéciales dans notre `App.vue` :

1.  **`<RouterLink>`** : C'est comme une balise `<a>`, mais elle ne recharge pas la page (elle est ultra rapide !).
2.  **`<RouterView />`** : C'est l'endroit où la page choisie va s'afficher.

```vue
<!-- App.vue -->
<template>
  <nav>
    <!-- On utilise TO/ au lieu de HREF/ -->
    <RouterLink to="/">Accueil</RouterLink>
    <RouterLink to="/about">À propos</RouterLink>
  </nav>

  <!-- C'est ici que le contenu de HomeView ou AboutView apparaîtra ! -->
  <main>
    <RouterView />
  </main>
</template>
```

---

## 3. Paramètres de route (Ex: ID d'un article)

Si tu veux une page pour chaque article (ex: `/article/1`, `/article/2`), on utilise le symbole `:` :

```javascript
// Dans la configuration :
{ path: '/article/:id', component: ArticleDetail }
```

Et pour récupérer cet ID dans ton composant `ArticleDetail.vue` :
```javascript
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id) // Affiche l'id présent dans l'URL !
```

---

## 4. Navigation par code (L'action de redirection)

Parfois, on veut changer de page après une action (ex: après une connexion réussie). On utilise `useRouter()` :

```javascript
import { useRouter } from 'vue-router'
const router = useRouter()

function seConnecter() {
  // ... logique de connexion ...
  router.push('/profil') // Redirige l'utilisateur vers /profil
}
```

---

## 📋 Résumé

| Balise / Outil | Rôle |
| :--- | :--- |
| `src/router/` | Dossier de configuration des routes. |
| `<RouterLink to="...">` | Créer un lien de navigation. |
| `<RouterView />` | Zone d'affichage de la page actuelle. |
| `useRoute()` | Lire les infos de l'URL (ex: les paramètres). |
| `useRouter()` | Changer de page via le code (Javascript). |

---

## 🏋️ Exercice 12 — À toi de jouer !

On va transformer ton application en un vrai site multi-pages !

👉 **Lis le fichier `exercises/EX-12-router.md`** 🚀
