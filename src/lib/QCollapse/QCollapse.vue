<template>
  <div class="q-collapse"  >
    <slot/>
  </div>
</template>

<script>
import {  provide , ref, watch } from 'vue'
export default {
  name:'QCollapse',
  props:{
    single:{
      type:Boolean,
      default:false
    },
    selected:{
      type:Array
    },
  },
  setup(props,context){
    // const activeNames = ref([]) //name未完成
    const activeNames = ref([])
    if(props.selected){activeNames.value.push(...props.selected)}
    const changeActiveNames = (name) =>{
      const index = activeNames.value.indexOf(name)
      if(props.single){
        if(index>=0){
          activeNames.value.splice(index,1)
        }else{
          activeNames.value = [name]
        }
      }else{
        if(index<0){
          activeNames.value.push(name)
        }else{
          activeNames.value.splice(index,1)
        }
      }
    }
    watch(
      activeNames.value,
      (val,preval)=>{
        context.emit('update:selected',val)
      }
    )
    provide('activeNames',activeNames)
    provide('changeActiveNames',changeActiveNames)
    return {activeNames}
  }
}
</script>

<style lang='scss'>
  $grey:#ddd;
  .q-collapse {
    border: 1px solid $grey;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba($grey, $alpha:0.5);
  }

</style>