<template>
  <div class="markdown-body">
    <h1>开始使用</h1>
    <p>请先安装本组件库，然后增加下面的代码</p>
    <pre><code>import {QButton,QTabs,QSwitch,QDialog,QInput,QToast,QCollapse} from 'qing-ui'</code></pre>
    <p>即可使用提供的组件</p>
    <h2>Vue单文件组件</h2>
    <p>代码示例</p>
    <pre >
      <code v-text="
        `<template>
          <div>
            <q-button>按钮</q-button>
          </div>
        </template>
        <script>
          import {QButton,QTabs,QSwitch,QDialog,QInput,QToast,QCollapse} from 'qing-ui'
          export default {
            components: { QButton }
          }
        </script>`">
      </code>
    </pre>
    <p>
      下一节：<a href="#/doc/Switch">Switch组件</a>
    </p>
  </div>
</template>

<script>
export default {
  name:'GetStart'
}
</script>

<style>

</style>