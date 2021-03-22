<template>
  <div class="markdown-body">
    <h1>Tabs示例</h1>
    <demo title="示例">
      <template v-slot:ui>
        <q-tabs v-model:selected='x' >
          <q-tab title="导航一" >内容一</q-tab>
          <q-tab title="导航二">内容二</q-tab>
        </q-tabs>
      </template>
      <template v-slot:code >
        <pre>{{TabsDemo1.__sourceCode}}</pre>
      </template>
    </demo>
    <attribute-table title="Attributes" :tableData="tableData"/>
    <p>下一节：<a href="#/doc/input">Input组件</a></p> 
  </div>
</template>

<script>

import QTabs from '../../lib/QTabs.vue'
import QTab from '../../lib/QTab.vue'
import AttributeTable from '../AttributesTable.vue'
import { ref } from 'vue'
import demo from '../Demo.vue'
import TabsDemo1 from './TabsDemo1.vue'


export default {
  components: { QTabs,QTab,AttributeTable,demo },
  name:'TabsDemo',
  setup(){
    const x = ref('导航一')
    return {x,TabsDemo1}
  },
  data(){
    return {
      tableData:      
      [
        {
          prop: 'selected',
          desc: "选择Tabs组件默认选中的tab",
          type: 'String',
          options: "-",
          default:''
        } 
      ]
    }
  }
}
</script>

<style>

</style>