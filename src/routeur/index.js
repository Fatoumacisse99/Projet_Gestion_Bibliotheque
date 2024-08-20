import { createRouter, createWebHistory } from 'vue-router';
import Livre from '../components/livre/Livre.vue';
import Membre from '../components/membre/Membre.vue';

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Livre,  // Par défaut, on affiche la gestion des livres
  },
  {
    path: '/livre',
    name: 'GestionLivre',
    component: Livre,
  },
  {
    path: '/membres',
    name: 'GestionMembre',
    component: Membre,
  },
  // Ajoute d'autres routes ici si nécessaire
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
