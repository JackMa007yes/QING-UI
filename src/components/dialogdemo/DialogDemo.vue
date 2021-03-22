<template>
  <div class="markdown-body">
    <h1>Dialog组件</h1>
    <demo title="示例一：点击遮罩层即可关闭">
      <template v-slot:ui>
        <q-button @click="toggle1">toggle</q-button>
        <q-dialog v-model:visible="x"  
          closeOnclickOverlay 
          :ok='f1' 
          :cancel='f2'>
          <p>文字文字文字文字</p>
          <p>文字文字文字</p>
        </q-dialog>
      </template>
      <template v-slot:code >
        <pre>{{DialogDemo1.__sourceCode}}</pre>
      </template>
    </demo>
     <demo title="示例二：点击遮罩层不可关闭">
      <template v-slot:ui>
        <q-button @click="toggle2">toggle</q-button>
        <q-dialog v-model:visible="y" :closeOnclickOverlay="false" :ok='f1' :cancel='f2'>
          <p>文字文字文字文字</p>
          <p>文字文字文字</p>
        </q-dialog>
      </template>
      <template v-slot:code >
        <pre>{{DialogDemo2.__sourceCode}}</pre>
      </template>
    </demo> 
     <demo title="示例三：代码形式,传入属性即可">
      <template v-slot:ui>
        <q-button @click="showDialog">toggle</q-button>
      </template>
      <template v-slot:code >
        <pre>{{DialogDemo3.__sourceCode}}</pre>
      </template>
    </demo> 
    <attribute-table title="Attributes" :tableData="tableData"/>
    <events-table title="Events" :tableData="eventsTableData"/>
    <p>下一节：<a href="#/doc/tabs">Tabs组件</a></p> 
  </div>
</template>

<script>
import {openDialog} from "../../lib/openDialog"
import { ref } from 'vue'
import QButton from '../../lib/QButton.vue'
import QDialog from '../../lib/QDialog.vue'
import AttributeTable from '../AttributesTable.vue'
import EventsTable from '../EventsTable.vue'
import Demo from '../Demo.vue'
import DialogDemo1 from "./DialogDemo1.vue"
import DialogDemo2 from "./DialogDemo2.vue"
import DialogDemo3 from "./DialogDemo3.vue"




export default {
  components: { QDialog, QButton,AttributeTable,EventsTable,demo:Demo },
  name:'DialogDemo',
  setup(){
    const x = ref(false)
    const y = ref(false)
    const toggle1 = () =>{
      x.value = !x.value
    }
    const toggle2 = () =>{
      y.value = !y.value
    }
    const f1 = function(){
      return
    }
    const f2 = () => {
    }
    const showDialog = () => {
      openDialog({
        title:'警告',
        content:'文字内容',
        ok(){
          console.log(111)
        },
        cancel(){
          console.log(222)
        },
        closeOnclickOverlay:false
      })
    }
    return {x,y,toggle1,toggle2,f1,f2,showDialog,DialogDemo1,DialogDemo2,DialogDemo3}
  },
  data(){
    return {
      tableData:      
      [
        {
          prop: 'title',
          desc: 'Dialog组件标题',
          type: 'String',
          options: '-',
          default:'提示'
        },   
        {
          prop: 'visible',
          desc: "选择组件是否展示",
          type: 'Boolean',
          options: 'true/false',
          default:'false'
        },
        {
          prop: 'closeOnclickOverlay',
          desc: '点击遮罩层是否可以关闭Dialog',
          type: 'Boolean',
          options: 'true/false',
          default:'false'
        },

      ],
      eventsTableData:      
      [
        {
          eventName: 'ok',
          desc: '点击ok按钮时，触发的回调事件',
        },   
        {
          eventName: 'cancel',
          desc: '点击cancel按钮时，触发的回调事件',
        },
      ]
    }
  }
}
</script>

<style>

</style>