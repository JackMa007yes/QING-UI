<template>
  <div class="q-collapes-item">
    <div class="q-collapes-item-title" @click="changeActiveNames(name)">{{title}}</div>
    <div class="q-collapes-item-content" v-show="isActive">
      <slot/>
    </div>
  </div>
</template>

<script>
import { computed, inject} from 'vue'
export default {
  name:'QCollapseItem',
  props:{
    title:{
      type:String,
      required: true
    },
    name:{
      type:[Number,String],
      required: true
    }
  },
  setup(props,context){
    const activeNames = inject('activeNames')
    const changeActiveNames = inject('changeActiveNames')
    const toggle = () => {
      context.emit('newActiveItem',props.name)
    }
    const isActive = computed(()=>{
      return activeNames.value.indexOf(props.name*1) >= 0
    })
    return {open,toggle,isActive,changeActiveNames}
  }
}
</script>

<style lang='scss'>
  $grey:#ddd;
  @keyframes open {
    0%{opacity: 0;}
    100%{opacity: 1;}
  }
  .q-collapes-item {
    // border: 1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    margin-bottom: -1px;
    border-bottom: 1px solid $grey;
    margin: 0 8px;
    padding: 8px 0;
    // display: flex;
    // justify-content: center;
    // flex-direction: column;
    &:first-child{
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    &:last-child{
    border-bottom: none;

    }
    &-title {
      display: flex;
      min-height: 32px;
      align-items: center;
      padding: 0 8px;
      // background-color: $grey;
    }
    &-content {
      animation: open 1s ;
      display: flex;
      min-height: 32px;
      align-items: center;
      padding: 0 8px;
      font-size: 14px;
      line-height: 1.15;
    }
  }
</style>