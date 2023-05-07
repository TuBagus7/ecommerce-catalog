import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'product',
    component: () => import('../components/ProductDisplay.vue')
  },
  {
    path: '/men',
    name: 'men',
    component: () => import('../components/men/men.vue')
  },
  {
    path: '/women',
    name: 'women',
    component : () => import('../components/women/women.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
