<template>
  <div class="container">
    <h1 class="text-center border-bottom mb-4">Gestion des Membres</h1>
    <AjouteMembre @onAdd="addMembre" class="mb-4" />
    <ListeMembre :membres="membres" @onRemove="removeMembre" @onEdit="editMembre" @onViewDetails="viewMembreDetails" class="mt-4" />
    
    <ModifierMembre v-if="selectedMembre" 
                    :membre="selectedMembre" 
                    :index="selectedIndex" 
                    @onSave="updateMembre" />

    <DetailMembre v-if="selectedMembre" :membre="selectedMembre" />                           
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ListeMembre from './ListeMembre.vue';
import AjouteMembre from './AjouteMembre.vue';
import ModifierMembre from './ModifierMembre.vue';
import DetailMembre from './DetailMembre.vue';

const membres = ref([
  { id: '001', nom: 'John Doe', email: 'johndoe@example.com', dateInscription: '2023-01-01' },
]);

const selectedMembre = ref(null);
const selectedIndex = ref(null);

const addMembre = (id, nom, email, dateInscription) => {
  membres.value.push({ id, nom, email, dateInscription });
};

const updateMembre = (index, id, nom, email, dateInscription) => {
  membres.value[index] = { id, nom, email, dateInscription };
  selectedMembre.value = null; 
};

const removeMembre = (index) => {
  membres.value.splice(index, 1);
};

const editMembre = (index) => {
  selectedMembre.value = { ...membres.value[index] };
  selectedIndex.value = index;
};

const viewMembreDetails = (index) => {
  selectedMembre.value = membres.value[index];
  const detailModal = new bootstrap.Modal(document.getElementById('detailMembreModal'));
  detailModal.show();
};
</script>

<style scoped>
/* Ajoute tes styles ici */
</style>
