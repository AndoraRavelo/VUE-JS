<script setup>
import {ref, onMounted, computed} from 'vue'

const utilisateurs = ref ([])
const recherche = ref('')


const userfiltres = computed(() => {
    return utilisateurs.value.filter(p => p.name.toLowerCase().includes(recherche.value))
    }
)


async function chargerUtilisateur() {
    try{
        const reponse = await fetch('https://jsonplaceholder.typicode.com/users')
        const donnees = await reponse.json()
        utilisateurs.value = donnees

    } catch (erreur) {
        console.error("Erreur lors de l'appel API: ", erreur)
    }
}

onMounted (() => {
    chargerUtilisateur()
})

</script>

<template>
    <label><input v-model="recherche" placeholder="Rechercher ici..." ></label>
    <br>
    <br>
    <ul v-for="user in userfiltres " :key="user.id">
        {{ user.name }}
    </ul>
</template>