<template>
  <div class="music">
    <ul v-for="(item, index) in bookData" :key="index">
      <li class="title">
        <span>{{item.title}}</span>
        <span class="more">更多</span>
      </li>
      <div class="topnav">
        <ul>
          <li v-for="(items, indexs) in item.info" :key="indexs">
            <div class="tvPic">
              <img v-lazy="items.pic" alt />
            </div>
            <p class="name">{{items.name}}</p>
            <p>
              <van-rate v-model="items.value" readonly />
              &nbsp;{{items.score}}
            </p>
          </li>
        </ul>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bookData: [
        {
          title: "话语新碟榜",
          info: [
            { pic: "/", name: "焚舟纪", score: 8.8,value: ""},
            { pic: "/", name: "OPUS作品", score: 9.1,value: "" },
            { pic: "/", name: "聊天记录", score: 7.2,value: "" },
            { pic: "/", name: "王考", score: 9.1,value: "" },
            { pic: "/", name: "沙漏做招牌", score: 8.9,value: "" },
            { pic: "/", name: "喜鹊谋杀案", score: 8.0,value: "" },
            { pic: "/", name: "渺小一生", score: 8.5,value: "" },
            { pic: "/", name: "愤怒的葡萄", score: 9.1,value: "" }
          ]
        },
        {
          title: "欧美新碟榜",
          info: [
            { pic: "/", name: "时间的秩序", score: 9.3,value: "" },
            { pic: "/", name: "死屋", score: 9.2,value: "" },
            { pic: "/", name: "汴京之围", score: 8.5,value: "" },
            { pic: "/", name: "秘境", score: 8.3,value: "" },
            { pic: "/", name: "赵桥村", score: 9.0 ,value: ""},
            { pic: "/", name: "中国食辣史", score: 7.9,value: "" },
            { pic: "/", name: "加西亚-马尔...", score: 9.4,value: "" },
            { pic: "/", name: "小说的八百万种写法", score: 7.9 ,value: ""}
          ]
        },
        {
          title: "日韩新碟榜",
          info: [
            { pic: "/", name: "黑袍纠察队", score: 8.7,value: ""},
            { pic: "/", name: "奇怪物语", score: 8.8 ,value: ""},
            { pic: "/", name: "大小谎言", score: 9.0,value: ""},
            { pic: "/", name: "亢奋 第一季", score: 8.3 ,value: ""},
            { pic: "/", name: "黑镜 第五季", score: 6.6,value: "" },
            { pic: "/", name: "女子监狱", score: 9.6,value: "" },
            { pic: "/", name: "神盾特工局", score: 8.7 ,value: ""},
            { pic: "/", name: "好兆头", score: 8.7,value: "" }
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
            arr[i].value = 5;
          } else if (score >= 7 && score < 9) {
            arr[i].value = 4;
          } else if (score >= 5 && score < 7) {
            arr[i].value = 3;
          } else if (score >= 3 && score < 5) {
            arr[i].value = 2;
          } else {
            arr[i].value = 1;
          }
          
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
.topnav {
  width: 3.75rem;
  height: 1.7rem;
  overflow-x: auto;
  margin-bottom: 0.2rem;
}
.topnav::-webkit-scrollbar{
  display:none;
}
.topnav ul {
  width: 9.6rem;
  display: flex;
}
.topnav ul li {
  height: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.topnav ul li,
.topnav ul li .tvPic,
.topnav ul li .tvPic img {
  width: 1.2rem;
}
.topnav ul li p:nth-of-type(2) {
  display: flex;
  align-items: center;
}
.van-rate__icon {
  font-size: 0.13rem !important;
}

.name {
  font-size: 0.14rem;
  padding: 0.1rem 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>