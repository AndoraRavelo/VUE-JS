<script setup>
import {useCartStore} from '@/stores/cart'

const cart = useCartStore()
</script>

<template>
    <h1>Mon panier: {{cart.nombreArticles }}</h1>

    <button @click="cart.ajouterProduit('pizza')" >Ajouter une pizza</button>
    <button @click="cart.ajouterProduit('coca-cola')" >Ajouter une coca</button>
    <button @click="cart.ajouterProduit('humburger')" >Ajouter une humberger</button>
    <button @click="cart.viderProduit()">Reinitialiser</button>



    <ul>
        <li  v-for="(item, index) in cart.items" :key= "index" >
            {{ item }} 
            <br>
            <button @click="cart.supprimerProduit(index)">Supprimer</button>
        </li>
    </ul>
</template>