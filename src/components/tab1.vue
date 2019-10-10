<template>
  <div class="movie">
    <ul>
      <li v-for="(item, index) in movieData" :key="index">
        <div class="moviePic">
          <img :src="item.cover" alt />
        </div>
        <p class="title">{{item.title}}</p>
        <p>评分：{{item.rate}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      movieData: ""
    };
  },
  methods: {
    getMovieData() {
      this.$axios.get("/douban/movieData").then(
        res => {
        //   console.log(res.data.subjects);
          this.movieData = res.data.subjects;
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  created() {
    this.getMovieData();
  }
};
</script>
<style scoped>
.movie{
    width: 3.75rem
}
.movie ul li{
    width: 1.1rem;
    margin-bottom: 0.1rem;
}
.movie ul li p{
    width: 100%;
    text-align: center;
    padding: 0.05rem;
}
.movie .moviePic{
    width: 1.1rem;
}
.movie .moviePic img{
    width: 100%;
}
.movie ul{
    display: flex;
    flex-wrap: wrap;
    padding: 0.1rem;
    justify-content: space-between;
}
.movie ul li .title{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.14rem;
    color: #1e2120;
}
.movie ul li p:nth-of-type(2){
    color: #8d8d8d;
}
</style>