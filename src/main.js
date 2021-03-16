import { createApp } from 'vue'
import './lib/q.scss'
import './index.scss'
import App from './App.vue'
import router from './router'
import 'github-markdown-css'
import QToast from './lib/QToast'


//路由切换时会执行
// router.afterEach

createApp(App).use(router).use(QToast).mount('#app')
