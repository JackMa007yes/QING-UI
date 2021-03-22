<demo> </demo>
<template>
  <q-tabs v-model:selected='x' >
    <q-tab title="导航一" >内容一</q-tab>
    <q-tab title="导航二">内容二</q-tab>
  </q-tabs>
</template>

<script>
import QTabs from '../../lib/QTabs.vue'
import QTab from '../../lib/QTab.vue'
import { ref } from 'vue'


export default {
  components: { QTabs,QTab },
  name:'TabsDemo',
  setup(){
    const x = ref('导航一')
    return {x}
  }
}
</script>