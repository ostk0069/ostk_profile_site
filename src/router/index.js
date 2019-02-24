import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'
import Slide from '@/components/Slide'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/slide',
      name: 'Slide',
      component: Slide
    }
  ]
})
