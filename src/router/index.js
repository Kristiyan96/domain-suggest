import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    }
  ]
})
