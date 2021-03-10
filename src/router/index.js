
import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()

import home from './../view/home/index.vue'

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: home
    }
  ]
})

export default router