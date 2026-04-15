<script setup>
import { ref } from "vue";

const taches = ref(["Texte 1","Texte 2","Texte 3"]);
const nouvelleTache = ref("");

function ajouterTache() {
  if (nouvelleTache.value.trim() !== "") {
    taches.value.push(nouvelleTache.value);
    nouvelleTache.value = "";
  }
}

function supprimerTache(index) {
  taches.value.splice(index, 1);
}


</script>

<template>
  <div class="container">
    <h2>Mes taches:{{ taches.length }}</h2>
    <input v-model="nouvelleTache" placeholder="Nouvelle Tache..." @keyup.enter="ajouterTache">
    <button @click="ajouterTache">Ajouter</button>
  

    <ul >
    <li v-if="taches.length === 0" > Aucune tache, profite!</li>
    <template v-else>
            <li v-for="(tache, index) in taches" :key="index">
           {{ tache }}
              <button @click="supprimerTache(index)">Supprimer</button>
            </li>
          </template>
    </ul>

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
