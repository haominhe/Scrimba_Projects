import Vue from 'vue'
import VueRouter from 'vue-router'
import AppHome from '@/components/AppHome'
import AppContact from '@/components/AppContact'
import AppProjects from '@/components/AppProjects'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AppHome',
    component: AppHome
  },
  {
    path: '/contact',
    name: 'AppContact',
    component: AppContact
  },
  {
    path: '/projects',
    name: 'AppProjects',
    component: AppProjects
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
