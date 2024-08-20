<!-- DetailPret.vue -->
<script setup>
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
});
</script>

<template>
  <div class="modal fade show" tabindex="-1" style="display: block;" aria-labelledby="detailPretModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="detailPretModalLabel">Détails du Prêt</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p><strong>ID:</strong> {{ props.pret.id }}</p>
          <p><strong>Montant:</strong> {{ props.pret.montant }}</p>
          <p><strong>Date d'emprunt:</strong> {{ props.pret.dateEmprunt }}</p>
          <p><strong>Date de retour:</strong> {{ props.pret.dateRetour }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        </div>
      </div>
    </div>
  </div>
</template>
