<script setup>
import {ref, computed} from 'vue'

const panier = ref ([
    {id: 1, nom:'Ordinateur', prix:1000, quantite: 1},
    {id: 2, nom:'Souris', prix: 50, quantite: 2},
    {id: 3, nom: 'Clavier', prix: 80, quantite: 1}
])

const totalPanier = computed (() => {
    return panier.value.reduce((total, article) => {
    return total + article.quantite * article.prix
    }, 0)
})

function PrixArticle(article)  {
   return  article.quantite * article.prix;
}


const totalArticles = computed (() => {
    return panier.value.reduce((total, article) => {
    return total + article.quantite
    }, 0)
})

</script>

<template>
    <div class="contenu">
        <div v-for="p in panier" :key="p.id">
            <p>{{ p.nom }}</p>
            <p>{{ p.prix }} Ariary</p>
            <p :style="{ color : p.quantite === 0 ? 'red' : 'green'}">{{ p.quantite }}</p>
            <p ></p>
            <p>Total de cette panier:{{PrixArticle(p)}} Ariary</p>
            <button @click="p.quantite++">+</button>
            <button @click="p.quantite > 0 && p.quantite --">-</button>
        </div>
        <br>
        <br>
            <h2>Total Panier: {{ totalPanier }} Ariary</h2>
            <h2>Quantite total: {{ totalArticles }} </h2>
    </div>
</template>