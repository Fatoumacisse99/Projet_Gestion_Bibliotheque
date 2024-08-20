
<template>
  <div id="app">
   
    <Livre />
    <Membre />
    <!-- <Pret /> -->
  </div>
</template>

<script>


import Livre from './components/livre/Livre.vue';
import Membre from './components/membre/Membre.vue';
// import Pret from './components/pret/Pret.vue';



export default {
  components: {  Livre, Membre  }
};
</script>

<style>

</style>
