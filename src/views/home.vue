<template>
  <div>
    <div class="topnavAndBanner">
      <topnav/>
      <div class="banner">
        <h1>QING-UI</h1>
        <h2>一款基于Vue3的轻量级UI库</h2>
        <p class="actions">
          <a href="https://github.com" class="github">Github</a>
          <router-link to="doc" class="start">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <div class="features-item">
        <svg class="icon vue">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>全新VUE3</h3>
        <p>使用了Vue3新特性</p>
      </div>
      <div class="features-item">
        <svg class="icon js">
          <use xlink:href="#icon-JavaScript"></use>
        </svg>
        <h3>基于JavaScript</h3>
        <p>使用JavaScript编写</p>
      </div>
      <div class="features-item">
        <svg class="icon light">
          <use xlink:href="#icon-deng"></use>
        </svg>
        <h3>清晰文档</h3>
        <p>文档可读性高，易于理解</p>
      </div>
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
  $color:rgb(121,82,179);
  .topnavAndBanner {
    background: linear-gradient(135deg, rgba(227,255,253,1) 0%, rgba(183,233,230,1) 100%);
    // clip-path: ellipse(80% 60% at 50% 40%);
  }
  .banner {
    margin-top: 50px;
    padding: 90px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: rgb(33,37,41);
    background-color: rgb(247,245,251);
    background: linear-gradient(to right bottom, #f7f5fb 50%, #fff 50%);
    h1 {
      margin-top: 50px;
      font-weight: 500;
      font-family:Arial;
      font-size: 50px;
    }
    h2 {
      font-size: 20px;
      margin-bottom: 20px;
    }
   
    > .actions{
      padding: 8px 0;
      margin:0 8px;
      >* {
        display: inline-block;
        width: 100px;
        text-align: center;
        padding: 8px ;
        border: 2px solid $color;
        border-radius: 4px;
        margin: 2px;
        &:hover {
          text-decoration: none;
        }  
      }
      .github {
        background-color: white;
      }
      .start {
        background-color: $color;
        color: white;
      }
      @media (max-width:500px){
        display:flex;
        flex-direction: column;
        >*{
          width: 250px;
        }
      }
    }
  }
  .features {
    @media (max-width:800px) {
    margin: 50px auto;
    display: flex;
    flex-direction:column;
    align-items: center;
    &-item {
    margin-bottom: 20px;
    width: 250px;
    }
    }
    @media(min-width:800px){
    margin: 50px auto;
    width: 550px;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    &-item {
      width: 250px;
      margin-right: 50px;
    }
    :nth-child(2){
      margin-right: 0;
    }
    }
    @media(min-width:1200px){
    width: 800px;
    justify-content: space-between;
    &-item{
    margin-right: 0;
    }
    }
    &-item {
    white-space: nowrap;
    margin-bottom: 30px;
    >h3 {
      margin-top: 5px;
      margin-bottom: 5px;
      font-weight: 550;
    }
    >svg {
    float: left;
    width: 70px;
    height: 70px;
    }
    }

  }
</style>