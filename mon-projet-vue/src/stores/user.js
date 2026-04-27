// src/stores/user.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // 1. Notre "State" (Les données)
  const nom = ref('Invité')
  const estConnecte = ref(false)

  // 2. Nos "Actions" (Les fonctions pour modifier les données)
  function seConnecter(nouveauNom) {
    nom.value = nouveauNom
    estConnecte.value = true
  }

  function seDeconnecter() {
    nom.value = 'Invité'
    estConnecte.value = false
  }

  // 3. Nos "Getters" (Comme des computed)
  const messageBienvenue = computed(() => {
    return estConnecte.value ? `Bonjour ${nom.value} !` : "Veuillez vous connecter."
  })

  return { nom, estConnecte, seConnecter, seDeconnecter, messageBienvenue }
})