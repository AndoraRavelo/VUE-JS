<script setup>
import {ref} from 'vue'

const message = ref('')
const listeMessage = ref([])

function enregistrer() {
    if(message.value.trim() !== "") {
        listeMessage.value.push(message.value);
        message.value = "";
    }
}
</script>

<template>
    <div>
        <h3>Formulaire de contact: </h3>
        <br>

        <textarea v-model="message" placeholder="Laisser un message ici...."></textarea>
        <br>
        <button @click="enregistrer">Enregistrer</button>
    </div>
        <h3>Liste des messages</h3>
            <ul>
                <li v-for="(liste, index) in listeMessage" :key="index">
                 {{ liste }}
                </li>
            </ul>


</template>

