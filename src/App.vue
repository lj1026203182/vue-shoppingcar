<template>
  <div class="app-container">
    <!-- 顶部header区域 -->
    <van-nav-bar title="vue项目" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <!-- 中间路由router-view部分 -->
    <!-- 添加过度动画 -->
    <!-- <transition> -->
    <router-view></router-view>
    <!-- </transition> -->
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
.app-container {
  /* 解决底部tabbar移动问题 */
  overflow: hidden;
  padding-bottom: 55px;
}
/* .v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s linear;
} */
</style>
