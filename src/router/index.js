import {createRouter, createWebHashHistory} from 'vue-router'
import Hi from '../components/hi.vue'
import Hello from '../components/hello.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path:'/',component: Hi},
    {path:'/xxx',component: Hello}
  ]
})

export default router