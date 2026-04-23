<script setup>
import {onMounted, ref} from'vue'

const articles = ref([])
const enChargement = ref(true)

async function chargerArticles() {
    try {
        const reponse = await fetch('https://jsonplaceholder.typicode.com/posts')
        const donnees = await reponse.json()
        articles.value = donnees

    } catch (erreur) {
        console.error("Erreur lors de l'appel API: ", erreur)

    } finally{
        enChargement.value = false
    }
}

onMounted (() => {
    chargerArticles()
})
</script>
<template>
    <p v-if="enChargement"> "Chargement des articles......."</p>
    <ul v-else> <h2>Les articles sont: </h2>
        <li v-for=" article in articles" :key="article.id">
            {{ article.title }} et {{ article.body }} 
        </li>
    </ul>

</template>