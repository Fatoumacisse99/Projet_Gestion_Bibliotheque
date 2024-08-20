<!-- AjouterPret.vue -->
<script setup>
import { ref } from 'vue';
const emit = defineEmits(['onAdd']);

const id = ref('');
const montant = ref('');
const dateEmprunt = ref('');
const dateRetour = ref('');

const onSubmit = () => {
  emit('onAdd', id.value, montant.value, dateEmprunt.value, dateRetour.value);

  id.value = '';
  montant.value = '';
  dateEmprunt.value = '';
  dateRetour.value = '';
};
</script>

<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="id" class="form-label">ID</label>
        <input type="text" class="form-control" id="id" v-model="id" required />
      </div>
      <div class="mb-3">
        <label for="montant" class="form-label">Montant</label>
        <input type="number" class="form-control" id="montant" v-model="montant" required />
      </div>
      <div class="mb-3">
        <label for="dateEmprunt" class="form-label">Date d'emprunt</label>
        <input type="date" class="form-control" id="dateEmprunt" v-model="dateEmprunt" required />
      </div>
      <div class="mb-3">
        <label for="dateRetour" class="form-label">Date de retour</label>
        <input type="date" class="form-control" id="dateRetour" v-model="dateRetour" required />
      </div>
      <button type="submit" class="btn btn-primary">Ajouter Prêt</button>
    </form>
  </div>
</template>
