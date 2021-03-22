<template>
  <div class="events-table">
    <div class="title">{{title}}</div>
    <table>
      <tr>
        <th>事件名</th>
        <th>描述</th>
      </tr>
      <tr v-for="(item,key) in tableData" :key='key'>
        <td class="prop-name">{{item.eventName}}</td>
        <td class='desc'>{{item.desc}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name:'Event',
  props:{
    title:{
      type:String,
      default:''
    },
    tableData:{
      type:Array,
      default(){
        return []
      }
    }
  },
}
</script>

<style lang='scss' scoped>
  .events-table {
    margin-top: 20px;
    // border: 1px solid red;
    .title {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 5px;
      padding-left: 10px;
      color: rgb(121,82,179);
    }
    table {
      .prop-name {
        font-weight: 600;
        font-size: 14px;
      }
      tr:last-of-type {
      border-bottom: 1px solid rgb(198,203,209);
      }
      .desc {
        min-width: 100px;
      }
      tr>th {
        font-size: 14px;
      }
      th,td{
      border:0px;
      font-size: 12px;
      }
    }
  }
</style>