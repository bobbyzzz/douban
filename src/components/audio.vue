<template>
  <div class="audio">
    <!-- 头部 -->
    <div class="header">
      <van-nav-bar title="书影音">
        <van-icon slot="right">
          <img src="../static/img/Audio/ic_actionbar_search_icon.png" alt />
          <img src="../static/img/Audio/ic_chat_green.png" alt />
        </van-icon>
      </van-nav-bar>
    </div>
    <!-- 导航 -->
    <div class="nav">
      <p
        v-for="(item, index) in navList"
        :key="index"
        :class="{active:index==indexs}"
        @click="navClick(index)"
      >{{item.navText}}</p>
    </div>
    <!-- 主体 -->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        { navText: "电影" },
        { navText: "电视" },
        { navText: "图书" },
        { navText: "同城" },
        { navText: "音乐" }
      ],
      indexs: ""
    };
  },
  methods: {
    navClick(index) {
      this.indexs = index;
      this.$router.push("/audio/tab" + (index + 1));
    }
  }
};
</script>
<style scoped>
@import "../static/css/audio.css";
</style>
