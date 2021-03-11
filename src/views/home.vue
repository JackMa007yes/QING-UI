<template>
  <div>
    home页面
    <topnav/>
    <div class="banner">
      <h1>轻UI</h1>
      <h2>一款轻量级的UI库</h2>
      <p class="actions">
        <a href="">Github</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>

<script>
import Topnav from '../components/Topnav.vue'
export default {
  components: { Topnav },
  name:'Home'
}
</script>

<style lang='scss' scoped>
  .topbar{border: 1px solid red;}
</style>