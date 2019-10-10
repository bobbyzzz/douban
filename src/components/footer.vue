<template>
  <div class="footer">
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item @click="toHome">
        <span>首页</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal" />
      </van-tabbar-item>
      <van-tabbar-item @click="toAudio">
        <span>书影音</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon1.active : icon1.normal" />
      </van-tabbar-item>
      <van-tabbar-item @click="toBroadCast">
        <span>广播</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon2.active : icon2.normal" />
      </van-tabbar-item>
      <van-tabbar-item @click="toGroup">
        <span>小组</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon3.active : icon3.normal" />
      </van-tabbar-item>
      <van-tabbar-item @click="toMine">
        <span>我的</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon4.active : icon4.normal" />
      </van-tabbar-item>
    </van-tabbar>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: require("../static/img/footer/ic_tab_home_normal.png"),
        active: require("../static/img/footer/ic_tab_home_active.png")
      },
      icon1: {
        normal: require("../static/img/footer/ic_tab_subject_normal.png"),
        active: require("../static/img/footer/ic_tab_subject_active.png")
      },
      icon2: {
        normal: require("../static/img/footer/ic_tab_status_normal.png"),
        active: require("../static/img/footer/ic_tab_status_active.png")
      },
      icon3: {
        normal: require("../static/img/footer/ic_tab_group_normal.png"),
        active: require("../static/img/footer/ic_tab_group_active.png")
      },
      icon4: {
        normal: require("../static/img/footer/ic_tab_profile_normal.png"),
        active: require("../static/img/footer/ic_tab_profile_active.png")
      },
    };
  },
  methods: {
      toHome(){
          this.$router.push('/home')
      },
      toAudio(){
          this.$router.push('/audio')
      },
      toBroadCast(){
          this.$router.push('/broadcast')
      },
      toGroup(){
          this.$router.push('/group')
      },
      toMine(){
          this.$router.push('/mine')
      },
  },
};
</script>
<style scoped>
@import "../static/css/footer.css";
</style>
