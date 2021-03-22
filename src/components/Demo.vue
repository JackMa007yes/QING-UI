<template>
  <div class="layout">
    <div class="text">
      {{title}}
    </div>
    <div class="ui-area">
      <slot name="ui" />
      <!-- <p class="button"><q-button @click="toggleCode">查看代码</q-button></p> -->
    </div>
    <div class="code"  v-if="visible">
      <slot name="code"/>
    </div>
    <div class="codeSwitch"  @click="toggleCode">
      <span v-if="!visible">点击查看代码</span><span v-if="visible">点击关闭代码</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import QButton from '../lib/QButton.vue'
export default {
  props:{
    title:{
      type:String
    }
  },
  setup(){
    const visible = ref(false)
    const toggleCode = () => {
      visible.value = !visible.value
    }
    return {toggleCode,visible}
  },
  components: { QButton },

}
</script>

<style lang='scss' scoped>
  $grey:rgb(198,203,209);
  .layout {
    margin-bottom: 30px;
    border: 1px solid $grey;
    .text {
      font-size: 18px;
      font-weight: 550;
      border-bottom: 1px solid $grey;
      padding: 4px 10px;
    }
    .ui-area {
      min-height: 50px;
      padding: 20px;
      position: relative;
      border-bottom: 1px dotted $grey;
    }
    .button {
      margin-top: 20px;
    }
    .code {
      padding: 10px 20px;
      background-color: rgb(246,248,250);
    }
    .codeSwitch {
      font-size: 10px;
      text-align: center;
      padding: 2px;
      background-color: #fff;
      margin-bottom: 0;
    }
  }
</style>