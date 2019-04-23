<template>
  <div class="app-container">
    <!-- 顶部header区域 -->
    <van-nav-bar title="vue项目" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <!-- 中间路由router-view部分 -->
    <router-view></router-view>
    <!-- 底部tabbar部分 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>

      <router-link to="/member" class="mui-tab-item">
        <span class="mui-icon mui-icon-contact">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">会员</span>
      </router-link>

      <router-link to="/shopcar" class="mui-tab-item">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>

      <router-link to="/search" class="mui-tab-item">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
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
