import '@logicflow/core/lib/style/index.css'
import LogicFlow from '@logicflow/core'
import { Control, Menu, DndPanel } from '@logicflow/extension'

export default defineNuxtPlugin(() => {
  // LogicFlow.use(MiniMap)
  LogicFlow.use(Control) // 控制面板
  LogicFlow.use(Menu) // 右键菜单
  LogicFlow.use(DndPanel) // 拖拽面板
})
