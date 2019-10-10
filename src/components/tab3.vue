<template>
  <div class="book">
    <ul v-for="(item, index) in bookData" :key="index">
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
      bookData: [
        {
          title: "最受关注图书 | 虚构类",
          info: [
            { pic: "/", name: "焚舟纪", score: 8.8 },
            { pic: "/", name: "OPUS作品", score: 9.1 },
            { pic: "/", name: "聊天记录", score: 7.2 },
            { pic: "/", name: "王考", score: 9.1 },
            { pic: "/", name: "沙漏做招牌", score: 8.9 },
            { pic: "/", name: "喜鹊谋杀案", score: 8.0 },
            { pic: "/", name: "渺小一生", score: 8.5 },
            { pic: "/", name: "愤怒的葡萄", score: 9.1 }
          ]
        },
        {
          title: "最受关注图书 | 非虚构类",
          info: [
            { pic: "/", name: "时间的秩序", score: 9.3 },
            { pic: "/", name: "死屋", score: 9.2 },
            { pic: "/", name: "汴京之围", score: 8.5 },
            { pic: "/", name: "秘境", score: 8.3 },
            { pic: "/", name: "赵桥村", score: 9.0 },
            { pic: "/", name: "中国食辣史", score: 7.9 },
            { pic: "/", name: "加西亚-马尔...", score: 9.4 },
            { pic: "/", name: "小说的八百万种写法", score: 7.9 }
          ]
        },
        {
          title: "豆瓣书店",
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
    checkScore() {
      this.bookData.forEach(element => {
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