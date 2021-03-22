<demo> </demo>
<template>
  <q-collapse v-model:selected="a" >
    <q-collapse-item title="标题一" :name=1>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</q-collapse-item>
    <q-collapse-item  title="标题二" :name=2>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</q-collapse-item>
    <q-collapse-item title="标题三" :name=3>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</q-collapse-item>
  </q-collapse>
</template>
<script>
import QCollapse from '../../lib/QCollapes/QCollapse.vue'
import QCollapseItem from '../../lib/QCollapes/QCollapseItem.vue'
import { ref } from 'vue'

export default {
  components: { QCollapse,QCollapseItem },
  setup(){
    let a = ref([1,2,3])
    return {activeName,a}
  }
}
</script>