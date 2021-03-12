<template>
    <button class="q-switch" :class="{'q-checked':value}" @click="toggle">
      <span></span>
    </button>
    <div>
      {{value}}
    </div>
</template>

<script>
export default {
  name:'Switch',
  props:{
    value:{
      type:[Boolean,String],
      default:true
    }
  },
  setup(props,context){
    const toggle = () => {
      context.emit('update:value',!props.value)
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
  .q-checked { background-color: blue;}
  .q-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
</style>