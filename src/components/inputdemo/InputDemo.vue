<template>
  <div class="markdown-body">
    <h1>input示例</h1>
     <demo title="示例一:常规使用，支持双向绑定">
      <template v-slot:ui>
        <q-input v-model="message" />
        <p>{{message}}</p>
      </template>
      <template v-slot:code >
        <pre>{{InputDemo1.__sourceCode}}</pre>
      </template>
    </demo> 
    <demo title="示例二:禁用">
      <template v-slot:ui>
        <q-input modelValue='张三' disabled/>
      </template>
      <template v-slot:code >
        <pre>{{InputDemo2.__sourceCode}}</pre>
      </template>
    </demo>
    <demo title="示例三:只读">
      <template v-slot:ui>
        <q-input modelValue='张三' readonly/> 
      </template>
      <template v-slot:code >
        <pre>{{InputDemo3.__sourceCode}}</pre>
      </template>
    </demo>  
    <demo title="示例四：错误提示">
      <template v-slot:ui>
        <q-input modelValue='' error="姓名不能少于两个字"/>
      </template>
      <template v-slot:code >
        <pre>{{InputDemo4.__sourceCode}}</pre>
      </template>
    </demo>  
    <attribute-table title="Attributes" :tableData="tableData"/>
    <p>下一节：<a href="#/doc/toast">Toast组件</a></p> 
  </div>
</template>
 
<script>
import { ref } from 'vue'
import QInput from '../../lib/QInput.vue'
import AttributeTable from '../AttributesTable.vue'
import demo from '../Demo.vue'
import InputDemo1 from './InputDemo1.vue'
import InputDemo2 from './InputDemo2.vue'
import InputDemo3 from './InputDemo3.vue'
import InputDemo4 from './InputDemo4.vue'


export default {
  name:'InputDemo',
  components: { QInput,AttributeTable,demo },
  setup(){
    const message = ref('aaa')
    return {message,InputDemo1,InputDemo2,InputDemo3,InputDemo4}
  },
  data(){
    return {
      tableData:      
      [
        {
          prop: 'modelValue',
          desc: "选择input输入框内的默认文字",
          type: 'String',
          options: "-",
          default:''
        }, 
        {
          prop: 'disabled',
          desc: "将输入框设置为禁用状态",
          type: 'Boolean',
          options: "true/false",
          default:'false'
        },         
        {
          prop: 'readonly',
          desc: "将输入框设置为只读状态",
          type: 'Boolean',
          options: "true/false",
          default:'false'
        },         
        {
          prop: 'error',
          desc: "将输入框设置为错误提示状态",
          type: 'String',
          options: "-",
          default:''
        }, 
      ]
    }
  }
}
</script>

<style>

</style>