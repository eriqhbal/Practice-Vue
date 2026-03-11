import { createRouter, createWebHistory } from 'vue-router'

// Import View
import PracticeOne from '@/Views/PracticeOne.vue'

const routes = [
  {
    path: '/practice-one',
    component: PracticeOne,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
