# 🏋️ Exercice 13 — Gérer les données avec Pinia

> **Cours à lire avant cet exercice** : `13-gestion-etat-pinia.md`

---

## 🛠️ Étape 0 : Installer Pinia
Comme pour le Router, il faut installer Pinia dans ton projet.

1. **Ouvre un terminal** et tape :
   ```bash
   npm install pinia
   ```

2. **Configure-le dans `src/main.ts`** :
   ```javascript
   import { createPinia } from 'pinia'
   // ...
   const app = createApp(App)
   app.use(createPinia()) // On ajoute le magasin central
   app.use(router)
   app.mount('#app')
   ```

---

## ⭐ Exercice 1 — Créer le Store du Panier

**Objectif** : Créer un magasin pour un système de boutique.

### Ce que tu dois faire :

1. Crée un dossier `src/stores/`.
2. Crée un fichier `cart.js` (le panier).
3. À l'intérieur, crée un store avec :
   - `items` (un tableau `ref` vide).
   - Une action `ajouterProduit(nom)` qui ajoute un produit au tableau.
   - Un getter `nombreArticles` qui retourne la longueur du tableau.

---

## ⭐⭐ Exercice 2 — Utiliser le Store sur deux pages

**Objectif** : Vérifier que les données sont bien partagées.

### Ce que tu dois faire :

1. Sur ta **Page Accueil** (`HomeView.vue`) :
   - Affiche le nombre d'articles présents dans le panier (ex: "Mon panier : 0").
   - Ajoute un bouton "Ajouter une Pizza 🍕" qui appelle l'action du store.

2. Crée une nouvelle page **Boutique** (`BoutiqueView.vue`) :
   - N'oublie pas de l'ajouter dans ton `router/index.js` !
   - Sur cette page, affiche la liste complète des articles du panier avec un `v-for`.

---

## ⭐⭐⭐ Exercice 3 — Persistance (Défi)

**Objectif** : Faire en sorte que le panier ne se vide pas quand on rafraîchit la page.

### Ce que tu dois faire :

1. Dans ton store `cart.js`, utilise un **`watch`** sur le tableau `items`.
2. Chaque fois qu'il change, enregistre-le dans le `localStorage`.
3. Au démarrage du store, essaie de récupérer les données du `localStorage` pour remplir `items`.

---

## ✅ Auto-évaluation

- [ ] `pinia` est bien installé et activé dans `main.ts` ?
- [ ] Mes deux pages (Accueil et Boutique) voient-elles bien le **même** nombre d'articles ?
- [ ] Mon action `ajouterProduit` fonctionne-t-elle ?
- [ ] Le `localStorage` garde-t-il bien mes pizzas après un refresh ? (Exercice 3)

---

## 🌟 La suite ?

C'est TON DERNIER EXERCICE de base ! Une fois fini, tu auras toutes les armes pour attaquer un projet complexe. 🚀🚀
