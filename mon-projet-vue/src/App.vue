<script setup>
import {ref, onMounted, computed} from 'vue'

const titre = ref('')
const contenu = ref('')
const message = ref('')
const posts = ref([])

async function envoyerPost() {
    const post = {
        title: titre.value,
        body: contenu.value
    }

    try {
        const reponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        if (reponse.ok) {
            message.value= " Post envoye avec succes !"

            posts.value.push(post)
            titre.value= ''
            contenu.value= ''
           
        }
        else {
            message.value= "Erreur lors de l'envoie"
        }
    }
    catch (erreur) {
        console.error("Erreur: ", erreur)
    }
}

async function recupererPost(){
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts')
        const donnees = await result.json()
        posts.value = donnees


    } catch(erreur){
        console.error("Erreur lors de la recuperation des postes", erreur)
    }
}

onMounted(() => {
    recupererPost()
})

</script>

<template>
    <h2>Creer un poste</h2>
    <br>
    <label><input v-model="titre" placeholder="Veuillez selectionner un titre"></label>
    <br></br>

    <label><textarea v-model="contenu" placeholder="Veuillez entrer les contenus"></textarea></label>
    <br>
    <br>

    <button @click="envoyerPost">Enregistrer</button>
    <br>
    <h3>
        {{ message }}
    </h3>
        <br>
        <ul>
            <li v-for="post in posts" :key="post.title">
                {{ post.title }} - {{ post.body }}
            </li>        
        </ul>



</template>