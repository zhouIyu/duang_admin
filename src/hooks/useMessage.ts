import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { messageType } from 'element-plus/es/components/message/src/message'

export function useMessage (message: string, type: messageType = 'info') {
  ElMessage({
    message,
    type,
    duration: 1500
  })
}
