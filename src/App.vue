<template>
  <div class="app-container">
    <!-- 顶部header区域 -->
    <van-nav-bar title="vue项目" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <!-- 中间路由router-view部分 -->

    <!-- 底部tabbar部分 -->
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
    </nav>
    <h1>123</h1>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      Toast('返回');
    }
  }
}
</script>

<style>
</style>
