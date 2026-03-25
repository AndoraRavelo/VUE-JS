<script setup>
import { ref } from "vue";

const eleves= ref([
{id:1, prenom:"Prenom un", matiere:"Maths", note:17},
{id:2, prenom:"Prenom deux", matiere:"Histoires", note:5},
{id:3, prenom:"Prenom trois", matiere:"Science", note:20},
{id:4, prenom:"Prenom quatres", matiere:"Anglais", note:8},
{id:5, prenom:"Prenom cinq", matiere:"Maths", note:13}
])
</script>

<template>
  <div class="container">
<table>
  <thead>
    <tr>
      <th> Prenom </th>
      <th> Matiere </th>
      <th> Note </th>
      <th> Mention </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="eleve in eleves " :key="eleve.id">
      <td> {{ eleve.prenom }}</td>
      <td> {{ eleve.matiere }}</td>
      <td>{{ eleve.note }}</td>
      <td>
        <td v-if="eleve.note >= 16" :style="{backgroundColor: 'greenyellow'}">Excellent</td>
        <td v-else-if="eleve.note >= 14" :style="{backgroundColor: 'blue'}">Bien</td>
        <td v-else-if="eleve.note >= 12" :style="{backgroundColor: 'blue'}">Assez Bien</td>
        <td v-else-if="eleve.note >= 10" :style="{backgroundColor: 'orange'}">Passable</td>
        <td v-else :style="{backgroundColor: 'red'}">Insuffisant</td>
      </td>
    </tr>
  </tbody>
</table>
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
