<script setup>
import { ref } from "vue";

const compteur = ref(0);

function incrementer() {
  compteur.value++;
}

function reinitialiser() {
    compteur.value = 0;
}

</script>

<template>
  <div class="container">
    <h2>Compteur : {{ compteur }}</h2>
      <br>
      <h1><span v-if="compteur === 0"> Commence à cliquer !</span>
      <span v-else-if="compteur <= 9"> Continue...</span>
      <span v-else-if="compteur >= 10"> Tu as atteint 10 !!</span>
    </h1>
      
    <button @click="incrementer">Ajouter</button>
    <button @click="reinitialiser">Reinitialiser</button>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
}

button {
  cursor: pointer;
  padding: 8px 16px;
  margin: 5px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
}
</style>
