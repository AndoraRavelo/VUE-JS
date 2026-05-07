# 📖 Leçon 11 : Travailler avec des API (Connecter Vue à un Backend)

> **Prérequis** : Maîtriser `ref`, `v-for`, et les fonctions `async`.

---

## 🌎 Le concept : Fetch

Pour parler à un serveur (Spring Boot, Node.js, ou une API publique), on utilise la fonction JavaScript **`fetch()`**. 

Faire un appel API prend du temps (quelques millisecondes ou secondes). On ne peut pas bloquer tout le site en attendant. On utilise donc des fonctions **`async`** (asynchrones) et le mot-clé **`await`** (attendre).

---

## 1. Récupérer des données (Le GET)

C'est l'action la plus courante. On demande au serveur de nous envoyer une liste de données.

```vue
<script setup>
import { ref, onMounted } from 'vue'

const utilisateurs = ref([])
const chargement = ref(true)

// La fonction qui va chercher les données
async function chargerUtilisateurs() {
  try {
    // 1. On lance la requête
    const reponse = await fetch('https://jsonplaceholder.typicode.com/users')
    
    // 2. On transforme la réponse en format JSON (langage compris par JS)
    const donnees = await reponse.json()
    
    // 3. On range les données dans notre variable ref
    utilisateurs.value = donnees
  } catch (erreur) {
    console.error("Erreur lors de l'appel API :", erreur)
  } finally {
    chargement.value = false
  }
}

// onMounted veut dire : "Fais ça dès que la page s'affiche"
onMounted(() => {
  chargerUtilisateurs()
})
</script>

<template>
  <h1>Liste des utilisateurs</h1>
  
  <p v-if="chargement">⏳ Chargement en cours...</p>
  
  <ul v-else>
    <li v-for="user in utilisateurs" :key="user.id">
      {{ user.name }} ({{ user.email }})
    </li>
  </ul>
</template>
```

### 🔑 À retenir :
- **`async / await`** : Obligatoire pour attendre la réponse sans faire ramer le site.
- **`.json()`** : Obligatoire pour transformer le texte brut du serveur en objet JavaScript utilisable.
- **`try / catch`** : Pour éviter que le site plante si l'API ne répond pas (ex: plus d'internet).

---

## 2. Envoyer des données (Le POST)

C'est ce qu'on fait pour un formulaire d'inscription par exemple. On envoie des données vers le Spring Boot.

```javascript
async function envoyerFormulaire(mesDonnees) {
  const reponse = await fetch('https://mon-api-spring.com/api/inscription', {
    method: 'POST', // On précise que c'est un envoi
    headers: {
      'Content-Type': 'application/json' // On dit au serveur qu'on envoie du JSON
    },
    body: JSON.stringify(mesDonnees) // On transforme notre objet en texte JSON
  })
  
  if (reponse.ok) {
    alert("Bravo, données envoyées !")
  }
}
```

---

## 3. Le cycle de vie : `onMounted`

Souvent, on veut charger les données **dès que l'utilisateur arrive sur la page**, sans qu'il ait besoin de cliquer sur un bouton.

Pour ça, on utilise `onMounted`. C'est un "crochet" (hook) de Vue qui s'exécute automatiquement quand le composant est prêt.

```javascript
import { onMounted } from 'vue'

onMounted(() => {
  console.log("La page est prête, je peux appeler mon API Spring Boot !")
  // Appeler ta fonction ici...
})
```

---

## 4. Ce qu'est le format JSON ? 📄

Quand le Spring Boot répond à Vue.js, il lui envoie du texte qui ressemble à ça :

```json
[
  { "id": 1, "nom": "Andoniaina", "role": "Développeuse" },
  { "id": 2, "nom": "Alice", "role": "Designer" }
]
```

C'est le format **JSON**. Vue.js adore ce format car il ressemble exactement à un tableau d'objets JavaScript !

---

## 📋 Résumé pour briller en entretien

- **Fetch** : L'outil pour communiquer avec le Backend.
- **GET** : Récupérer des infos (ex: voir ses messages).
- **POST** : Envoyer des infos (ex: poster un commentaire).
- **JSON** : Le format de texte universel utilisé pour l'échange.
- **Async/Await** : Pour gérer le temps de réponse du serveur.

---

## 🏋️ Exercice 11 — À toi de jouer !

On ne va pas utiliser ton projet Spring Boot tout de suite (ce serait trop complexe à configurer ici), on va utiliser une **API de test gratuite** sur internet.

👉 **Lis le fichier `exercises/EX-11-api.md`**

Tu vas apprendre à afficher des données réelles qui viennent d'internet ! 🚀🌐
