<!-- App.vue (Parent) -->
<script setup>
import {ref} from 'vue'
import CarteProfil from './components/CarteProfil.vue'
import CarteEmploye from './components/CarteEmploye.vue'

// Liste d'employés
const utilisateurs = ref([
  { id: 1, prenom: 'Amelie', poste: 'CEO' },
  { id: 2, prenom: 'Paul', poste: 'CTO' }
])
</script>

<template>
  <div>
    <!-- On passe les valeurs en attributs ! -->
    <CarteProfil nom="Alice" metier="Développeuse" />
    <CarteProfil nom="Bob" metier="Designer" />
    <CarteProfil nom="Charlie" metier="Chef de Projet" />
  </div>
  <br>
    <div>
    <!-- On fait une boucle v-for, et on passe les attributs de la variable -->
    <!-- N'oublie pas le ":" car on passe une variable, pas un texte statique !! -->
    <CarteEmploye 
      v-for="user in utilisateurs" 
      :key="user.id" 
      :prenom="user.prenom" 
      :poste="user.poste" 
    />
  </div>
</template>