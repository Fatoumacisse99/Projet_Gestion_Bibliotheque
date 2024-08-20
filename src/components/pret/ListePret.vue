<!-- ListePret.vue -->
<script setup>
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits(['onRemove', 'onEdit', 'onView']);
const props = defineProps({
  prets: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const removePret = (index) => {
  emit('onRemove', index);
};

const editPret = (index) => {
  emit('onEdit', index);
};

const viewDetails = (index) => {
  emit('onView', index);
};
</script>

<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>ID</th>
        <th>Montant</th>
        <th>Date d'emprunt</th>
        <th>Date de retour</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(pret, index) in props.prets" :key="pret.id">
        <td>{{ index + 1 }}</td>
        <td>{{ pret.id }}</td>
        <td>{{ pret.montant }}</td>
        <td>{{ pret.dateEmprunt }}</td>
        <td>{{ pret.dateRetour }}</td>
        <td>
          <button class="btn btn-info btn-sm" @click="viewDetails(index)">Détails</button>
          <button class="btn btn-secondary btn-sm" @click="editPret(index)">Modifier</button>
          <button class="btn btn-danger btn-sm" @click="removePret(index)">Supprimer</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
