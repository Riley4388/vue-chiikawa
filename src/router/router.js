import { createMemoryHistory, createRouter } from 'vue-router'

import AboutView from '../views/AboutView.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutView },

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router