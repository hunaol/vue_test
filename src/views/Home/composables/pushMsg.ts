import type { Msg } from '@/models/msg'
import { ref } from 'vue'

const msg = ref('')
const ListMsg = ref<Msg[]>([])

const pushMsg = () => {
  ListMsg.value.push({
    id: ListMsg.value.length + 1,
    msg: msg.value,
    create_time: new Date().toLocaleString(),
    update_time: new Date().toLocaleString(),
    is_del: 0
  })
  msg.value = ''
}
export default pushMsg
export { msg, ListMsg }