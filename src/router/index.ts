import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/enterprise',
      name: 'enterprise',
      component: () => import('@/views/EnterpriseView.vue'),
    },
  ],
})

export default router
