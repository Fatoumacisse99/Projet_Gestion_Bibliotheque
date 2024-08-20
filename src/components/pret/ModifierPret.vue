<!-- ModifierPret.vue -->
<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  pret: {
    type: Object,
    default: () => ({
      id: '',
      montant: '',
      dateEmprunt: '',
      dateRetour: '',
    }),
  },
  index: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['onSave']);

const id = ref(props.pret.id);
const montant = ref(props.pret.montant);
const dateEmprunt = ref(props.pret.dateEmprunt);
const dateRetour = ref(props.pret.dateRetour);

watch(() => props.pret, (newPret) => {
  id.value = newPret.id;
  montant.value = newPret.montant;
  dateEmprunt.value = newPret.dateEmprunt;
  dateRetour.value = newPret.dateRetour;
}, { immediate: true });

const onSubmit = () => {
  emit('onSave', props.index, id.value, montant.value, dateEmprunt.value, dateRetour.value);
};
</script>

<template>
  <div class="modal fade show" tabindex="-1" style="display: block;" aria-labelledby="editPretModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editPretModalLabel">Modifier le Prêt</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="onSubmit">
            <div class="mb-3">
              <label for="id" class="form-label">ID</label>
              <input type="text" class="form-control" id="id" v-model="id" />
            </div>
            <div class="mb-3">
              <label for="montant" class="form-label">Montant</label>
              <input type="number" class="form-control" id="montant" v-model="montant" />
            </div>
            <div class="mb-3">
              <label for="dateEmprunt" class="form-label">Date d'emprunt</label>
              <input type="date" class="form-control" id="dateEmprunt" v-model="dateEmprunt" />
            </div>
            <div class="mb-3">
              <label for="dateRetour" class="form-label">Date de retour</label>
              <input type="date" class="form-control" id="dateRetour" v-model="dateRetour" />
            </div>
            <button type="submit" class="btn btn-primary">Enregistrer</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
