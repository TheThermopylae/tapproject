import { createRouter, createWebHistory } from 'vue-router'

import ExchangePage from './components/pages/ExchangePage.vue'
import FAQPage from './components/pages/FAQPage.vue'
import InstructionsPage from './components/pages/InstructionsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ExchangePage },
    { path: '/FAQPage', component: FAQPage },
    { path: '/InstructionsPage', component: InstructionsPage }
  ]
})

export default router