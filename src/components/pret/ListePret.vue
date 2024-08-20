<!-- <template>
  <div>
    <h3>Liste des Prêts</h3>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Livre ID</th>
          <th>Membre ID</th>
          <th>Date de Début</th>
          <th>Date de Fin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pret in prets" :key="pret.id">
          <td>{{ pret.id }}</td>
          <td>{{ pret.livreId }}</td>
          <td>{{ pret.membreId }}</td>
          <td>{{ pret.dateDebut }}</td>
          <td>{{ pret.dateFin }}</td>
          <td>
            <button @click="$emit('view', pret)">Voir</button>
            <button @click="$emit('edit', pret)">Modifier</button>
            <button @click="$emit('delete', pret.id)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  prets: {
    type: Array,
    required: true
  }
});
</script> -->
