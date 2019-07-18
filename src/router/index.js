import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home/Home'
//import List from '../pages/list/List'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',      //path为路径
      component: Home
    },
    // {
    //   path: '/list',
    //   name: 'List',            //path为路径
    //   component: List
    // }
  ]
})