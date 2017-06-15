import Vue from 'vue'
import Router from 'vue-router'
import list from '@/views/list'
import listDefault from '@/views/list-default'
import listTheme from '@/views/list-theme'
import detail from '@/views/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: list,
      children: [
        {
          path: '/',
          name: 'default',
          component: listDefault
        }, 
        {
          path: 'theme/:id',
          name: 'theme',
          component: listTheme
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: detail
        }
      ]
    }
  ]
})
