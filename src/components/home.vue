<template>
  <div class="home">
    <!-- 头部 -->
    <div class="header">
      <form action="#">
        <img class="search" src="../static/img/Home/ic_group_search_small.png" alt />
        <input type="search" placeholder="影视 图书 小组等" />
        <img class="gray" src="../static/img/Home/ic_scan_gray.png" alt />
      </form>
      <div class="chat">
        <img src="../static/img/Home/ic_chat_white.png" alt />
      </div>
    </div>
    <!-- banner -->
    <div class="banner">
      <van-swipe :autoplay="2000" indicator-color="white">
        <van-swipe-item>
          <img src="../static/img/Home/01.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../static/img/Home/02.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../static/img/Home/03.jpg" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 主体 -->
    <div class="main">
      <ul>
        <li v-for="(item, index) in homeData" :key="index">
          <div class="main-l">
            <p class="title">{{item.title}}</p>
            <p class="content">{{item.target.desc}}</p>
            <p class="author">作者：{{item.target.author.name}}</p>
          </div>
          <div class="main-r">
            <img v-lazy="item.target.cover_url" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      homeData:''
    }
  },
  methods: {
    getdata(){
      this.$axios.get('/douban/homeData').then(res=>{
        this.homeData = res.data.recommend_feeds
        //console.log(this.homeData)
      },err=>{
        console.log(err)
      })
    }
  },
  created() {
    this.getdata()
  },
};
</script>
<style scoped>
@import "../static/css/home.css";
</style>
