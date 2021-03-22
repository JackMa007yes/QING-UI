<demo> </demo>
<template>
        <q-button @click="toggle2">toggle</q-button>
        <q-dialog v-model:visible="y" :closeOnclickOverlay="false" :ok='f1' :cancel='f2'>
          <p>文字文字文字文字</p>
          <p>文字文字文字</p>
        </q-dialog>
</template>

<script>
import { ref } from 'vue'
import QButton from '../../lib/QButton.vue'
import QDialog from '../../lib/QDialog.vue'


export default {
  components: { QDialog, QButton},
  setup(){
    const y = ref(false)
    const toggle2 = () =>{
      y.value = !y.value
    }
    const f1 = function(){
      return 
    }
    const f2 = () => {
    }
    return {y,toggle2,f1,f2}
  }
}
</script>