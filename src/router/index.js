import Vue from 'vue'
import Router from 'vue-router'
import sHelloWorld from '../pages/pintang'
import secPage from '../pages/secPage'
import zlists from  '../pages/zlists'
import yindex from  '../pages/Yindex'
import digtalPage from  '../pages/digtalPage'
import couDan from '../pages/couDan'
import  carts from  '../pages/shopCarts'
import zde from '../pages/zdetails'
import zt from '../pages/ztabs'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/zl',
      name: 'zlists',
      component: zlists
    },
    {
      path: '/ze',
      name: 'zde',
      component: zde
    },
    {
      path: '/zts',
      name: 'zt',
      component: zt
    },

    {
      path: '/',
      name: 'yindex',
      component: yindex
    },
    {
      path: '/onepintang',
      name: 'sHelloWorld',
      component: sHelloWorld
    },
    {
      path: '/sec',
      name: 'secPage',
      component: secPage
    },
    {
      path: '/digtalPage',
      name: 'digtalPage',
      component: digtalPage
    },
    {
      path: '/carts',
      name: 'carts',
      component: carts
    },
    {
      path: '/couDan',
      name: 'couDan',
      component: couDan
    }
  ]

})
