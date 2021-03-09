import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/home.vue'
import Doc from '../views/doc.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path:'/',component: Home},
    {path:'/doc',component: Doc}
  ]
})

export default router