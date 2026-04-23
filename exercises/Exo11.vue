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




