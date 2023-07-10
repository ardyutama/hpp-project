import { createRouter, createWebHistory } from 'vue-router'
import CalculateView from '../views/CalculateProductView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/calculate',
      name: 'calculate',
      component: CalculateView
    }
  ]
})

export default router
