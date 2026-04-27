# 🏋️ Exercice 12 — Navigation avec Vue Router

> **Cours à lire avant cet exercice** : `12-navigation-vue-router.md`

---

## 🛠️ Étape 0 : Installer Vue Router

Dans ton projet actuel, le Router n'est pas encore installé.

1. **Ouvre un nouveau terminal** (sans couper ton serveur `dev`).
2. Tape cette commande :
   ```bash
   npm install vue-router@4
   ```

---

## ⭐ Exercice 1 — Créer les pages (Views)

**Objectif** : Transformer tes anciens composants en vraies "pages".

### Ce que tu dois faire :

1. Crée un dossier `src/views/` (s'il n'existe pas).
2. Crée deux fichiers dedans :
   - `HomeView.vue` : Affiche "Bienvenue sur ma page d'accueil ! 🏠"
   - `ContactView.vue` : Affiche un simple formulaire de contact avec un champ Message et un bouton.

---

## ⭐⭐ Exercice 2 — Configurer le Router

**Objectif** : Dire à Vue quelle page afficher selon l'URL.

### Ce que tu dois faire :

1. Crée le fichier `src/router/index.js` (ou `.ts`).
2. Configure les deux routes :
   - `'/'` pour `HomeView`
   - `'/contact'` pour `ContactView`
3. Dans ton fichier `src/main.ts`, importe ce router et dis à Vue de l'utiliser :
   ```javascript
   // src/main.ts
   import router from './router'
   // ...
   app.use(router)
   app.mount('#app')
   ```

---

## ⭐⭐⭐ Exercice 3 — Créer la Barre de Navigation

**Objectif** : Naviguer sans recharger la page.

### Ce que tu dois faire :

1. Dans ton `App.vue`, **supprime tout** ce qu'il y a dans le `<template>`.
2. Crée une barre de navigation avec deux `<RouterLink>` (Accueil et Contact).
3. Ajoute la balise `<RouterView />` en dessous pour que les pages s'affichent.

### 🧐 Ce qu'il faut observer :

Regarde l'URL dans ton navigateur. Quand tu cliques sur "Contact", l'URL devient `.../contact` et le formulaire apparaît instantanément sans que la petite icône de chargement du navigateur ne tourne ! C'est ça, la puissance d'une **SPA** (Single Page Application).

---

## ✅ Auto-évaluation

- [X] J'ai bien installé `vue-router` avec npm ?
- [X] Mes pages sont bien dans le dossier `views/` ?
- [X] J'ai utilisé `<RouterLink>` et non pas `<a>` ?
- [X] Ma balise `<RouterView />` est bien présente dans `App.vue` ?

---

## 🌟 La suite ?

Une fois que tu sais jongler entre les pages, ton site ressemble enfin à un vrai site pro !

Montre-moi quand tu as réussi à naviguer entre tes deux pages. 💪🚀
