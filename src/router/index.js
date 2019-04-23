import Vue from 'vue'
import Router from 'vue-router'

// 一级路由
import HomeLink from '../components/Home.vue'
import MemberLink from '../components/Member.vue'
import SearchLink from '../components/Search.vue'
import ShopcarLink from '../components/Shopcar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: HomeLink
    },
    {
      path: '/member',
      component: MemberLink
    },
    {
      path: '/search',
      component: SearchLink
    },
    {
      path: '/shopcar',
      component: ShopcarLink
    },
    {
      path: '*',
      redirect: '/home'
    }
  ],
  linkActiveClass: 'mui-active' /* mui中的高亮显示,将其变成vue中自带的类 */
})
