<script setup lang="ts">
import '@logicflow/core/lib/style/index.css'
import LogicFlow from '@logicflow/core'
import { Control, Menu, DndPanel } from '@logicflow/extension'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})
const containerRef = ref<HTMLDivElement>()
const lf = shallowRef<LogicFlow>()
onMounted(() => {
  lf.value = new LogicFlow({ container: containerRef.value!, grid: true, plugins: [Control, DndPanel, Menu] })
  lf.value.render(props.data)
})
</script>

<template>
  <div class="contaner" ref="containerRef"></div>
</template>

<style lang="scss" scoped>
.contaner {
  width: 100%;
  height: 100%;
}
</style>
