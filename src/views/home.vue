<template>
  <div>
    <div class="topnavAndBanner">
      <topnav/>
      <div class="banner">
        <h1>轻UI</h1>
        <h2>一款轻量级的UI库</h2>
        <p class="actions">
          <a href="https://github.com">Github</a>
          <router-link to="doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon vue">
        <use xlink:href="#icon-Vue"></use>
      </svg>
      <svg class="icon js">
        <use xlink:href="#icon-JavaScript"></use>
      </svg>
      <svg class="icon light">
        <use xlink:href="#icon-deng"></use>
      </svg>
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
  $green:#02bcb0;
  $color:#28d1c9;
  .topnavAndBanner {
    background: linear-gradient(135deg, rgba(227,255,253,1) 0%, rgba(183,233,230,1) 100%);
  }
  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: $green;
    > .actions{
      padding: 8px 0;
      a {
        margin:0 8px;
        background: $green;
        display: inline-block;
        $h: 28px;
        color: #fff;
        border-radius: 4px;
        padding: 8px 24px;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
  .features {
    >svg {
     width: 70px;
     height: 70px;
    }
  }
</style>