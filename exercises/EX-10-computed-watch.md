# 🏋️ Exercice 10 — Computed & Watch (Le Boss Final !)

> **Cours à lire avant cet exercice** : `10-computed-et-watch.md`

---

## 📌 Consignes Générales

C'est le dernier exercice ! Tu peux les réaliser dans `Exo10-1.vue`, `Exo10-2.vue`... et utiliser ton `App.vue` comme point d'entrée pour les voir.

---

## ⭐ Exercice 1 — Le Panier Intelligent (`computed`)

**Objectif** : Un de tes premiers gros avantages sur Vue est que les calculs peuvent être "vivants". Faisons une facture dynamique !

### Ce que tu dois faire :

1. Dans ton composant, crée cette liste d'achats `ref` :

   ```javascript
   const panier = ref([
     { id: 1, nom: 'Ordinateur', prix: 1000, quantite: 1 },
     { id: 2, nom: 'Souris', prix: 50, quantite: 2 },
     { id: 3, nom: 'Clavier', prix: 80, quantite: 1 }
   ])
   ```
2. Crée un **`computed`** nommé `totalPanier` qui calcule le prix total de tous les articles.
   *(Formule : pour chaque article, multiplier `prix` par `quantite` et additionner le tout).*
3. Crée un **autre `computed`** nommé `totalArticles` qui calcule le nombre total d'articles dans le panier (dans cet exemple, ça fait 4 articles : 1 + 2 + 1).
4. Dans le `<template>` :

   - Fais une boucle (`v-for`) pour afficher chaque article avec son nom, prix unitaire, et deux boutons `+` et `-` pour modifier la `quantite` (qui ne doit jamais aller en dessous de 0).
   - Affiche en gros le `totalPanier` et le `totalArticles`.

> 🪄 **Magie** : Joue avec les boutons `+` et `-`. Le Prix Total et le Nombre Total se mettront à jour absolument tout seuls en temps réel grâce à `computed` !

---

## ⭐⭐ Exercice 2 — La Barre de Recherche Rapide (`computed`)

**Objectif** : Filtrer une liste, le cas d'usage le plus courant de `computed`.

### Ce que tu dois faire :

1. Crée un tableau `contacts` (avec quelques objets : `{ id: 1, prenom: 'Ambre' }`).
2. Crée un `ref` vide pour la recherche : `const recherche = ref('')`.
3. Crée un `computed` nommé `contactsFiltres`. Ce computed doit retourner ton tableau **MAIS filtré**. Si le contact contient le mot tapé dans `recherche` (ne pas oublier de tout mettre en minuscules pour ne pas déranger par les majuscules), il reste, sinon on l'enlève !
4. Dans le template, met un simple `<input v-model="recherche">` et une liste `<ul>` affichant **`contactsFiltres`**.

---

## ⭐⭐⭐ Exercice 3 — La Sauvegarde Automatique Locale (`watch`)

**Objectif** : Ton premier contact avec le stockage du navigateur ! Tu vas sauvegarder des notes comme l'application Notepad de ton téléphone.

### Ce que tu dois faire :

1. Crée un `ref` de texte long "Bloc-Notes" :
   ```javascript
   // On regarde dans le localStorage s'il y a déjà une note, sinon c'est vide.
   const maNote = ref(localStorage.getItem('note_secrete') || '')
   ```
2. Crée un `ref` pour le statut de sauvegarde : `const notification = ref('')`
3. Utilise **`watch`** pour "surveiller" `maNote` :
   - Chaque fois qu'on tape une lettre, on enregistre dans le navigateur : `localStorage.setItem('note_secrete', nouvelleValeur)`
   - Modifie `notification.value = "Sauvegarde en cours..."`
   - Ensuite (tu peux utiliser un simple `setTimeout`), passe `notification` à `"Toutes les modifications sont sauvegardées"`.
4. Dans ton `<template>` :
   - Déclare une `<textarea v-model="maNote">`.
   - Affiche avec un petit `<p>` le statut (`notification`).

### 🧐 Comment tester la sauvegarde "réelle" :

Si tu rafraîchis ta page (F5), le texte de ton bloc-note **sera toujours là** !! Magique non ? C'est ça, la puissance des effets de bord avec `watch`.

---

## ✅ Auto-évaluation

- [ ] Un `computed` a toujours un `return` ! C'est bon pour toi ?
- [ ] Dans le template (le HTML), les `computed` s'écrivent comme des variables (sans parenthèses) `{{ totalPanier }}` et non pas `{{ totalPanier() }}`.
- [ ] Mon `watch` utilise les deux paramètres `(nouvelleValeur, ancienneValeur)` pour écouter le texte.

---

## 🌟 Fin du parcours initial !

Bravo ! Si tu termines cet exercice, sache que **tu as vu 95% des concepts que l'on utilise TOUS LES JOURS pour créer les plus gros sites du monde**.

🚀 Une fois terminé, on pourra (si tu le souhaites) créer la structure d'un **gros projet global final** pour mettre tout ça en pratique ! Montre-moi tes exercices 💪.
