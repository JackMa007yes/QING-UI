<template>
  <div class="q-input" :class="{'error':error!==''}">
    <input :value='value' 
      :disabled='disabled' 
      :readonly='readonly' 
      @input="$emit('update:value',$event.target.value)" 
      @change="$emit('update:value',$event.target.value)" 
      type="text">
    <svg class="icon" v-if="error">
      <use xlink:href="#icon-tishi"></use>
    </svg>
    <span class="error-message" v-if="error">{{error}}</span>
  </div>
</template>

<script>
import QButton from './QButton.vue'
export default {
  components: { QButton },
  name:'QInput',
  props:{
    value:{
      type:String,
      default:''
    },
    disabled:{
      type:Boolean,
      default:false
    },
    readonly:{
      type:Boolean,
      default:false
    },
    error:{
      type:String,
      default:''
    },
  }
}
</script>

<style lang='scss'>
$height:32px;
$border-color:#999;
$border-color-hover:#666;
$box-shadow-color:rgab(0,0,0,0.5);
$red:#F1453D;
.q-input {
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  display: inline-block;
  &.error {
  > input {
    border:1px solid $red;
    &:hover{
    border-color: $red;
    }
    &:focus{
      outline: none;
      box-shadow: inset 0 1px 3px $red;
    }
    }
  > svg{
    margin: 0 5px;
    }
    .error-message {
    color: $red;
  }
  }
  >input {
    height: 32px;
    border:1px solid $border-color;
    border-radius: 4px;
    padding-left: 8px;
    font-size: inherit;
    &:hover{
    border-color: $border-color-hover;
    }
   
    &[disabled],&[readonly]{
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  // .button {
  // background-color: red;
  //  height: 44px;
  //  position: absolute;
  //  top: 0;
  //  right: 0;
  // }
}
</style>