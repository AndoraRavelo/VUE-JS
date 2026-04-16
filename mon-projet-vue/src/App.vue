<script setup>
import {ref, computed, watch} from 'vue'

const maNote = ref(localStorage.getItem('note_secrete') || '' )
const notification = ref('')

watch(maNote, (nouvelleValeur) => {
    notification.value = "Sauvegarde en cours...."
    localStorage.setItem('note_secrete', nouvelleValeur)
    setTimeout(() => {
        notification.value = "Toutes les modifications sont sauvegardees"
        console.log('La note est passe de "${note_secrete}" a "${nouvellevaleur}"')
    }, 1000)
})
</script>

<template>
    <div class="conteneur">
        <textarea v-model="maNote" placeholder="Ecrire ta note ici...."></textarea>
        <p>{{ notification }}</p>
    </div>
</template>