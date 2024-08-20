<!-- <template>
  <div>
    <h3>Modifier le Prêt</h3>
    <form @submit.prevent="onSubmit">
      <div>
        <label>ID:</label>
        <input v-model="pret.id" type="text" readonly />
      </div>
      <div>
        <label>Livre ID:</label>
        <input v-model="pret.livreId" type="text" />
      </div>
      <div>
        <label>Membre ID:</label>
        <input v-model="pret.membreId" type="text" />
      </div>
      <div>
        <label>Date de Début:</label>
        <input v-model="pret.dateDebut" type="date" />
      </div>
      <div>
        <label>Date de Fin:</label>
        <input v-model="pret.dateFin" type="date" />
      </div>
      <button type="submit">Enregistrer</button>
      <button type="button" @click="$emit('close')">Annuler</button>
    </form>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  pret: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close', 'save']);

const onSubmit = () => {
  emit('save', pret);
};
</script> -->
