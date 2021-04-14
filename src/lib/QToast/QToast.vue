<template>
  <div class="q-toast" v-show="visible" :class="toastClass">
    <span>{{message}}</span>
    <span v-if="closeButton" class="q-toast-line" ></span>
    <span v-if="closeButton" class="q-toast-close" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
import { computed,  onMounted } from 'vue'
import {showToast,removeToast} from './index.js'

export default {
  name:'Toast',
  props:{
    message:{
      type:String,
      default:'默认文字'
    },
    autoClose:{
      type:Boolean,
      default:true
    },
    visible:{
      type:Boolean,
      default:true
    },
    autoCloseDelay:{
      type:Number,
      default:2000
    },
    closeButton:{
      type:Object,
    },
    position:{
      type:String,
      default:'center',
      validator(value){
        return ['top','center','bottom'].indexOf(value)>=0
      }
    }
  },
  setup(props,context){
    onMounted(() => {
      if(props.autoClose){
        setTimeout(() =>{
          removeToast()
        },props.autoCloseDelay)
      }
    })
    const onClickClose = () => {
      removeToast()
      if(props.closeButton && typeof props.closeButton.callback === 'function'){
        props.closeButton.callback()
      }
    }
    const toastClass = computed(()=>{
      return {[`qtoast-position-${props.position}`]:true}
    })
    return {onClickClose,toastClass}
  }
}
</script>

<style lang='scss' scoped>
  $font-size:14px;
  $height:40px;
  $toast-bg:rgba(0,0,0,0.75);
  @keyframes fade-in {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  .q-toast {
    animation: fade-in 1s;
    display: flex;
    font-size: $font-size;
    position: fixed;
    min-height: 40px;
    z-index: 50;
    left: 50%;
    line-height: 1.8;
    padding: 8px 10px;
    background-color:$toast-bg;
    border-radius: 4px;
    color: white;
    align-items: center;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
    &-line {
      display: inline-block;
      // height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
      align-self: stretch;
    }
    .q-toast-close {
      flex-shrink: 0;
      padding-left: 16px;
      // border-left: 1px solid #666;
      // height: 100%;
    }
    &.qtoast-position-top {
      top: 0;
      transform: translateX(-50%);
    }
    &.qtoast-position-center {
      top: 50%;
      transform: translate(-50%,-50%);
    }
    &.qtoast-position-bottom {
      bottom: 0;
      transform: translateX(-50%);
    }
  }
</style>