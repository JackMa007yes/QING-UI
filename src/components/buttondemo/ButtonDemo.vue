<template>
  <div class="markdown-body">
    <h1>Button组件</h1>
    <demo title="示例一：常规按钮、链接按钮、文字按钮">
      <template v-slot:ui>
        <q-button theme="button">你好</q-button>
        <q-button theme="link">你好</q-button>
        <q-button theme="text">你好</q-button>
      </template>
      <template v-slot:code >
        <pre>{{ButtonDemo1.__sourceCode}}</pre>
      </template>
    </demo>
    <demo title="示例二：设置按钮大小">
      <template v-slot:ui>
        <div>
          <q-button size="big">大大大</q-button>
          <q-button>普普通</q-button>
          <q-button size="small">小小小</q-button>
        </div>
        <div>
          <q-button theme="link" size="big">大大大</q-button>
          <q-button theme="link">普普通</q-button>
          <q-button theme="link" size="small">小小小</q-button>
        </div>
        <div>
          <q-button theme="text" size="big">大大大</q-button>
          <q-button theme="text">普普通</q-button>
          <q-button theme="text" size="small">小小小</q-button>
        </div>
      </template>
      <template v-slot:code >
        <pre>{{ButtonDemo2.__sourceCode}}</pre>
      </template>
    </demo>
    <demo title="示例三：按钮禁用">
      <template v-slot:ui>
        <div>
          <q-button disabled>禁用</q-button>
          <q-button :disabled="false">非禁用</q-button>
        </div>
      </template>
      <template v-slot:code >
        <pre>{{ButtonDemo3.__sourceCode}}</pre>
      </template>
    </demo>
    <demo title="示例四：加载按钮">
      <template v-slot:ui>
        <q-button :loading='true'>加载中</q-button>
        <q-button :loading='false'>加载完成</q-button>
      </template>
      <template v-slot:code >
        <pre>{{ButtonDemo4.__sourceCode}}</pre>
      </template>
    </demo>
    <attribute-table title="Attributes" :tableData="tableData"/>
      <p>下一节：<a href="#/doc/dialog">Dialog组件</a></p> 
  </div>
</template>

<script>
import qButton from '../../lib/QButton.vue'
import AttributeTable from '../AttributesTable.vue'
import Demo from '../Demo.vue'
import ButtonDemo1 from './ButtonDemo1.vue'
import ButtonDemo2 from './ButtonDemo2.vue'
import ButtonDemo3 from './ButtonDemo3.vue'
import ButtonDemo4 from './ButtonDemo4.vue'


export default {
  components: { qButton, AttributeTable,demo:Demo },
  name:'ButtonDemo',
  setup(){
    return {ButtonDemo1,ButtonDemo2,ButtonDemo3,ButtonDemo4}
  },
  data(){
    return {
      tableData:      
      [
        {
          prop: 'theme',
          desc: "选择button类型",
          type: 'String',
          options: 'button/link/text',
          default:'button'
        },
        {
          prop: 'size',
          desc: '选择button大小',
          type: 'String',
          options: 'small/normal/big',
          default:'narmal'
        },
        {
          prop: 'disabled',
          desc: 'button是否被禁用',
          type: 'Boolean',
          options: 'true/false',
          default:'false'
        },
        {
          prop: 'loading',
          desc: 'button显示加载中',
          type: 'Boolean',
          options: 'true/false',
          default:'false'
        }        
      ]
    }
  }
}
</script>

<style>

</style>