<template>
  <q-button @click="showToast">展示</q-button>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue'
import QButton from '../lib/QButton.vue'
// import QToast from '../lib/QToast/QToast.vue'
// import {useToast} from '../lib/QToast/index'
export default {
  name:'QToastDemo',
  setup(props,context){
    // const Toast = useToast()
    const {proxy} = getCurrentInstance()
    const showToast = () => {
      proxy.$toast.show('kkkkkk',2000)
    }
    return {showToast}
  },
  components: {QButton},

}
</script>

<style>

</style>