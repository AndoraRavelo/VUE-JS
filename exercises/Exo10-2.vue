<script setup>
import {ref, computed} from 'vue'

const contacts = ref([
    {id: 1, prenom:'Ambre'},
    {id: 2, prenom:'Mikajy'},
    {id: 3, prenom: 'Ando'}
])

const recherche = ref('')

const contactsFiltres = computed (() => {
    return contacts.value.filter(p => p.prenom.toLowerCase().includes(recherche.value))
    }
)
</script>

<template>
    <input v-model="recherche" placeholder="Rechercher ici">
    <br>
    <ul>
        <li v-for="contacts in contactsFiltres" :key="contacts.id">
                {{ contacts.prenom }}
        </li>
    </ul>
</template>