# 🏋️ Exercice 7 — Les Formulaires avec `v-model`

> **Cours à lire avant cet exercice** : `07-v-model-formulaires.md`

---

## 📌 Structure de départ (copie ça dans ton `App.vue`)

```vue
<script setup>
import { ref } from 'vue'

// Tes variables ici

</script>

<template>
  <div class="container">
    <!-- Ton HTML ici -->
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
}

input, select, textarea {
  display: block;
  width: 100%;
  padding: 8px 12px;
  margin: 8px 0 16px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
</style>
```

---

## ⭐ Exercice 1 — La Carte de Visite en Direct

**Objectif** : Voir `v-model` en action avec un aperçu en temps réel.

### Ce que tu dois faire :

1. Crée ces variables :

   - `prenom` → `''`
   - `metier` → `''`
   - `ville` → `''`
2. Affiche **3 champs `<input>`** liés à ces variables avec `v-model`
3. En dessous des champs, affiche un **aperçu en direct** de la carte de visite :

   ```
   🪪 Aperçu de ta carte
   ─────────────────────
   Prénom : [prenom]
   Métier : [metier]
   Ville  : [ville]
   ```
4. **Bonus ⭐⭐** : Si `prenom` est vide, affiche `"..."` à la place dans l'aperçu (avec un opérateur ternaire : `{{ prenom || '...' }}`)

### 💡 Indice :

- `prenom || '...'` → si `prenom` est vide (falsy), affiche `'...'`

---

## ⭐⭐ Exercice 2 — Le Questionnaire de Préférences

**Objectif** : Maîtriser `<select>`, `<checkbox>` et `<radio>` avec `v-model`.

### Ce que tu dois faire :

1. Crée ces variables :

   - `langueFavorite` → `''` (pour un `<select>`)
   - `niveauExp` → `''` (pour des boutons radio)
   - `accepteNewsletter` → `false` (pour une checkbox)
2. Crée le formulaire suivant :

   **A)** Une liste déroulante `<select>` pour choisir la langue de programmation favorite :

   - Options : Vue.js, React, Angular, Python, Autre

   **B)** Des boutons **radio** pour le niveau d'expérience :

   - Options : `debutant`, `intermediaire`, `avance`

   **C)** Une **checkbox** : "Je veux recevoir la newsletter"
3. Affiche un **résumé** en dessous qui se met à jour en temps réel :

   ```
   🧑‍💻 Ton profil :
   Langue favorite : Vue.js
   Niveau : Débutant
   Newsletter : Oui / Non
   ```
4. **Bonus ⭐⭐** : Le résumé s'affiche uniquement si `langueFavorite` n'est pas vide (utilise `v-if`)

---

## ⭐⭐⭐ Exercice 3 — Le Formulaire d'Inscription

**Objectif** : Créer un formulaire complet avec validation et soumission.

### Ce que tu dois faire :

1. Crée **un objet** `form` avec `ref({...})` contenant :

   - `nom` → `''`
   - `email` → `''`
   - `motDePasse` → `''`
   - `age` → `null`
   - `accepteCGU` → `false`
2. Crée une variable `inscriptionReussie` → `false`
3. Crée une fonction `inscrire()` qui :

   - Vérifie que `nom`, `email` et `motDePasse` ne sont **pas vides**
   - Vérifie que `age` est **≥ 13**
   - Vérifie que `accepteCGU` est `true`
   - Si tout est valide → met `inscriptionReussie` à `true`
4. Dans le template**A)** Affiche le formulaire avec `v-if="!inscriptionReussie"` :

   - Input texte pour `nom`
   - Input `email` pour `email`
   - Input `password` pour `motDePasse`
   - Input `number` pour `age`
   - Checkbox pour `accepteCGU`
   - Un bouton **"S'inscrire"** qui est `:disabled` si `!accepteCGU`
   - Le formulaire utilise `@submit.prevent="inscrire"`

   **B)** Affiche un message de succès avec `v-else` :

   ```
   ✅ Inscription réussie !
   Bienvenue [nom] !
   ```
5. **Bonus ⭐⭐⭐⭐** : Affiche des **messages d'erreur** en rouge sous chaque champ si le champ est vide au moment de la soumission. Pour ça, crée une variable `erreurs` et remplis-la dans la fonction `inscrire()`.

### 💡 Indices :

- `<input type="password">` → masque le texte
- `<input type="email">` → valide le format email nativement
- Pour lier à une propriété d'objet : `v-model="form.nom"`, `v-model="form.email"`
- N'oublie pas d'accéder avec `form.value.nom` dans le `<script>`

---

## ✅ Auto-évaluation

- [X] `v-model` est sur les éléments de formulaire, pas sur les `<div>` ?
- [ ] Pour les checkboxes, ma variable `ref` est bien un **booléen** (`true`/`false`) ?
- [ ] Pour les `<select>`, la valeur de ma variable correspond bien au `value` des `<option>` ?
- [ ] Mon formulaire utilise `@submit.prevent` (et non `@click` sur le bouton) ?
- [ ] Les champs se mettent à jour **en temps réel** dans l'aperçu ?

---

## 🌟 Quand tu as terminé

Montre-moi ton formulaire ! Ensuite on passe à la **Leçon 8 : les Composants** — c'est le cœur de Vue.js ! 🧩
