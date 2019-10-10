<template>
  <div class="group">
    <!-- 头部 -->
    <div class="header">
      <van-nav-bar title="小组">
        <van-icon slot="right">
          <img src="../static/img/Group/ic_actionbar_search_icon.png" alt />
          <img src="../static/img//Group/ic_chat_green.png" alt />
        </van-icon>
      </van-nav-bar>
    </div>
    <!-- 主体 -->
    <div class="main">
      <ul class="tab1" v-for="(item, index) in groupData" :key="index">
        <li class="title">{{item.title}}</li>
        <ul class="tab2">
          <li v-for="(items, indexs) in item.group_list" :key="indexs">
            <div class="tab2-top">
              <div class="icon">
                <img :src="items.img_url" alt />
              </div>
              <div class="info">
                <span>{{items.group_name}}</span>
                <span>{{items.group_member}}</span>
              </div>
            </div>
            <p class="tab2-bot">{{items.topic_title}}</p>
          </li>
        </ul>
        <li class="more">更多相关小组</li>
      </ul>
    </div>
    <!-- logo -->
    <common>
      <div slot="logo">
        <img src="../static/img/douban-app-logo.png" alt />
        豆瓣
      </div>
    </common>
  </div>
</template>
<script>
import common from "../components/common";
export default {
  components: {
    common
  },
  data() {
    return {
      groupData: ""
    };
  },
  methods: {
    getGourpData() {
      this.$axios.get("/douban/groupData").then(
        res => {
          // console.log(res.data.group)
          this.groupData = res.data.group;
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  created() {
    this.getGourpData();
  }
};
</script>
<style scoped>
@import "../static/css/group.css";
</style>
