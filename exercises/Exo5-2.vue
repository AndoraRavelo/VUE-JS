<script setup>
import { ref } from "vue";

const livres = ref([
{id:1, titre:"Titre 1", auteur:"Auteur 1", lu:true},
{id:2, titre:"Titre 2", auteur:"Auteur 2", lu:true},
{id:3, titre:"Titre 3", auteur:"Auteur 3", lu:false},
{id:4, titre:"Titre 4", auteur:"Auteur 4", lu:false}
])
</script>

<template>
  <div class="container">
    <div v-for=" livre in livres" :key="livre.id">
      <h3>{{ livre.titre }}</h3>
      <br>
      <p>L'auteur est {{ livre.auteur }}</p>
      <br>
      <p v-if=" livre.lu === true " :style= "{ color: 'green'}"> Lu en vert</p>
      <p v-else :style="{color: 'orange'}"> A lire en orange</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
}
</style>
