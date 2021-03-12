<template>
    <p>Switch 的文档</p>
    <q-switch v-model:value='bool'  />
</template>

<script>
import { ref } from 'vue'
import QSwitch from '../lib/QSwitch.vue'

export default {
  components: { QSwitch },
  name:'SwitchDemo',
  setup(){
    const bool = ref(true)
    return {bool}
  }
}
</script>

<style>

</style>