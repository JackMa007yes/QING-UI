<template>
    <button class="q-switch" :class="{'q-checked':modelValue}" @click="toggle">
      <span></span>
    </button>
</template>

<script>
export default {
  name:'Switch',
  props:{
    modelValue:{
      type:[Boolean,String],
      default:true
    }
  },
  setup(props,context){
    const toggle = () => {
      context.emit('update:model-value',!props.modelValue)
    }
    return {toggle}
  }
}
</script>

<style lang='scss'>
  $h: 22px;
  $h2: $h - 4px;
  .q-switch{
    height: $h;
    width: $h*2;
    border: none;
    background: grey;
    border-radius: $h/2;
    position: relative;
    outline: none;
  }
  .q-switch>span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    border-radius: $h2 / 2;
    transition: left 0.25s;
  }
  .q-checked { background-color: rgb(121,82,179);}
  .q-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
</style>