import Toast from './QToast.vue'
import { createApp, h } from 'vue'

let toastVM,div

export const showToast = (options) => {

  const {message,autoClose,autoCloseDelay,closeButton,position} = options

  if(toastVM){
    removeToast()
  }
  toastVM = createApp({
    render(){
      return h(Toast, {message,autoClose,autoCloseDelay,closeButton,position})
    }
  })
  div = document.createElement('div')
  document.body.appendChild(div)
  toastVM.mount(div)
}
 
export const removeToast = () => {
  toastVM.unmount(div)
  div.remove()
}

