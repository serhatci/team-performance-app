import Vue from 'vue'
import VueRouter from 'vue-router'
import Survey from '@/views/survey.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Survey',
    component: Survey,
  },
  {
    path: '/results',
    name: 'Results',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/results.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
