<!-- DetailLivre.vue -->
<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  livre: {
    type: Object,
    default: () => ({
      id: '',
      titre: '',
      auteur: '',
      annee: 2024,
    }),
  },
});

const id = ref(props.livre.id);
const titre = ref(props.livre.titre);
const auteur = ref(props.livre.auteur);
const annee = ref(props.livre.annee);

watch(() => props.livre, (newLivre) => {
  id.value = newLivre.id;
  titre.value = newLivre.titre;
  auteur.value = newLivre.auteur;
  annee.value = newLivre.annee;
}, { immediate: true });
</script>

<template>
  <div class="modal fade" id="detailLivreModal" tabindex="-1" aria-labelledby="detailLivreModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="detailLivreModalLabel">Détails du Livre</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p><strong>Id :</strong> {{ id }}</p>
          <p><strong>Titre :</strong> {{ titre }}</p>
          <p><strong>Auteur :</strong> {{ auteur }}</p>
          <p><strong>Année :</strong> {{ annee }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        </div>
      </div>
    </div>
  </div>
</template>
