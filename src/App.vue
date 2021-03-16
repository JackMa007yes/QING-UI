<template>
  <router-view/>
</template>

<script>
import { provide, ref } from 'vue'
import router from "./router"
// import {provideToast} from './lib/QToast/index'

export default {
  name: 'App',
  setup(){
    // provideToast({
    //   width:'200px',
    //   duration: 2000
    // })
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width >= 500 ? true:false)
    provide('xxx',menuVisible)
    router.afterEach(() =>{
      if(width <= 500){
         menuVisible.value = false
      }
    })
  }
}
</script>
<style scoped>

</style>
