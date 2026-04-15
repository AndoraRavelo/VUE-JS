<script setup>
defineProps(['id','prenom','poste'])
</script>

<template>
      <div class="carte">
    <h3>{{ prenom}}</h3>
    <p>{{ id }}</p>
    <p>Poste : {{ poste }}</p>
  </div>
</template>