<template>
  <button class="qbutton" :class="`theme-${theme}`">
    <slot/>llll
  </button>
</template>

<script>
export default {
  name:'QButton',
  props:{
    theme:{
      type:String,
      default:'button'
    }
  }
}
</script>

<style>

</style>