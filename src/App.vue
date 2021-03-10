<template>
  <div class="main">
    <Menu />
    <router-view class="content" />
  </div>
</template>

<script>
import Menu from './components/menu/index'
export default {
  name: 'App',
  components: { Menu }
}
</script>

<style lang='scss'>
@import './assets/css/common.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  /* margin-top: 60px; */
}
.main{
  height: 100%;
  width: 100%;
  display: flex;
  .content {
    flex: 1;
  }
}
</style>
