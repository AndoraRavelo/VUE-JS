<script setup>
import { ref } from "vue";

const score = ref(0);
const historique = ref([]);

function modifier(valeur) {
  if (score.value + valeur < 0 ) {
    score.value = 0;
  } else {
    score.value+= valeur;
  }

const signe = valeur > 0 ? "+" : "";
historique.value.push(`${signe}${valeur} points`);
}


</script>

<template>
  <div class="container">
    <h2> Score: {{ score }}</h2>
    <button @click="modifier(+10)">Ajouter +10</button>
    <button @click="modifier(+5)">Ajoutern +5</button>
    <button @click="modifier(-5)">Ajouter -5</button>
    <button @click="modifier(-10)">Ajouter -10</button>
  </div>

  <ul>
    <li v-for="(historiques, index) in historique" :key="index">
      {{ historiques }}
    </li>
  </ul>
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
