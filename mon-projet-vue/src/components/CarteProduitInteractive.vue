<script setup>
import {ref, computed} from 'vue'
const props = defineProps({
  nom: String,
  prix: Number,
  enStock: Boolean
})

const styleDynamique = computed (() => {
    if(props.enStock === true) return {color :'green'}
    if(props.enStock === false) return {color : 'red'}
    }
)

</script>

<template>
    <div class="contenu">
        <h3>{{nom }}</h3>
        <p>{{ prix }} €</p>
        <p :style="styleDynamique"> {{ enStock ? 'Disponible' : 'Rupture' }}</p>
    </div>
</template>
