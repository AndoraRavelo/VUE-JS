# 📖 Leçon 8 : Les Composants — Créer et Réutiliser

> **Prérequis** : Avoir terminé toutes les leçons précédentes.

---

## 🧠 C'est quoi un Composant ?

Jusqu'à maintenant, tu as écrit tout ton code dans **un seul fichier** (`App.vue` ou tes fichiers d'exercices). C'est bien pour apprendre, mais imagine si Facebook ou Netflix ne mettaient tout leur code que dans un seul fichier... Il ferait des millions de lignes ! 😱

C'est là qu'entrent en jeu les **composants** (Components). 
Un composant, c'est comme une brique de Lego. 

Tu peux construire des briques indépendantes : 
- Un composant `EnTete.vue` pour la barre de navigation
- Un composant `CarteProfil.vue` pour afficher un profil
- Un composant `BoutonAchat.vue` pour le bouton d'achat

Ensuite, tu emboîtes ces briques pour fabriquer ton application dans `App.vue` !

---

## 1. Créer un Composant

En général, on met les fichiers des composants dans le dossier `src/components/`. 
Un composant est un simple fichier `.vue` (avec `<script setup>`, `<template>`, `<style scoped>`).

Par exemple, créons ensemble un composant `src/components/TitrePrincipal.vue` :

```vue
<!-- Fichier : src/components/TitrePrincipal.vue -->
<script setup>
</script>

<template>
  <div class="titre-box">
    <h1>👋 Salut, je suis un Composant !</h1>
    <p>Je peux être réutilisé plein de fois.</p>
  </div>
</template>

<style scoped>
.titre-box {
  background-color: #2c3e50;
  color: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}
</style>
```

> Tu vois ? C'est exactement la même structure que l'on connaît !

---

## 2. Utiliser un Composant (L'Importer)

Maintenant, on retourne dans notre fichier principal (`App.vue` par exemple) pour afficher cette "brique" `TitrePrincipal`. 

Il y a **2 étapes obligatoires** :
1. **L'importer** dans la balise `<script setup>`
2. **L'utiliser** comme une nouvelle balise HTML dans le `<template>`

```vue
<!-- Fichier : src/App.vue -->
<script setup>
// 1. On importe le fichier du composant !
// Attention au "../" ou "./" dans le chemin d'accès
import TitrePrincipal from './components/TitrePrincipal.vue'
</script>

<template>
  <div>
    <!-- 2. On l'utilise comme une balise HTML (auto-fermante avec />) -->
    <TitrePrincipal />
  </div>
</template>
```

Et voilà ! Le code du composant s'injecte directement à l'emplacement où tu as mis `<TitrePrincipal />` 🎉.

---

## 3. Le Super-Pouvoir : La Réutilisation

Pourquoi s'embêter à faire ça ? 
Le super pouvoir des composants, c'est que tu peux les appeler **autant de fois que tu veux** sans réécrire le code !

```vue
<template>
  <div>
    <TitrePrincipal />
    <TitrePrincipal />
    <TitrePrincipal />
  </div>
</template>
```
L'interface affichera les trois briques les unes en dessous des autres !

---

## 4. Chaque Composant a sa propre "Mémoire" (Indépendance)

C'est LE truc incroyable. Si ton composant a une variable `ref`, chaque exemplaire va avoir **sa propre variable indépendante**. 

Imaginons un composant `BoutonJaime.vue` :
```vue
<!-- src/components/BoutonJaime.vue -->
<script setup>
import { ref } from 'vue'
const likes = ref(0)
</script>

<template>
  <button @click="likes++">👍 J'aime ({{ likes }})</button>
</template>
```

Et tu mets ce bouton 3 fois dans `App.vue` :
```vue
<template>
  <ul>
    <li>Article 1 : <BoutonJaime /></li>
    <li>Article 2 : <BoutonJaime /></li>
    <li>Article 3 : <BoutonJaime /></li>
  </ul>
</template>
```
Si tu cliques sur le bouton de l'Article 1, **seul son compteur à lui va augmenter** ! Les autres compteurs ne bougeront pas. Chaque brique fonctionne toute seule dans son coin. 🧩

---

## 5. Le `scoped` prend tout son sens !

Tu remarqueras qu'on a toujours mis `<style scoped>`.
Ce mot clé veut dire : "Le CSS défini ici **ne s'applique qu'à CE composant**".

Si dans `BoutonJaime.vue` tu fais :
```css
<style scoped>
button { background: blue; }
</style>
```
**Seuls** les boutons à l'intérieur de `BoutonJaime.vue` seront bleus. Le reste du site ne bougera pas. C'est magique pour éviter que le CSS casse toute ta page.

---

## 📋 Résumé de la Leçon

1. Un **Composant** est un fichier `.vue` séparé (généralement dans `src/components`).
2. Pour l'utiliser, l'**importer** avec `import MonComposant from './chemin.vue'`.
3. L'utiliser dans le **`<template>`** comme une balise : `<MonComposant />`.
4. Il peut être utilisé **plusieurs fois**.
5. Chaque composant est **indépendant** (ses variables `ref` lui appartiennent).

---

## 🏋️ Exercice 8 — À toi de jouer !

👉 **Lis le fichier `exercises/EX-08-composants.md`**

Maintenant, tu vas nettoyer ton code et construire tes toutes premières "vraies" applications modulaires ! 🚀
