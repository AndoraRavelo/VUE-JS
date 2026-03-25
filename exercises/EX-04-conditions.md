# 🏋️ Exercice 4 — Les Conditions (`v-if`, `v-else`, `v-show`)

> **Cours à lire avant cet exercice** : `04-directives-v-if-v-show.md`

---

## 📌 Rappel : Comment travailler

1. Ouvre `mon-projet-vue/src/App.vue`
2. **Réinitialise-le** avec la structure vide (voir ci-dessous)
3. Ton serveur tourne déjà (`npm run dev`) → teste sur `http://localhost:5173`
4. Fais les exercices un par un et sauvegarde pour voir le résultat en direct !

### Structure de départ propre :

```vue
<script setup>
import { ref } from "vue";

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
</style>
```

---

## ⭐ Exercice 1 — La Lampe (Allumée / Éteinte)

**Contexte** : Tu veux afficher l'état d'une lampe.

### Ce que tu dois faire :

1. Crée une variable `ref` appelée `lampeAllumee` avec la valeur `true`
2. Dans le template, affiche **une des deux phrases** selon l'état de la variable :

   - Si la lampe est allumée → affiche : `💡 La lampe est allumée !`
   - Sinon → affiche : `🌑 La lampe est éteinte.`
3. **Change la valeur** de `lampeAllumee` à `false` dans ton code, sauvegarde et vérifie que le texte change dans le navigateur.

### 💡 Indice :

- Tu as besoin de `v-if` et de `v-else`
- Ces deux éléments doivent être l'un **juste après** l'autre dans le template

---

## ⭐⭐ Exercice 2 — La Météo du Jour

**Contexte** : Tu crées un mini-widget météo qui affiche un message selon la température.

### Ce que tu dois faire :

1. Crée une variable `temperature` avec la valeur `28` (un nombre)
2. Affiche **un message différent** selon la température :

| Condition              | Message à afficher                           |
| ---------------------- | --------------------------------------------- |
| 35 degrés ou plus     | `🥵 Il fait très chaud ! Restez hydraté.` |
| Entre 20 et 34 degrés | `😊 Beau temps ! Profitez-en.`              |
| Entre 10 et 19 degrés | `🧥 Un peu frais, prenez une veste.`        |
| Moins de 10 degrés    | `🥶 Il fait froid ! Couvrez-vous bien.`     |

3. Teste en changeant la valeur de `temperature` dans ton code (essaie `38`, `25`, `15`, `5`) pour vérifier que chaque message s'affiche correctement.

### 💡 Indices :

- Tu as besoin de `v-if`, `v-else-if` (plusieurs fois) et `v-else`
- Pour "entre 20 et 34" : `temperature >= 20` suffit si tu viens d'un `v-else-if` (car `>= 35` est déjà éliminé par le `v-if` du dessus)

---

## ⭐⭐⭐ Exercice 3 — Le Profil Utilisateur

**Contexte** : Tu simules une page de profil avec différents rôles d'utilisateurs.

### Ce que tu dois faire :

1. Crée ces variables :

   - `estConnecte` → `true`
   - `prenom` → `'Alice'`
   - `role` → `'admin'` (peut valoir `'admin'`, `'editeur'`, ou `'visiteur'`)
   - `nombreMessages` → `5`
2. Dans le template, construis l'affichage suivant **avec des conditions** :

   **A)** Si `estConnecte` est `false` → affiche uniquement :

   ```
   🔒 Accès refusé. Veuillez vous connecter.
   ```

   **B)** Si `estConnecte` est `true` → affiche d'abord le prénom, puis selon le `role` :

   - Si `role === 'admin'` → `⚙️ Panneau Admin : vous avez tous les droits.`
   - Si `role === 'editeur'` → `✏️ Espace Éditeur : vous pouvez publier des articles.`
   - Sinon → `👤 Espace Visiteur : accès en lecture seule.`

   **C)** En plus, si `nombreMessages > 0` → affiche :

   ```
   📬 Vous avez 5 nouveaux messages.
   ```

   Sinon → `📭 Aucun nouveau message.`
3. **Teste** en changeant les valeurs une par une :

   - Mets `estConnecte` à `false` → seul le message d'accès refusé apparaît
   - Mets `role` à `'editeur'` → le bon message de rôle s'affiche
   - Mets `nombreMessages` à `0` → le message "Aucun" apparaît

### 💡 Indices :

- Tu peux utiliser `v-if` / `v-else` pour `estConnecte`, et un autre `v-if` / `v-else-if` / `v-else` à l'intérieur pour le rôle. **Imbrique-les !**
- Pour comparer des textes : `role === 'admin'`
- Pour le nombre de messages, un simple `v-if="nombreMessages > 0"` suffit

---

## ✅ Auto-évaluation

- [X] Mon `v-else` est toujours **juste après** son `v-if` (sans élément entre les deux) ?
- [ ] Je n'ai pas mis `.value` dans le template (c'est uniquement dans le `<script>`) ?
- [ ] Quand je change une valeur dans le `<script>`, la page se met bien à jour automatiquement ?
- [ ] J'ai testé mes conditions avec **plusieurs valeurs différentes** pour vérifier ?

---

## 🌟 Quand tu as terminé

Montre-moi ton code et on passera à la **Leçon 5 : les listes avec `v-for`** !
C'est là que ça devient vraiment puissant 🚀
