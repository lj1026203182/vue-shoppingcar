<template>
  <div>
    <h2>发表评论</h2>
    <hr>
    <form action>
      <textarea placeholder="请输入要BB的内容(不能超过100个字)" id="comment"></textarea>
      <van-button type="info" size="large">发表评论</van-button>
      <!-- 品论楼层 -->
      <div class="cmt-list">
        <!-- <div class="cmt-item" v-for="(item, index) in comments" :key="item.id">
          <div class="cmt-title">第一楼 用户 匿名用户 发表时间</div>
          <div class="cmt-body">12121</div>
        </div>-->
        <ul>
          <li class="cmt-item" v-for="(item, index) in comments[0]" :key="item.id">
            <p class="cmt-title">第{{index+1}}楼 用户:{{item.name}} 发表时间:{{item.time |dataFormat}}</p>
            <p class="cmt-body">{{item.content}}</p>
          </li>
        </ul>
      </div>
      <van-button plain hairline type="danger" size="large">加载更多</van-button>
    </form>
  </div>
</template>

<script>
// import { Button } from 'vant';
import axios from 'axios';
// 导入失败情况下的toast图
import { Toast } from 'vant';
export default {
  data () {
    return {
      comments: []
    }
  },
  created () {
    this.getComment()
  },
  methods: {
    getComment () {
      axios.get('../../../static/comments.json').then(res => {
        // console.log(res.data.result[0].comments)
        this.comments.push(res.data.result[0].comments)
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
h2 {
  font-size: 18px;
}
textarea {
  font-size: 14px;
  height: 100px;
  margin: 0;
}
.cmt-item {
  margin: 5px 0;
  color: #000;
}
.cmt-title {
  background-color: #ccc;
  font-size: 14px;
  line-height: 35px;
}
.cmt-body {
  font-size: 13px;
  padding: 0 20px;
  line-height: 35px;
}
</style>
