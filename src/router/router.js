import { createMemoryHistory, createRouter } from 'vue-router'

import AboutView from '../views/AboutView.vue'
import HomePage from '../views/HomePage.vue'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import CartPage from '../views/CartPage.vue'
import CheckoutPage from '../views/CheckoutPage.vue'
import MemberPage from '../views/MemberPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutView },
  { path: '/products', component: ProductList },
  { path: '/product/:id', component: ProductDetail },
  { path: '/cart', component: CartPage },
  { path: '/checkout', component: CheckoutPage },
  { path: '/member', component: MemberPage },

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router