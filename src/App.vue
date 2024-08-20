
<template>
  <div id="app">
   
    <Livre />

    <Membre />
    <Pret />
    
  </div>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CRUD Manager</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Accueil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Gestion Livre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Gestion Membre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Gestion Pret</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Recherche</button>
          </form>
        </div>
      </div>
    </nav>
</template>

<script>


import Livre from './components/livre/Livre.vue';

import Membre from './components/membre/Membre.vue';

 import Pret from './components/pret/Pret.vue';



export default {
  components: {  Livre, Membre, Pret  }
};
</script>


<!-- <template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">CRUD Manager</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/" aria-current="page">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/livres">Gestion Livre</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/membres">Gestion Membre</router-link>
          </li>
          
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Recherche</button>
        </form>
      </div>
    </div>
  </nav>

  <router-view></router-view>  
</template> -->
