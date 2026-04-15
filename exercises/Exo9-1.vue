<script setup>
import BanniereNotif from './components/BanniereNotif.vue';
</script>

<template>
  <BanniereNotif type="Succes" message="Votre profil a été mis à jour" />
  <br>
  <BanniereNotif type="Erreur" message="Mot de passe incorrect" />
  <br>
  <BanniereNotif type="Info" message="Une nouvelle mise à jour est disponible" />
</template>