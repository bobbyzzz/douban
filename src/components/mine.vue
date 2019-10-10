<template>
  <div class="mine">
    <!-- 头部 -->
    <div class="header">
      <van-nav-bar title="我的">
        <van-icon slot="right">
          <img src="../static/img/Mine/ic_settings.png" alt>
        </van-icon>
      </van-nav-bar>
    </div>
    <!-- 密码 / 银行卡 -->
    <div class="title">
      <div class="pwd">
        <img src="../static/img/Mine/6.png" alt>
        <p>密码管理</p>
      </div>
      <div class="card">
        <img src="../static/img/Mine/7.png" alt>
        <p>银行卡管理</p>
      </div>
    </div>
    <!-- 主体 -->
    <div class="main">
      <ul>
        <li v-for="(item, index) in arrList" :key="index">
          <div>
            <img :src="item.icon" alt>
            <span>{{item.text}}</span>
          </div>
          <img src="../static/img/Mine/15.png" alt>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arrList: [
        { icon: require("../static/img/Mine/8.png"), text: "风险承受能力评估" },
        { icon: require("../static/img/Mine/9.png"), text: "安全保障" },
        { icon: require("../static/img/Mine/10.png"), text: "我的关注" },
        { icon: require("../static/img/Mine/11.png"), text: "帮助中心" },
        { icon: require("../static/img/Mine/10.png"), text: "关于我们" },
        { icon: require("../static/img/Mine/12.png"), text: "检查更新" },
        { icon: require("../static/img/Mine/14.png"), text: "联系客服" }
      ]
    };
  }
};
</script>
<style scoped>
@import "../static/css/mine.css";
</style>
