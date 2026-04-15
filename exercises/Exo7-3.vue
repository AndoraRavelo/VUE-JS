<script setup>
import { ref } from 'vue'

const form = ref({
  nom: '',
  email:'',
  motDePasse:'',
  age: null ,
  accepteCGU:false,
});

const erreurs = ref({
  nom: '',
  email:'',
  motDePasse:'',
  age:'',
  accepteCGU:'',
})

const inscriptionReussie = ref(false);

function inscrire(){

  erreurs.value={
    nom: '',
    email:'',
    motDePasse:'',
    age:'',
    accepteCGU:'',
  }

  let valide = true;

  if ( form.value.nom.trim() ===''){
    erreurs.value.nom= "Le nom est requis";
    valide=false;
  }

  if(form.value.email.trim() ===''){
    erreurs.value.email= 'L email est requis';
    valide=false;
  }

  if(form.value.motDePasse.trim() ===''){
    erreurs.value.motDePasse= 'Le mot de passe est requis';
    valide=false;
  }

  if (form.value.age < 13 || form.value.age === null) {
    erreurs.value.age = "Vous devez avoir au moins 13 ans";
    valide = false;
  }

   if (!form.value.accepteCGU) {
    erreurs.value.accepteCGU = "Vous devez accepter les CGU";
    valide = false;
  }

    if (valide) {
    inscriptionReussie.value = true;
    }
  }

</script>

<template>
  <div class="container">
<div v-if="!inscriptionReussie">
  <form @submit.prevent="inscrire">
    <label><input type="text" v-model="form.nom">Nom</label>
    <p v-if="erreurs.nom" style="color:red">{{ erreurs.nom }}</p>
    <label><input type="email" v-model="form.email">Email</label>
    <p v-if="erreurs.email" style="color:red">{{ erreurs.email }}</p>
    <label><input type="password" v-model="form.motDePasse">Password</label>
    <p v-if="erreurs.motDePasse" style="color:red">{{ erreurs.motDePasse }}</p>
    <label><input type="number"v-model="form.age">Age</label>
    <p v-if="erreurs.age" style="color:red">{{ erreurs.age }}</p>
    <br>
    <label><input type="checkbox" v-model="form.accepteCGU">Accepte CGU</label>
<br>
<button :disabled="!form.accepteCGU" type="submit">S'inscrire</button>
</form>
</div>

<div v-else>
  ✅ Inscription réussie !
  Bienvenue {{ form.nom }} !
</div>

</div>
</template>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
}

input, select, textarea {
  display: block;
  width: 100%;
  padding: 8px 12px;
  margin: 8px 0 16px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
</style>
