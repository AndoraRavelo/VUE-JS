import { defineStore } from 'pinia'
import {ref, computed, watch } from 'vue'

export const useCartStore = defineStore ('cart', () => {
//Charger depuis LocalStorage (JSON -> Tableau)
    const items = ref(
        JSON.parse(localStorage.getItem('items_save') || '[]')
    )

    function ajouterProduit(nom) {
        items.value.push(nom)
    }

    function supprimerProduit(index){
        items.value.splice(index, 1);
    }

    function viderProduit() {
        items.value = []
    }
    const nombreArticles = computed(() => {
        return items.value.length
    })
//Sauvegarder dans LocalStorage (Tableau -> JSON)
    watch(items, (nouvelleValeur) => {
        localStorage.setItem('items_save', JSON.stringify(nouvelleValeur)
        )
    }, {deep: true })

    return {items, ajouterProduit, nombreArticles, supprimerProduit, viderProduit}
})