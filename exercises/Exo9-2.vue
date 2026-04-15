<script setup>
import CarteProduitInteractive from './components/CarteProduitInteractive.vue'
</script>

<template>
    <div class="contenu">
        <CarteProduitInteractive nom="Clavier Mecanique" :prix="120" :enStock="true" />
        <CarteProduitInteractive nom="Souris Ergonimique" :prix="45" :enStock="false" />
    </div>
</template>