<template>
  <h2>Dialog示例</h2>
  <h1>示例一</h1>
  <q-button @click="toggle">toggle</q-button>
  <q-dialog v-model:visible="x" :closeOnclickOverlay="false" :ok='f1' :cancel='f2'>
    <p>jjjjjj</p>
    <p>hhhhhh</p>
  </q-dialog>
</template>

<script>
import { ref } from 'vue'
import QButton from '../lib/QButton.vue'
import QDialog from '../lib/QDialog.vue'
export default {
  components: { QDialog, QButton },
  name:'DialogDemo',
  setup(){
    const x = ref(false)
    const toggle = () =>{
      x.value = !x.value
    }
    const f1 = function(){
      return false
    }
    const f2 = () => {
    }
    return {x,toggle,f1,f2}
  }

}
</script>

<style>

</style>