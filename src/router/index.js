import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home/index.vue'),
      children: [
        {
          path: 'display',
          name: 'display',
          component: () => import('@/views/Display/index.vue'),
        },

      ],
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact/index.vue'),
    },
    {
      path: '/',
      redirect: '/home',
    },

  ],
})

export default router
