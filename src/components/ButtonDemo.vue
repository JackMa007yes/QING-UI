<template>
  <h2>button示例</h2>
  <h1>示例1</h1>
  <q-button>你好</q-button>
  <q-button theme="button">你好</q-button>
  <q-button theme="link">你好</q-button>
  <q-button theme="text">你好</q-button>
  <h1>示例2</h1>
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
  <h1>示例3</h1>
  <h1>示例4</h1>
  <div>
    <q-button disabled>大大大</q-button>
    <q-button :disabled="true">大大大</q-button>
    <q-button :disabled="false">大大大</q-button>
  </div>
    <h1>示例5</h1>
  <div>
    <q-button :loading='true'>加载中</q-button>
    <q-button :loading='false'>加载完成</q-button>

  </div>


</template>

<script>
import qButton from '../lib/QButton.vue'
export default {
  components: { qButton },
  name:'ButtonDemo'
}
</script>

<style>

</style>