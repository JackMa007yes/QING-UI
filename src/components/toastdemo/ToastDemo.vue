<template>
  <div class="markdown-body">
    <h1>Toast示例</h1>
    <demo title="示例一：顶部">
      <template v-slot:ui>
        <q-button @click="callToast1">点击打开toast</q-button>
      </template>
      <template v-slot:code >
        <pre>{{ToastDemo1.__sourceCode}}</pre>
      </template>
    </demo>
    <demo title="示例二：中部">
      <template v-slot:ui>
        <q-button @click="callToast2">点击打开toast</q-button>
      </template>
      <template v-slot:code >
        <pre>{{ToastDemo2.__sourceCode}}</pre>
      </template>
    </demo>
    <demo title="示例三：底部">
      <template v-slot:ui>
        <q-button @click="callToast3">点击打开toast</q-button>
      </template>
      <template v-slot:code >
        <pre>{{ToastDemo3.__sourceCode}}</pre>
      </template>
    </demo>
    <demo title="示例四：关闭按钮">
      <template v-slot:ui>
        <q-button @click="callToast4">点击打开toast</q-button>
      </template>
      <template v-slot:code >
        <pre>{{ToastDemo4.__sourceCode}}</pre>
      </template>
    </demo>
    <demo title="示例五：取消自动关闭">
      <template v-slot:ui>
        <q-button @click="callToast5">点击打开toast</q-button>
      </template>
      <template v-slot:code >
        <pre>{{ToastDemo5.__sourceCode}}</pre>
      </template>
    </demo>
    <attribute-table title="Attributes" :tableData="tableData"/>
    <p>下一节：<a href="#/doc/collapse">Collapse组件</a></p> 
  </div>
</template>

<script>
import QButton from '../../lib/QButton.vue'
import {showToast,removeToast} from '../../lib/QToast/index.js'
import AttributeTable from '../AttributesTable.vue'
import demo from '../Demo.vue'
import ToastDemo1 from './ToastDemo1.vue'
import ToastDemo2 from './ToastDemo2.vue'
import ToastDemo3 from './ToastDemo3.vue'
import ToastDemo4 from './ToastDemo4.vue'
import ToastDemo5 from './ToastDemo5.vue'



export default {
  name:'QToastDemo',
  setup(props,context){
    const callToast1 = () => {
      showToast({position:'top'})
    }
    const callToast2 = () => {
      showToast({position:'center'})
    }
    const callToast3 = () => {
      showToast({position:'bottom'})
    }
    const callToast4 = () => {
      showToast({position:'center',closeButton:{
        text:'知道了',
        callBack:()=>{console.log('回调函数')}
      }})
    }
    const callToast5 = () => {
      showToast({position:'center',autoClose:false,closeButton:{
        text:'知道了'
      }})
    }
    return {callToast1,callToast2,callToast3,callToast4,callToast5,ToastDemo1,ToastDemo2,ToastDemo3,ToastDemo4,ToastDemo5}
  },
    data(){
    return {
      tableData:      
      [
        {
          prop: 'message',
          desc: "设置Toast组件提示文字",
          type: 'String',
          options: "-",
          default:'默认文字'
        }, 
        {
          prop: 'autoClose',
          desc: "设置Toast组件是否自动关闭",
          type: 'Boolean',
          options: "true/false",
          default:'true'
        },         
        {
          prop: 'visible',
          desc: "设置Toast组件是否隐藏",
          type: 'Boolean',
          options: "true/false",
          default:'true'
        },         
        {
          prop: 'autoCloseDelay',
          desc: "设置Toast组件显示后，多久后自动隐藏",
          type: 'Number',
          options: "-",
          default:'2000(ms)'
        },         
        {
          prop: 'closeButton',
          desc: "设置Toast组件是否显示关闭按钮,及关闭后执行的回调函数",
          type: 'Object',
          options: "-",
          default:'-'
        }, 
        {
          prop: 'position',
          desc: "设置Toast组件展示的位置",
          type: 'String',
          options: "top/center/bottom",
          default:'center'
        },
      ]
    }
  },
  components: {QButton,AttributeTable,demo},
}
</script>

<style>

</style>