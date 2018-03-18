import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routerConfig'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes
})
