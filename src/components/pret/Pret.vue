<!-- <template>
    <div>
      <AjoutePret @save="handleSave" />
      <ListePret @edit="handleEdit" @delete="handleDelete" @view="handleView" />
      <DetailPret v-if="showDetail" :pret="selectedPret" @close="handleCloseDetail" />
      <ModifierPret v-if="showEdit" :pret="selectedPret" @close="handleCloseEdit" @save="handleUpdate" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import AjoutePret from './AjoutePret.vue';
  import ListePret from './ListePret.vue';
  import DetailPret from './DetailPret.vue';
  import ModifierPret from './ModifierPret.vue';
  
  const selectedPret = ref(null);
  const showDetail = ref(false);
  const showEdit = ref(false);
  
  const handleSave = (pret) => {
    // Ajouter un nouveau prêt à la liste
  };
  
  const handleEdit = (pret) => {
    selectedPret.value = pret;
    showEdit.value = true;
  };
  
  const handleDelete = (id) => {
    // Supprimer le prêt avec l'ID donné
  };
  
  const handleView = (pret) => {
    selectedPret.value = pret;
    showDetail.value = true;
  };
  
  const handleCloseDetail = () => {
    showDetail.value = false;
  };
  
  const handleCloseEdit = () => {
    showEdit.value = false;
  };
  
  const handleUpdate = (updatedPret) => {
    // Mettre à jour le prêt dans la liste
    showEdit.value = false;
  };
  </script>
   -->