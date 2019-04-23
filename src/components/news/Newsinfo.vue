<template>
  <div>
    <div class="newstitle" v-for="(item, index) in newsinfo" :key="item.id">
      <h3>标题</h3>
      <p>
        <span>发表时间:</span>
        <span>点击 次</span>
      </p>
      <hr>
      <div class="content" v-html="item.content"></div>
      <comment-box></comment-box>
    </div>

    <!-- 品论部分 -->
  </div>
</template>

<script>
// 导入axios
import axios from 'axios';
// 导入失败情况下的toast图
import { Toast } from 'vant';
// 导入评论子组件
import comment from '../subcomponents/comment';
export default {
  data () {
    return {
      id: this.$route.params.id,    //url中的id挂载到data方便调用
      newsinfo: []
    }
  },
  created () {
    // 记得加this
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo () {
      axios.get('http://localhost:8080/static/newsinfo.json').then(res => {
        this.newsinfo.push(res.data.result[0])
        // console.log(res);
        // console.log(this.newsinfo)
      })
    }
  },
  components: {
    'comment-box': comment
  }
}
</script>

<style scoped>
.newstitle {
  padding: 0 5px;
}
h3 {
  text-align: center;
  color: #ff4057;
  margin-top: 10px;
  font-size: 18px;
}
p {
  display: flex;
  justify-content: space-between;
}
.newstitle span {
  font-size: 13px;
  color: #257aa6;
}
</style>
