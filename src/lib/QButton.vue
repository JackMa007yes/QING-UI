<template>
  <button class="qbutton" :class="classes" :disabled='disabled' >
    <span v-if="loading" class="q-loading-indicator"></span>
    <slot/>
  </button>
</template>

<script>
import { computed } from 'vue'
export default {
  name:'QButton',
  props:{
    theme:{
      type:String,
      default:'button'
    },
    size:{
      type:String,
      default:'normal'
    },
    disabled:{
      type:Boolean,
      default:false
    },
    loading:{
      type:Boolean,
      default:false
    }
  },
  setup(props){
    const {theme,size} = props
    const classes = computed(()=>{
      return {
        [`q-theme-${theme}`]: theme,
        [`q-size-${size}`]: size
        }
    })
    return {classes}
  }
}
</script>

<style lang='scss'>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.qbutton {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
  margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &.q-theme-button,
  &.q-theme-text,
  &.q-theme-link {
    &.q-size-big{
      font-size: 24px;
      height: 48px;
      padding: 0 16px
    }
    &.q-size-small{
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }
  }
  > .q-loading-indicator{
    display: inline-block;
    width: 14px;
    height: 14px;
    // background-color: $blue;
    border-radius: 8px;
    border-style: solid;
    border-width: 2px;
    border-color: $blue $blue $blue transparent;
    animation: s-spin 1s infinite linear;
  }
  @keyframes s-spin {
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
  }
}
</style>