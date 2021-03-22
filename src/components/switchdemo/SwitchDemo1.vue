<demo> </demo>
<template>
  <q-switch v-model='bool'/>
</template>

<script>
import { ref } from 'vue'
import QSwitch from '../../lib/QSwitch.vue'


export default {
  name:'SwitchDemo1',
  components: { QSwitch},
  setup(){
    const bool = ref(true)
    return {bool}
  }
}
</script>