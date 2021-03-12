<template>
    <p>Switch 的文档</p>
    <Switch :value='y' @input="y = $event" />
</template>

<script>
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'

export default {
  components: { Switch },
  name:'SwitchDemo',
  setup(){
    const y = ref(true)
    return {y}
  }
}
</script>

<style>

</style>