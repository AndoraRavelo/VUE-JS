<script setup>
import {ref} from 'vue'
const likes = ref(0)
</script>

<template>
    <button @click="likes++">J'aime ({{  likes  }})</button>
</template>
<style scoped>
button { background: blue; }
</style>