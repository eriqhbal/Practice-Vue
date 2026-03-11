import { createRouter, createWebHistory } from 'vue-router'

// Import View
import PracticeOne from '@/Views/PracticeOne.vue'
import PracticeTwo from '@/Views/PracticeTwo.vue'

const routes = [
  {
    path: '/practice-one',
    component: PracticeOne,
  },
  {
    path: '/practice-two',
    component: PracticeTwo,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
