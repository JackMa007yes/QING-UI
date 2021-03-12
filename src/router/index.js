import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/home.vue'
import Doc from '../views/doc.vue';
import SwitchDemo from '../components/SwitchDemo.vue'
import ButtonDemo from '../components/buttonDEmo.vue'
import DialogDemo from '../components/dialogDemo.vue'
import TabsDemo from '../components/tabsDemo.vue'
import DocDemo from '../components/Docdemo.vue'



const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path:'',component: Home},
    {path:'/doc',component: Doc,children:[
      {path:'/',component:DocDemo},
      {path:'switch',component:SwitchDemo},
      {path:'button',component:ButtonDemo},
      {path:'dialog',component:DialogDemo},
      {path:'tabs',component:TabsDemo},
    ]}
    
  ]
})

export default router