<template>
  <div class="topnav">
    <div class="logo" @click='toggleMenu'>LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name:'TopNav',
  setup(){
    const menuVisible = inject('xxx')
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return {toggleMenu}
  }
}
</script>

<style lang='scss' scoped>
  .topnav {
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>