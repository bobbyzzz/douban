<template>
  <div id="app">
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myFooter from './components/footer'
export default {
  name: 'app',
  components: {
    myFooter
  }
}
</script>

<style>
@import './static/css/base.css';
</style>
