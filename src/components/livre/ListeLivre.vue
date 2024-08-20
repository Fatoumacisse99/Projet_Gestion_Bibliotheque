<!-- ListeLivre -->
<script setup>
import { computed } from 'vue';


const emit = defineEmits(['onRemove', 'onEdit']);

const props = defineProps({
  livres: {
    type: Array,
    required: true,
    default: () => [],
  },
});

// événement pour supprimer un livre
const removeLivre = (index) => {
  emit('onRemove', index);
};

// événement pour modifier un livre
const editLivre = (index) => {
  emit('onEdit', index);
};
</script>

<template>
  <div>
    <table class="table table-bordered table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Année</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(livre, index) in props.livres" :key="livre.id">
          <td>{{ index + 1 }}</td>
          <td>{{ livre.id }}</td>
          <td>{{ livre.titre }}</td>
          <td>{{ livre.auteur }}</td>
          <td>{{ livre.annee }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="removeLivre(index)">Supprimer</button>
            <button class="btn btn-secondary btn-sm" @click="editLivre(index)">Modifier</button>
             <button class="btn btn-info btn-sm" @click="viewDetails(index)">Détail</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>
