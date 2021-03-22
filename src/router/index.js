import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/home.vue'
import Doc from '../views/doc.vue';
import SwitchDemo from '../components/switchdemo/SwitchDemo.vue'
import ButtonDemo from '../components/buttondemo/ButtonDemo.vue'
import DialogDemo from '../components/dialogdemo/DialogDemo.vue'
import TabsDemo from '../components/tabsdemo/TabsDemo.vue'
import InputDemo from '../components/inputdemo/InputDemo.vue'
import ToastDemo from '../components/toastdemo/ToastDemo.vue'
import CollapseDemo from '../components/callapsedemo/CollapseDemo.vue'


// import DocDemo from '../components/DocDemo.vue'
import Introduce from '../views/Introduce.vue'
import GetStart from '../views/getStart.vue'
import Install from '../views/Install.vue'







const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path:'',component: Home},
    {path:'/doc',component: Doc,children:[
      {path:'',redirect:'/doc/intro'},
      {path:'intro',component:Introduce},
      {path:'getstart',component:GetStart},
      {path:'install',component:Install},
      {path:'switch',component:SwitchDemo},
      {path:'button',component:ButtonDemo},
      {path:'dialog',component:DialogDemo},
      {path:'tabs',component:TabsDemo},
      {path:'input',component:InputDemo},
      {path:'toast',component:ToastDemo},
      {path:'collapse',component:CollapseDemo},
    ]}
    
  ]
})

export default router