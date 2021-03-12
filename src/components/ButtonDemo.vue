<template>
  <h2>button示例</h2>
  <q-button>你好</q-button>
  <q-button theme="button">你好</q-button>
  <q-button theme="link">你好</q-button>
  <q-button theme="text">你好</q-button>
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