# 📖 Leçon 7 : Les Formulaires — `v-model`

> **Prérequis** : Avoir terminé les Leçons 3 à 6.

---

## 🧠 Le problème sans `v-model`

Dans l'exercice 6, tu as déjà utilisé `v-model` sur un `<input>`. Mais qu'est-ce que c'est exactement ?

Sans `v-model`, pour "lier" un champ de formulaire à une variable, il faudrait faire **deux choses** à la main :

1. Afficher la valeur dans le champ avec `:value`
2. Mettre à jour la variable à chaque frappe avec `@input`

```vue
<!-- ❌ Sans v-model : verbeux et compliqué -->
<input :value="prenom" @input="prenom = $event.target.value" />
```

`v-model` fait **les deux en même temps**, automatiquement :

```vue
<!-- ✅ Avec v-model : simple et lisible -->
<input v-model="prenom" />
```

> 🔖 `v-model` crée une **liaison bidirectionnelle** : si la variable change → le champ se met à jour. Si l'utilisateur tape → la variable se met à jour.

---

## 1. `v-model` sur un `<input>` texte

```vue
<script setup>
import { ref } from 'vue'

const prenom = ref('')
</script>

<template>
  <input v-model="prenom" placeholder="Ton prénom..." />
  <p>Tu t'appelles : <strong>{{ prenom }}</strong></p>
</template>
```

Résultat : ce que tu tapes dans le champ s'affiche **en temps réel** dans le `<p>`.

---

## 2. `v-model` sur un `<input type="number">`

Vue est intelligent : si l'input est de type `number`, il convertit automatiquement en nombre.

```vue
<script setup>
import { ref } from 'vue'
const age = ref(0)
</script>

<template>
  <input type="number" v-model="age" />
  <p>Tu as {{ age }} ans.</p>
  <p v-if="age >= 18">Tu es majeur(e) ✅</p>
  <p v-else>Tu es mineur(e) 🔒</p>
</template>
```

---

## 3. `v-model` sur une `<textarea>`

Exactement pareil qu'un `<input>` :

```vue
<script setup>
import { ref } from 'vue'
const message = ref('')
</script>

<template>
  <textarea v-model="message" rows="4" placeholder="Ton message..."></textarea>
  <p>{{ message.length }} caractères écrits</p>
</template>
```

---

## 4. `v-model` sur une `<select>` (liste déroulante)

```vue
<script setup>
import { ref } from 'vue'
const pays = ref('')
</script>

<template>
  <select v-model="pays">
    <option value="">-- Choisir un pays --</option>
    <option value="fr">France</option>
    <option value="mg">Madagascar</option>
    <option value="be">Belgique</option>
    <option value="ca">Canada</option>
  </select>

  <p v-if="pays">Tu as choisi : {{ pays }}</p>
  <p v-else>Aucun pays sélectionné</p>
</template>
```

---

## 5. `v-model` sur une `<input type="checkbox">`

Pour une case à cocher, `v-model` lie à un **booléen** (`true` / `false`) :

```vue
<script setup>
import { ref } from 'vue'
const accepteCGU = ref(false)
</script>

<template>
  <label>
    <input type="checkbox" v-model="accepteCGU" />
    J'accepte les conditions d'utilisation
  </label>

  <p v-if="accepteCGU">✅ Merci d'avoir accepté !</p>
  <p v-else>⚠️ Vous devez accepter les CGU pour continuer.</p>

  <button :disabled="!accepteCGU">Continuer →</button>
</template>
```

> 💡 `:disabled="!accepteCGU"` sur le bouton → le bouton est **grisé et désactivé** tant que la case n'est pas cochée !

---

## 6. `v-model` sur les `<input type="radio">`

Les boutons radio permettent de choisir **une seule option parmi plusieurs** :

```vue
<script setup>
import { ref } from 'vue'
const genre = ref('')
</script>

<template>
  <label><input type="radio" v-model="genre" value="femme" /> Femme</label>
  <label><input type="radio" v-model="genre" value="homme" /> Homme</label>
  <label><input type="radio" v-model="genre" value="autre" /> Autre</label>

  <p>Sélectionné : {{ genre || 'Rien encore' }}</p>
</template>
```

---

## 7. Gérer un formulaire complet

En combinant tout ça, on peut créer un **vrai formulaire** avec un bouton de soumission :

```vue
<script setup>
import { ref } from 'vue'

const form = ref({
  nom: '',
  email: '',
  abonne: false
})

const confirme = ref(false)

function soumettre() {
  if (form.value.nom && form.value.email) {
    confirme.value = true
  }
}
</script>

<template>
  <form @submit.prevent="soumettre">
    <input v-model="form.nom" placeholder="Nom" />
    <input v-model="form.email" type="email" placeholder="Email" />
    <label>
      <input type="checkbox" v-model="form.abonne" />
      S'abonner à la newsletter
    </label>
    <button type="submit">Envoyer</button>
  </form>

  <div v-if="confirme">
    <h3>✅ Formulaire envoyé !</h3>
    <p>Nom : {{ form.nom }}</p>
    <p>Email : {{ form.email }}</p>
    <p>Newsletter : {{ form.abonne ? 'Oui' : 'Non' }}</p>
  </div>
</template>
```

### 🔑 Points importants :

- `@submit.prevent` → empêche le rechargement de la page (comportement par défaut des formulaires HTML)
- `form.value.nom` → on accède aux propriétés de l'objet `form` avec `.value.propriete`
- `form.abonne ? 'Oui' : 'Non'` → l'opérateur ternaire pour afficher du texte selon un booléen

---

## 📋 Résumé de la Leçon

| Élément                   | `v-model` → type de variable       |
| --------------------------- | ------------------------------------- |
| `<input type="text">`     | `ref('')` (texte)                   |
| `<input type="number">`   | `ref(0)` (nombre)                   |
| `<textarea>`              | `ref('')` (texte)                   |
| `<select>`                | `ref('')` (valeur de l'option)      |
| `<input type="checkbox">` | `ref(false)` (booléen)             |
| `<input type="radio">`    | `ref('')` (valeur du bouton choisi) |

---

## 🏋️ Exercice 7 — À toi de jouer !

👉 **Lis le fichier `exercises/EX-07-v-model.md`**

Tu vas construire des formulaires interactifs de plus en plus complets ! 📋
