<script setup>
import { ref } from 'vue'

const prenom = ref('');
const metier = ref('');
const ville = ref('');



</script>

<template>
  <div class="container">
    <h3>Veuillez remplir la formulaire</h3>
    <input v-model="prenom" placeholder="Prenom">
    <input v-model="metier" placeholder="Metier">
    <input v-model="ville" placeholder="Ville">

  
    <h3><strong>Apercu de ta carte:</strong></h3>
      <p>Prenom: {{ prenom || '...' }}</p>
      <p>Metier: {{ metier }}</p>
      <p>Ville: {{ ville }} </p>
    </div>
</template>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
}

input, select, textarea {
  display: block;
  width: 100%;
  padding: 8px 12px;
  margin: 8px 0 16px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
</style>
