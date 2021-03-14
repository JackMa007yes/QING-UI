<template>
  <div>
    <topnav/>
      <div class="layout">
        <Topnav class="nav" toggleMenuButtonVisible='true'/>
        <div class="content" >
          <aside v-if="menuVisible">
            <h2>组件列表</h2>
            <ol>
              <li>
                <router-link tag="div"  to="/doc/intro">介绍</router-link>
              </li> 
              <li> 
                <router-link tag="div" to="/doc/install">安装</router-link>
              </li>
              <li>
                <router-link tag="div" to="/doc/getstart">起步</router-link>
              </li>  
              <li>
                <router-link tag="div" to="/doc/switch">Switch 组件</router-link>
              </li>
              <li>
                <router-link tag="div" to="/doc/button">Button 组件</router-link>
              </li>
              <li>
                <router-link tag="div" to="/doc/Dialog">Dialog 组件</router-link>
              </li>
              <li>
                <router-link tag="div" to="/doc/tabs">Tabs 组件</router-link>            
              </li>
            </ol>
          </aside>
          <main>
            <router-view/>
          </main>
        </div>
      </div>
  </div>
</template>

<script>
import { inject } from 'vue'
import Topnav from '../components/Topnav.vue'
export default {
  components: { Topnav },
  setup(){
    const menuVisible = inject('xxx')
    return {menuVisible}
  },
  name:'Doc'
}
</script>

<style lang="scss" scoped>
  .layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: lightgreen;
  }
}
  aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
      text-decoration: none;
    }
  }
}
main {
  overflow: auto;
}
.router-link-active {
  font-size: 20px;
  font-weight: 600;
  text-decoration: underline;
}
</style>