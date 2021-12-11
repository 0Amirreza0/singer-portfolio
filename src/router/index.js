import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/portfolio',
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('@/views/portfolio.view.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
