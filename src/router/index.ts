import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from "@/views/AboutPage.vue";
import GraphPage from "@/views/GraphPage.vue";

const routes = [
  { path: '/', name: 'home', component: AboutPage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/graph', name: 'graph', component: GraphPage },
  // { path: '/graph/1?tab=2', name: 'graph', component: GraphPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
