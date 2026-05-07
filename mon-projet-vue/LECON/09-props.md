# 📖 Leçon 9 : Les Props — Envoyer des données aux Composants

> **Prérequis** : Avoir terminé la leçon 8 sur les Composants.

---

## 🧠 Le problème 🤔

Avec les composants, tu as vu qu'on pouvait isoler du code. Par exemple : `<CarteProfil />`. 
Cependant, si tu l'utilises 3 fois... les 3 cartes affichent exactement les mêmes informations.

Dans la vraie vie, on veut que le composant `CarteProfil` affiche un profil **différent** à chaque fois (Alice, Bob, Charlie...). 
On doit donc trouver un moyen d'**envoyer des données du Parent (App.vue) vers l'Enfant (CarteProfil.vue)**.

C'est exactement à ça que servent les **Props** (raccourci pour *Properties* ou *Propriétés*).

---

## 1. Déclarer les props (Côté Enfant 👶)

Dans le composant enfant, on utilise la fonction `defineProps()` pour déclarer les données que ce composant *attend* de recevoir.

```vue
<!-- components/CarteProfil.vue (Composant Enfant) -->
<script setup>
// On déclare qu'on attend deux variables de l'extérieur : "nom" et "metier"
defineProps(['nom', 'metier'])
</script>

<template>
  <div class="carte">
    <h3>{{ nom }}</h3>
    <p>Métier : {{ metier }}</p>
  </div>
</template>
```

> 💡 **À retenir** : Les props déclarées dans `defineProps()` se comportent comme des variables classiques dans le `<template>`, tu peux donc les afficher avec `{{ }}`.

---

## 2. Envoyer les props (Côté Parent 👩‍👧)

Dans ton fichier `App.vue` (le parent), lorsque tu appelles le composant, tu lui passes les valeurs sous forme d'attributs HTML :

```vue
<!-- App.vue (Parent) -->
<script setup>
import CarteProfil from './components/CarteProfil.vue'
</script>

<template>
  <div>
    <!-- On passe les valeurs en attributs ! -->
    <CarteProfil nom="Alice" metier="Développeuse" />
    <CarteProfil nom="Bob" metier="Designer" />
    <CarteProfil nom="Charlie" metier="Chef de Projet" />
  </div>
</template>
```

Grâce à ça, la même "brique" affiche 3 résultats différents. 🧱✨

---

## 3. Le piège des Nombres et Booléens ⚠️

Si tu écris ça :
```html
<!-- Attention !!! -->
<MonComposant age="25" />
```
Pour Vue, `"25"` est considéré comme une chaine de caractères (du texte), pas comme un nombre !

Pourquoi ? Parce que c'est du HTML classique. Si on veut passer un vrai **NOMBRES**, un **BOOLÉEN** ou une **VARIABLE**, il FAUT utiliser `: ` (le fameux raccourci `v-bind` dont on a parlé dans la leçon 3).

```vue
<!-- ✅ BONNES PRATIQUES -->

<template>
  <!-- Passer un nombre -->
  <MonComposant :age="25" />

  <!-- Passer un booléen (vrai/faux) -->
  <MonComposant :estMajeur="true" />
</template>
```

Le `:` signifie à Vue : *"Attention, ce qu'il y a entre les guillemets est du **JavaScript**, pas un simple texte."*

---

## 4. L'Ultime Combo : Les Props + `v-for` 🔥

Ce combo est utilisé **partout**.
Imaginons que les données de ton parent viennent d'une base de données ou d'une liste `ref` :

```vue
<!-- App.vue (Parent) -->
<script setup>
import { ref } from 'vue'
import CarteEmploye from './components/CarteEmploye.vue'

// Liste d'employés
const utilisateurs = ref([
  { id: 1, prenom: 'Amelie', poste: 'CEO' },
  { id: 2, prenom: 'Paul', poste: 'CTO' }
])
</script>

<template>
  <div>
    <!-- On fait une boucle v-for, et on passe les attributs de la variable -->
    <!-- N'oublie pas le ":" car on passe une variable, pas un texte statique !! -->
    <CarteEmploye 
      v-for="user in utilisateurs" 
      :key="user.id" 
      :prenom="user.prenom" 
      :poste="user.poste" 
    />
  </div>
</template>
```
C'est avec cette technique exacte qu'on affiche les 30 vidéos sur la page d'accueil de Youtube avec un seul composant `VideoCard.vue`.

---

## 5. (Optionnel) Passer un Objet entier

Plutôt que de passer "prenom", puis "poste", puis "age"... on peut passer l'objet *entier* au composant.

Dans l'enfant (`CarteEmploye.vue`) :
```javascript
defineProps(['personne']) // on attend un gros objet entier
```
Dans le template de l'enfant : `{{ personne.prenom }}`

Dans le parent :
```vue
<CarteEmploye :personne="user" />
```
C'est très pratique quand l'objet a beaucoup de champs !

---

## 📋 Résumé de la Leçon

1. Les **Props** permettent au Parent d'envoyer des données au Composant Enfant.
2. Dans l'enfant : On écoute avec `defineProps(['nomVariable'])`.
3. Dans le parent : On passe par attribut `<MonComposant nomVariable="Valeur" />`.
4. Utiliser `:` (ex: `:age="20"`) pour envoyer des variables JavaScript, nombres, booléens ou objets.

---

## 🏋️ Exercice 9 — À toi de jouer !

👉 **Lis le fichier `exercises/EX-09-props.md`**

Tu vas enfin faire communiquer tes briques ! 🚀
