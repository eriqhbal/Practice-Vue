import { createRouter, createWebHistory } from 'vue-router'

// Import View
import PracticeOne from '@/Views/PracticeOne.vue'
import PracticeTwo from '@/Views/PracticeTwo.vue'
import PracticeThree from '@/Views/PracticeThree.vue'
import OutputtingList from '@/Views/OutputtingList.vue'
import TheVueClie from '@/Views/TheVueClie.vue'
import BuildReactionGame from '@/Views/BuildReactionGame.vue'
import FormInput from '@/Views/FormInput.vue'
import NotFound from '@/Views/NotFound.vue'
import FetchingData from '@/Views/FetchingData.vue'

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
  {
    path: '/outputting-list',
    component: OutputtingList,
  },
  {
    path: '/vue-cli',
    component: TheVueClie,
  },
  {
    path: '/build-reaction',
    component: BuildReactionGame,
  },
  {
    path: '/form-input',
    component: FormInput,
  },
  {
    path: '/fetching-data',
    component: FetchingData,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
