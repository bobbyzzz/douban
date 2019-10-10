<template>
  <div class="Tv">
    <ul v-for="(item, index) in tvData" :key="index">
      <li class="title">
        <span>{{item.title}}</span>
        <span class="more">更多</span>
      </li>
      <van-swipe :loop="false" :width="120" :show-indicators="false">
        <van-swipe-item v-for="(items, indexs) in item.info" :key="indexs">
          <div class="tvPic">
            <img v-lazy="items.pic" alt />
          </div>
          <p class="name">{{items.name}}</p>
          <p>
            <van-rate v-model="value" readonly />
            &nbsp;{{items.score}}
          </p>
        </van-swipe-item>
      </van-swipe>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      tvData: [
        {
          title: "近期值得期待的国产剧",
          info: [
            { pic: "/", name: "陈情令", score: 7.7 },
            { pic: "/", name: "长安十二时辰", score: 8.5 },
            { pic: "/", name: "小欢喜", score: 8.1 },
            { pic: "/", name: "宸汐缘", score: 7.4 },
            { pic: "/", name: "亲爱的，热爱的", score: 6.5 },
            { pic: "/", name: "加油，你是最棒的", score: 7.7 },
            { pic: "/", name: "全职高手", score: 6.9 },
            { pic: "/", name: "九州缥缈录", score: 6.7 }
          ]
        },
        {
          title: "近期值得期待的综艺节目",
          info: [
            { pic: "/", name: "乐队的夏天", score: 8.7 },
            { pic: "/", name: "中餐厅", score: 4.1 },
            { pic: "/", name: "这！就是街舞", score: 9.0 },
            { pic: "/", name: "脱口秀大会", score: 7.3 },
            { pic: "/", name: "姜食堂，第三季", score: 9.7 },
            { pic: "/", name: "做家务的男人", score: 7.4 },
            { pic: "/", name: "圆桌派 第四季", score: 8.7 },
            { pic: "/", name: "三时三餐", score: 9.4 }
          ]
        },
        {
          title: "近期值得期待的英美剧",
          info: [
            { pic: "/", name: "黑袍纠察队", score: 8.7 },
            { pic: "/", name: "奇怪物语", score: 8.8 },
            { pic: "/", name: "大小谎言", score: 9.0 },
            { pic: "/", name: "亢奋 第一季", score: 8.3 },
            { pic: "/", name: "黑镜 第五季", score: 6.6 },
            { pic: "/", name: "女子监狱", score: 9.6 },
            { pic: "/", name: "神盾特工局", score: 8.7 },
            { pic: "/", name: "好兆头", score: 8.7 }
          ]
        }
      ]
    };
  },
  methods: {
    // getTvData(){
    //     this.$axios.get('/douban/TVdata').then(res=>{
    //         console.log(res.data.modules)
    //         this.tvData = res.data.modules
    //     },err=>{
    //         console.log(err)
    //     })
    // }
    checkScore() {
      this.tvData.forEach(element => {
        let arr = element.info;
        for (let i = 0; i < arr.length; i++) {
          let score = arr[i].score;
          if (score >= 9) {
            this.value = 5;
          } else if (score >= 7 && score < 9) {
            this.value = 4;
          } else if (score >= 5 && score < 7) {
            this.value = 3;
          } else if (score >= 3 && score < 5) {
            this.value = 2;
          } else {
            this.value = 1;
          }
          //console.log(this.value)
        }
      });
    }
  },
  created() {
    this.checkScore();
  }
};
</script>
<style scoped>
.title {
  padding: 0.1rem 0.15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.14rem;
}
.more {
  color: #42bd56;
}
.van-swipe {
  margin-bottom: 0.2rem;
  overflow: hidden;
}
.van-swipe .van-swipe-item {
  width: 1.2rem !important;
}
.van-swipe .van-swipe-item .tvPic,
.van-swipe .van-swipe-item .tvPic img {
  width: 1.2rem;
}
.van-rate__icon {
  font-size: 0.13rem !important;
}
.van-swipe .van-swipe-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.van-swipe .van-swipe-item p:nth-of-type(2) {
  display: flex;
  justify-content: center;
  align-items: center;
}
.name {
  font-size: 0.14rem;
  padding: 0.1rem 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>