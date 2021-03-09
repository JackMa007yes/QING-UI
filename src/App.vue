<template>
  <div>
    导航栏|
    <router-link to="/">hi</router-link> |
    <router-link to="xxx">hello</router-link>
  </div>
  <hr/>
  <router-view/>
</template>

<script>
// import Hi from './components/hi.vue'

export default {
  name: 'App',
  components: {
  }
}
</script>
