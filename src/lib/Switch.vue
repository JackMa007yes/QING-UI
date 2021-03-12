<template>
    <button :class="{checked:value}" @click="toggle">
      <span></span>
    </button>
    <div>
      {{value}}
    </div>
</template>

<script>
export default {
  name:'Switch',
  emits:['input'],
  props:{
    value:{
      type:[Boolean,String],
      default:true
    }
  },
  setup(props,context){
    const toggle = () => {
      context.emit('input',!props.value)
    }
    return {toggle}
  }
}
</script>

<style lang='scss' scoped>
  $h: 22px;
  $h2: $h - 4px;
  button{
    height: $h;
    width: $h*2;
    border: none;
    background: grey;
    border-radius: $h/2;
    position: relative;
    outline: none;
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    border-radius: $h2 / 2;
    transition: left 0.25s;
  }
  .checked { background-color: blue;}
  .checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
</style>