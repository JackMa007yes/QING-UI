import { createApp, h } from 'vue'
import QDialog from './QDialog.vue'

export const openDialog = (options) => {
  const {title,ok,cancel,content,closeOnclickOverlay} = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = () => {
    app.unmount(div)
    div.remove()
  }
  const app = createApp({
    render(){
      return h(
        QDialog,
        {
          visible: true,
          'onUpdate:visible':(newVisible) => {
            if(newVisible === false){
              close()
            }
          },
          title,
          ok,
          cancel,
          closeOnclickOverlay
        },
          content
      )
    }
  })

  app.mount(div)
}
