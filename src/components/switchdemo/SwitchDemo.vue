<template>
  <div class="markdown-body">
    <h1>Switch组件</h1>
    <demo title="示例一：常规使用，已实现双向绑定">
      <template v-slot:ui>
        <q-switch v-model='bool'/>
      </template>
      <template v-slot:code >
        <pre>{{SwitchDemo1.__sourceCode}}</pre>
      </template>
    </demo>
    <attribute-table title="Attributes" :tableData="tableData"/>
    <p>下一节：<a href="#/doc/button">Button组件</a></p> 
  </div>
</template>

<script>
import { ref } from 'vue'
import QSwitch from '../../lib/QSwitch.vue'
import AttributeTable from '../AttributesTable.vue'
import demo from '../Demo.vue'
import SwitchDemo1 from './SwitchDemo1.vue'

export default {
  components: { QSwitch,AttributeTable, demo, SwitchDemo1 },
  name:'SwitchDemo',
  setup(){
    const bool = ref(true)
    return {bool,SwitchDemo1}
  },
  data(){
    return {
      tableData:      
      [
        {
          prop: 'modelValue',
          desc: "选择Switch组件默认是否打开",
          type: 'String、Boolean',
          options: "ture/false/'true'/'false'",
          default:'true'
        } 
      ]
    }
  }
}
</script>

<style>

</style>