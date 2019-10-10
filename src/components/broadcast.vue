<template>
  <div class="broadCast">
    <!-- 头部 -->
    <div class="header">
      <van-nav-bar title="广播">
        <van-icon slot="right">
          <img src="../static/img/Broadcast/ic_status_search_user.png" alt>
          <img src="../static/img/Broadcast/ic_chat_green.png" alt>
        </van-icon>
      </van-nav-bar>
    </div>
    <!-- 登录发广播 -->
    <div class="login">
      <img src="../static/img/Broadcast/user_normal.jpg" alt>
      <span>登录发广播</span>
    </div>
    <!-- 主体 -->
    <div class="main">
      <ul class="tab1">
        <li>
          <span>豆瓣</span>
          <span>转播</span>
          <img src alt>
        </li>
        <ul>
          <li>
            <div>
              <!-- <img :src="item.status.reshared_status" alt> -->
            </div>
            <div>
              <p>
                <!-- <span>{{item.status.reshared_status.author.name}}</span> -->
                <!-- <span>{{item.status.reshared_status.activity}}</span> -->
              </p>
              <!-- <p>{{item.status.reshared_status.create_time}}</p> -->
            </div>
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      broadCastData: ""
    };
  },
  methods: {
    // getbroadCastData() {
    //   this.$axios.get("/douban/status").then(
    //     res => {
    //       //console.log(res.data.items);
    //       this.broadCastData = res.data.items;
    //     //  console.log(this.broadCastData);
    //     },
    //     err => {
    //       console.log(err);
    //     }
    //   );
    // }
  },
  created() {
    //this.getbroadCastData();
  }
};
</script>
<style scoped>
@import "../static/css/broadcast.css";
</style>
