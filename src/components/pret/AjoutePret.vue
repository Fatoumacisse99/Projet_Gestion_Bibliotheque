<!-- <template>
  <div>
    <h3>Ajouter un Prêt</h3>
    <form @submit.prevent="onSubmit">
      <div>
        <label>Livre ID:</label>
        <input v-model="livreId" type="text" />
      </div>
      <div>
        <label>Membre ID:</label>
        <input v-model="membreId" type="text" />
      </div>
      <div>
        <label>Date de Début:</label>
        <input v-model="dateDebut" type="date" />
      </div>
      <div>
        <label>Date de Fin:</label>
        <input v-model="dateFin" type="date" />
      </div>
      <button type="submit">Enregistrer</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const livreId = ref('');
const membreId = ref('');
const dateDebut = ref('');
const dateFin = ref('');

const onSubmit = () => {
  const newPret = {
    livreId: livreId.value,
    membreId: membreId.value,
    dateDebut: dateDebut.value,
    dateFin: dateFin.value
  };
  $emit('save', newPret);
  // Réinitialiser les champs
  livreId.value = '';
  membreId.value = '';
  dateDebut.value = '';
  dateFin.value = '';
};
</script> -->
