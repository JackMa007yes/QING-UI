<template>
  <div class="q-tabs">
    <div class="q-tabs-nav" ref="container">
      <div v-for="(title,index) in titles" 
        :key="index" 
        :ref="el => {if(title === selected) selectedItem =el }"
        @click="select(title)"
        :class="{selected:title===selected}" 
        class="q-tabs-nav-item">
        {{title}}
        <div class="q-tabs-nav-indicator" ref="indicator"></div>
      </div>
    </div>
    <div class="q-tabs-content">
      <component  :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script>
import { computed, ref, onMounted, onUpdated } from 'vue';
import QTab from "./QTab.vue";
export default {
  name:'QTabs',
  props:{
    selected:{
      type:String,
      default:''
    }
  },
  setup(props,context){
    const defaults = context.slots.default()
    const selectedItem = ref(null)
    const indicator = ref(null)
    const container = ref(null)
    const x = () => {
      const {width} = selectedItem.value.getBoundingClientRect()
      const {left:left1} = container.value.getBoundingClientRect()
      const {left:left2} = selectedItem.value.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.left = left + 'px'
      indicator.value.style.width = width + 'px'
    }
    onMounted(x)
    onUpdated(x)
    

    defaults.forEach((tag)=>{
      if(tag.type !== QTab){
        throw new Error('tabs子标签必须是tab')
      }
    })
    const current = computed(() => {
      let a = defaults.filter((item) => {
        return item.props.title === props.selected
      })[0]
      return a
    })
   
    defaults.filter((item) => {
      return item.props.title === props.selected
    })[0]
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    const select = (title) => {
      context.emit('update:selected',title)
    }
    return {defaults,titles,current,select,indicator,container,selectedItem}
  }
}
</script>

<style lang='scss'>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.q-tabs {
  &-nav {
    position: relative;
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background-color: $blue;
      bottom: -1px;
      transition: all 0.25s;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>