import { createRouter, createWebHistory } from 'vue-router'

// Import View
import PracticeOne from '@/Views/PracticeOne.vue'
import PracticeTwo from '@/Views/PracticeTwo.vue'
import PracticeThree from '@/Views/PracticeThree.vue'

const routes = [
  {
    path: '/practice-one',
    component: PracticeOne,
  },
  {
    path: '/practice-two',
    component: PracticeTwo,
  },
  {
    path: '/event-handler',
    component: PracticeThree,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
