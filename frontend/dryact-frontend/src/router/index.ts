import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import FhyPage from '../views/FhyPage.vue';
import TallyPage from '../views/TallyPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/fhy',
      name: 'fhy',
      component: FhyPage,
    },
    {
      path: '/tally',
      name: 'tally',
      component: TallyPage,
    },
  ],
});

export default router;
