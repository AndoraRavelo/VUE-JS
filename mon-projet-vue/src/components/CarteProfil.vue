<!-- components/CarteProfil.vue (Composant Enfant) -->
<script setup>
// On déclare qu'on attend deux variables de l'extérieur : "nom" et "metier"
defineProps(['nom', 'metier'])
</script>

<template>
  <div class="carte">
    <h3>{{ nom }}</h3>
    <p>Métier : {{ metier }}</p>
  </div>
</template>