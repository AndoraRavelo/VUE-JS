<script setup>
import { ref } from 'vue'

const langueFavorite = ref('');
const niveauExp = ref('');
const accepteNewsletter = ref('');



</script>

<template>
  <div class="container">
    <select v-model="langueFavorite">
      <option value="">--Choisir une langue de programmation favorite--</option>
      <option value="vue">Vue.js</option>
      <option value="react">React</option>
      <option value="angular">Angular</option>
      <option value="python">Python</option>
      <option value="autre">Autre</option>
    </select>
<br>
    <label> <input type="radio" v-model="niveauExp" value="debutant">debutant</label>
    <label><input type="radio" v-model="niveauExp" value="intermediaire">intermediaire</label>
    <label><input type="radio" v-model="niveauExp" value="avance">avance</label>
<br>
    <label><input type="checkbox" v-model="accepteNewsletter">Je veux recevoir la newsletter</label>
    <div v-if="langueFavorite">
    <h3><strong>Ton profil:</strong></h3>
    <p>Langue favorite: {{ langueFavorite }}</p>
    <p>Niveau: {{ niveauExp }}</p>
    <p>Newsletter: {{ accepteNewsletter }}</p>
    </div>
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
