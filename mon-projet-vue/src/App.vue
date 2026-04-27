<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
<nav>
    <RouterLink to="/"> Home</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
</nav>
<main>
    <RouterView />
</main>
</template>