<template>
  <div class="markdown-body">
    <h1>Collaspe示例</h1>
    <demo title="示例一：常规使用，已实现双向绑定">
      <template v-slot:ui>
        <q-collapse v-model:selected="a" >
          <q-collapse-item title="标题一" :name=1>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</q-collapse-item>
          <q-collapse-item  title="标题二" :name=2>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</q-collapse-item>
          <q-collapse-item title="标题三" :name=3>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</q-collapse-item>
        </q-collapse>
      </template>
      <template v-slot:code>
        <pre>{{CollapseDemo1.__sourceCode}}</pre>
      </template>
    </demo>
    <demo title="示例二：手风琴效果">
      <template v-slot:ui>
        <q-collapse  single>
          <q-collapse-item title="标题一" :name=1>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</q-collapse-item>
          <q-collapse-item  title="标题二" :name=2>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</q-collapse-item>
          <q-collapse-item title="标题三" :name=3>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</q-collapse-item>
        </q-collapse>
      </template>
      <template v-slot:code>
        <pre>{{CollapseDemo2.__sourceCode}}</pre>
      </template>
    </demo>
    <demo title="示例三：默认选中">
      <template v-slot:ui>
        <q-collapse :selected="[2]">
          <q-collapse-item title="标题一" :name=1>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</q-collapse-item>
          <q-collapse-item  title="标题二" :name=2>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</q-collapse-item>
          <q-collapse-item title="标题三" :name=3>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</q-collapse-item>
        </q-collapse>
      </template>
      <template v-slot:code>
        <pre>{{CollapseDemo3.__sourceCode}}</pre>
      </template>
    </demo>
    <attribute-table title="collaspe-Attributes" :tableData="tableData"/>
    <attribute-table title="collaspe-item-Attributes" :tableData="itemTableData"/>
  </div>

</template>
<script>
import QCollapse from '../../lib/QCollapes/QCollapse.vue'
import QCollapseItem from '../../lib/QCollapes/QCollapseItem.vue'
import AttributeTable from '../AttributesTable.vue'
import Demo from '../Demo.vue'
import CollapseDemo1 from './CollapseDemo1.vue'
import CollapseDemo2 from './CollapseDemo2.vue'
import CollapseDemo3 from './CollapseDemo3.vue'
import { ref } from 'vue'

export default {
  name:'CollapesDemo',
  components: { QCollapse,QCollapseItem,AttributeTable,demo:Demo },
  setup(){
    const activeName = '1'
    let a = ref([1,2,3])
    return {activeName,a,CollapseDemo1,CollapseDemo2,CollapseDemo3}
  },
  data(){
    return {
      tableData:      
      [
        {
          prop: 'single',
          desc: '是否选择手风琴效果',
          type: 'Boolean',
          options: 'true/false',
          default:'false'
        },   
        {
          prop: 'selected',
          desc: "选择Collapse组件展开的选项",
          type: 'Array',
          options: '-',
          default:'-'
        }
      ],
      itemTableData:      
      [
        {
          prop: 'title',
          desc: '命名选项的标题（必选）',
          type: 'String',
          options: '-',
          default:'-'
        },   
        {
          prop: 'name',
          desc: '命名选项唯一的标识（必选）',
          type: 'String/Number',
          options: '-',
          default:'-'
        }
      ],
    }
  }
}
</script>

<style>

</style>