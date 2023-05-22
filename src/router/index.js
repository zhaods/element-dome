import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    redirect: '/Login'
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'index',
    component: () => import('../views/home/Home.vue'),
    children:[
      {
          path: '/index',
          name: 'index',
          component: () => import('../views/home/index/index.vue')
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
