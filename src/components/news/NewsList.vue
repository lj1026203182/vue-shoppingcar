<template>
  <div>
    <ul class="mui-table-view">
      <!-- vfor循环在谁身上,谁就重复出现 -->
      <li class="mui-table-view-cell mui-media" v-for="(item, index) in newsList[0]" :key="item.id">
        <!-- 更改了属性 , 使用v-bind:  再将两者以字符串的形式拼接 ,所以将路径改成字符串 id还是个变量 -->
        <router-link :to="'/newsList/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.imgUrl">
          <div class="mui-media-body">
            {{item.title}}
            <p class="mui-ellipsis">
              <span>发表时间:{{item.postTime | dataFormat}}</span>
              <span>点击次数:{{item.clickTimes}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// 导入axios
import axios from 'axios';
// 导入失败情况下的toast图
import { Toast } from 'vant';
export default {
  data () {
    return {
      newsList: []    //保存新闻列表的数组
    }
  },
  created () {  //在一进入这个页面就执行获取新闻列表的操作
    this.getNewsList()
  },
  methods: {
    getNewsList () {  //获取新闻列表axios   .data.message
      axios.get('http://localhost:8080/static/news.json').then(res => {
        this.newsList.push(res.data.result);
        // console.log(res);
        // console.log(this.newsList)
      }).catch(err => {
        Toast('加载失败')
      })
    }
  },
  components: {

  }
}
</script>

<style scoped>
.mui-ellipsis {
  font-size: 12px;
  color: #5ca0d3;
  display: flex;
  justify-content: space-between;
}
</style>
