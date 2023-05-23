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
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'index',
    redirect: '/index',//在入口文件给个重定向来默认显示哪个模块
    meta:{title:'首页'},
    component: () => import('../views/home/Home.vue'),
    children:[
      {
          path: '/index',
          name: 'index',
          meta:{title:'首页'},
          component: () => import('../views/home/index/index.vue')
      },
      {
          path: '/stats',
          name: 'stats',
          meta:{title:'数据管理'},
          component: () => import('../views/home/stats/stats.vue')
      },
      {
          path: '/wms',
          name: 'wms',
          redirect: '/wms/list',
          meta:{title:'信息管理'},
          component: () => import('../views/home/wms/index.vue'),
          children:[
            {
              path: '/wms/list',
              name: 'wmsList',
              meta:{title:'列表展示1'},
              component: () => import('../views/home/wms/list.vue')

            },
            {
              path: '/wms/list2',
              name: 'wmsList2',
              meta:{title:'列表展示2'},
              component: () => import('../views/home/wms/list2.vue')

            }
          ]
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
