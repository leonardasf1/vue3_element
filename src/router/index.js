import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from "@/pages/AboutPage";
import GraphPage from "@/pages/GraphPage";

const routes = [
  { path: '/', name: 'home', component: AboutPage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/graph', name: 'graph', component: GraphPage },
  // { path: '/graph/1?tab=2', name: 'graph', component: GraphPage }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
