<script setup>
import {ref} from 'vue'

const likes = ref(0);
const aSuivi= ref(false);
</script>

<template>
<div class="post">
<h2>Petit post</h2>
<p>Ceci est un petit texte de mon choix</p>
<button @click="likes++">J'aime ({{ likes }})</button>
<button @click="aSuivi = !aSuivi">
    {{ aSuivi ? 'Abonne ✅' : "S'abonner" }}
</button>
</div>
</template>

