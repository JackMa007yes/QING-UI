import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import router from './router'


//路由切换时会执行
router.afterEach

createApp(App).use(router).mount('#app')
