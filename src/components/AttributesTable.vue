<template>
  <div class="attributes-table">
    <div class="title">{{title}}</div>
    <table>
      <tr>
        <th>属性</th>
        <th>描述</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr v-for="(item,key) in tableData" :key='key'>
        <td class="prop-name">{{item.prop}}</td>
        <td class='desc'>{{item.desc}}</td>
        <td>{{item.type}}</td>
        <td>{{item.options}}</td>
        <td>{{item.default}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name:'AttributesTable',
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
  .attributes-table {
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
        text-align: left;
      }
      th,td{
      border:0px;
      font-size: 12px;
      }
    }
  }
</style>