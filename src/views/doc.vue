<template>
  <div>
    <topnav/>
    <div class="content" >
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/Dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>            
          </li>
        </ol>
      </aside>
      <main>主内容</main>
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

</style>