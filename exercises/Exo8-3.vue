<script setup>
import EnTete from './components/EnTete.vue'
import ProduitBoutique from './components/ProduitBoutique.vue'
import PiedDePage from './components/PiedDePage.vue'
</script>

<template>
    <EnTete />

  <div class="boutique-liste">
     <ProduitBoutique />
     <ProduitBoutique />
     <ProduitBoutique />
  </div>

  <PiedDePage />
</template>