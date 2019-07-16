import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About'
import Home1 from '../views/Home1'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/about',//path为路径
      component: About
    },
    {
      path: '/home1',//path为路径
      component: Home1
    }
  ]
})