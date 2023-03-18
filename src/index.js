import { createRouter, createWebHistory } from 'vue-router'
import Counter from './components/Counter.vue'
import Errorpage from './components/Errorpage.vue'
import Home from './components/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter,
    },
    {
      path: '/:catchAll(.*)*',
      name: 'Errorpage',
      component: Errorpage,
    },
  ],
})
export default router
