<demo> </demo>
<template>
  <q-button @click="toggle1">toggle</q-button>
  <q-dialog v-model:visible="x"  
    closeOnclickOverlay 
    :ok='f1' 
    :cancel='f2'>
    <p>文字文字文字文字</p>
    <p>文字文字文字</p>
  </q-dialog>
</template>

<script>
import QDialog from '../../lib/QDialog.vue'
import QButton from '../../lib/QButton.vue'
import { ref } from 'vue'

export default {
  components: { QDialog, QButton},
  name:'DialogDemo',
  setup(){
    const x = ref(false)
    const toggle1 = () =>{
      x.value = !x.value
    }
    const f1 = function(){
      return 
    }
    return {x,y,toggle1,f1,f2}
  }
}
</script>