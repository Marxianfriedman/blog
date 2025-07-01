import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/blog', component: () => import('../views/BlogView.vue') },
  { path: '/contacto', component: () => import('../views/ContactView.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;