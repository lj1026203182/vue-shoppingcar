<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="blue" :height="200">
      <!-- [0]是因为console.log(res.data.message)打印出来发现是rotationList下第一个元素中的对象才是砸门的图片信息 -->
      <van-swipe-item v-for="(item, index) in rotationList[0]" :key="item.url">
        <img :src="item.img">
      </van-swipe-item>
    </van-swipe>

    <!-- 六宫格 -->
    <div class="grid">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu1(1).png">
            <div class="mui-media-body">新闻资讯</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu2.png">
            <!-- <span class="mui-badge">5</span> -->
            <!-- 这个是右上角的小红标 -->
            <div class="mui-media-body">图片分享</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu3.png">
            <div class="mui-media-body">商品购买</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu4.png">
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu5.png">
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../images/menu6.png">
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
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
      rotationList: []  /* 保存轮播图的数组 */
    }
  },
  // 什么时候调用轮播图
  created () {
    this.getRotation()
  },
  methods: {
    // 轮播图获取图片的方式
    getRotation () {
      axios.get('/api/getlunbo').then(res => {
        // 当获取地址成功时,先打印res内的数据,观察出其中的.data.message是我们需要的图片信息
        // 所以将res.data.message加入到上方保存轮播图的数组中
        this.rotationList.push(res.data.message);
        // console.log(res.data.message)
        // Toast('加载ok')
      }).catch((err) => {
        // 当加载失败则轻提示 加载失败
        Toast('加载失败')
      })
    }
  },
  components: {

  }
}
</script>

<style scoped>
van-swipe-item img {
  width: 100%;
  height: 100%;
}
.grid ul {
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
ul img {
  width: 60px;
}
</style>
