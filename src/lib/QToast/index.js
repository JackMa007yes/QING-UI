import Toast from './QToast.vue'
import { createApp, h, inject, provide, reactive } from 'vue'

const QToast = {} 

QToast.install = (app) => {
  const toastVM = createApp({
    render(){
      return h(Toast)
    }
  })
  const div = document.createElement('div')
  document.body.appendChild(div)
  toastVM.mount(div)
  app.config.globalProperties.$toast = toastVM
}

export default QToast
