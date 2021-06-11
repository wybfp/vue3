import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Login from '../views/Login.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    // path: '/dispatch',
    // path: '/IntegerManage,
    path: '/',
    name: 'IntegerManage',
    component: ()=>import('../views/company/IntegerManage.vue')
  },
  {
    // path: '/dispatch',
    path: '/InfoView',
    // path: '/',
    name: 'InfoView',
    component: ()=>import('../views/company/InfoView.vue')
  },
  {
    // path: '/dispatch',
    path: '/InfoRelease',
    // path: '/',
    name: 'InfoRelease',
    component: ()=>import('../views/company/InfoRelease.vue')
  },
  {
    // path: '/dispatch',
    path: '/ContractManage',
    // path: '/',
    name: 'ContractManage',
    component: ()=>import('../views/company/ContractManage.vue')
  },
  {
    // path: '/dispatch',
    // path: '/',
    path: '/DispatchCommand',
    name: 'DispatchCommand',
    component: ()=>import('../views/company/DispatchCommand.vue')
  },
  {
    // path: '/',
    path:'/ContractCheck',
    name:'ContractCheck',
    component:()=>import('../views/company/ContractCheck.vue')
  },
  {
    // path: '/',
    path:'/AddBroadcase',
    name:'AddBroadcase',
    component:()=>import('../views/company/AddBroadcase.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
