<demo> </demo>
<template>
  <q-button @click="callToast1">点击打开toast</q-button>
</template>

<script>
import {showToast} from '../../lib/QToast/index.js'


export default {
  name:'QToastDemo',
  setup(props,context){
    const callToast1 = () => {
      showToast({position:'top'})
    }
    return {callToast1}
  }
}
</script>