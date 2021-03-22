<demo> </demo>
<script>
import {openDialog} from "../../lib/openDialog"

export default {
  setup(){
    const showDialog = () => {
      openDialog({
        title:'警告',
        content:'文字内容',
        ok(){
          console.log(111)
        },
        cancel(){
          console.log(222)
        },
        closeOnclickOverlay:false
      })
    }
    return {showDialog}
  }
}
</script>