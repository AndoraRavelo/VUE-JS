<script setup>
import {ref, computed} from 'vue'
const Props = defineProps([
    'type', 'message'])

const styleDynamique = computed (() => {
    if(Props.type === 'Succes') return {color : "green" }
    if(Props.type === 'Erreur') return {color : 'red'}
    if(Props.type === 'Info') return {color : 'blue'}
})
</script>

<template>
<div :style="styleDynamique" class="Banniere">
<h3>{{ type }}</h3>
<p>{{ message }}</p>
</div>
</template>

<style scoped>
.banniere {
  color: white;
  padding: 10px;
  border-radius: 5px;
}
</style>