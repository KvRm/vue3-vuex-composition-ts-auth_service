import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { getUserRoute } from './getUserRoute'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      login: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/AuthView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(getUserRoute)

export default router
