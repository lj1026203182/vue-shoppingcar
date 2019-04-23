// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { NavBar, Swipe, SwipeItem } from 'vant'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
// 导入axios
import axios from 'axios'
// 使用axios
axios.defaults.baseURL = 'http://www.liulongbin.top:3005'
Vue.prototype.http = axios
Vue.use(NavBar)
  .use(Swipe)
  .use(SwipeItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
