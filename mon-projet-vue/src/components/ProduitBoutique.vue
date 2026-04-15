<script setup>
import { ref, computed} from 'vue'

const produit = ref({
  nom: 'Produit 1',
  prix: 1200,
  compteur: (0)
})

const PrixTotal  = computed (() => {
    return produit.value.prix * produit.value.compteur
})
</script>

<template>
  <div class="contenu">
    <img src="../assets/download.png" alt="une image">
    <h3>{{ produit.nom }}</h3>
    <p>{{ PrixTotal }} Ariary</p>
    <p>Quantite: {{ produit.compteur }}</p>

    <div class="buttons">
      <button @click="produit.compteur++"> + </button>
      <button @click="produit.compteur > 0 && produit.compteur--"> - </button>
    </div>
  </div>
</template>

<style scoped>
.contenu {
  border: 1px solid #ddd;
  padding: 15px;
  width: 200px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

img {
  width: 100%;
  border-radius: 8px;
}

h3 {
  margin: 10px 0;
  color: #34495e;
}

p {
  margin: 5px 0;
}

.buttons {
  margin-top: 10px;
}

button {
  margin: 5px;
  padding: 5px 10px;
  border: none;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>