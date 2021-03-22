<demo> </demo>
<template>
  <q-input v-model="message" />
  <p>{{message}}</p>
</template>
 
<script>
import { ref } from 'vue'
import QInput from '../../lib/QInput.vue'

export default {
  name:'InputDemo',
  components: { QInput },
  setup(){
    const message = ref('aaa')
    return {message}
  }
}
</script>