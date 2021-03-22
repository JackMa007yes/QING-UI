<template>
  <div class="topnav">
    <router-link to="/">
      <div class="logo">
        <svg class="icon">
          <use xlink:href="#icon-yun"></use>
        </svg>
      </div>
    </router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
    </ul>
    <span class="toggle-aside" @click='toggleMenu' v-if="toggleMenuButtonVisible" >
      <svg class="icon vue">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name:'TopNavDemo',
  props:{
    toggleMenuButtonVisible:{
      type:Boolean,
      default:false
    }
  },
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
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: rgb(121,82,179);
   .logo {
    color: white;
    max-width: 6em;
    margin-right: auto;
    >svg {
      width: 32px;
      height: 32px;
      color: black;
    }
  }
  > .menu {
    color: white;
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    width: 24px;
    height: 24px;
    position: absolute;
    right: 40px;
    transform: translateY(-50%);
    top: 50%;
    > li {
      margin: 0 1em;
    }
  }
  > .toggle-aside{
    display: inline-block;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  @media(max-width:600px) {
     .menu {display: none;}
    > .logo {margin: 0 auto;}
    > .toggle-aside {display: inline-block;}
  }
}
</style>