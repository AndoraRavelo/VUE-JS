<script setup>
import {ref} from 'vue'
import CarteProduitInteractive from './components/CarteProduitInteractive.vue';

const mesArticles = ref([
    {id: 1, nom:'Ecran 4K', prix:350, stock:true},
    {id: 2, nom:'Clavier', prix:120, stock:false},
    {id: 3, nom:'Webcam', prix:70, stock:true},
    {id: 4, nom:'Tapis XXL', prix:20, stock:true}
    ])
</script>

<template>
    <CarteProduitInteractive
    v-for="article in mesArticles"
    :key="article.id"
    :nom="article.nom"
    :prix="article.prix"
    :enStock="article.stock"
    />
</template>