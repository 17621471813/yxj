import Vue from 'vue'
import HomePage from '@/layout/HomePage'
import welFare from '@/layout/welFare'
import manual  from '@/layout/manual'
import product from '@/layout/product'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
   
    {
      path: '/',
      name: 'HomePage',
      component: HomePage 
    },{
      path: '/welFare',
      name: 'welFare',
      component: () => import('@/layout/welFare')   
    },
    {
      path: '/manual',
      name: 'manual',
      component: () => import('@/layout/manual')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/layout/product') 
    }
  ]
})
