import Vue from 'vue'
import Router from 'vue-router'

// 一级路由
import HomeLink from '../components/Home.vue'
import MemberLink from '../components/Member.vue'
import SearchLink from '../components/Search.vue'
import ShopcarLink from '../components/Shopcar.vue'

// 主页内容里的路由
import NewsListLink from '../components/news/NewsList.vue'
import PhotoListLink from '../components/photos/Photolist.vue'

// 新闻详情里的路由
import NewsInfo from '../components/news/Newsinfo.vue'

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
    },
    // 主页中的路由
    {
      path: '/newslist',
      component: NewsListLink
    },
    {
      path: '/newslist/newsinfo/:id', // 由于id是变化的,加冒号表示参数
      component: NewsInfo
    },
    // 图片分享
    {
      path: '/home/photosList',
      component: PhotoListLink
    }
  ],
  linkActiveClass: 'mui-active' /* mui中的高亮显示,将其变成vue中自带的类 */
})
