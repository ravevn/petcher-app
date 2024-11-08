import { createRouter, createWebHistory } from 'vue-router'

// Страницы (pages) будут импортироваться из папки pages
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../pages/HomePage.vue')  // Путь к странице
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('../pages/AboutPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
