<template>
  <h2>input示例</h2>
  <h1>示例一</h1>
  <q-input v-model:value="message" />
  <p>{{message}}</p>
  <h1>示例二</h1>
  <q-input value='张三' disabled/>
  <h1>示例三</h1>
  <q-input value='张三' readonly/> 
  <h1>示例四</h1>
  <q-input value='张三' error="姓名不能少于两个字"/>
</template>
 
<script>
import QInput from '../lib/QInput.vue'
export default {
  name:'InputDemo',
  components: { QInput },
  data(){
    return {
      message:'aaa'
    }
  },
}
</script>

<style>

</style>