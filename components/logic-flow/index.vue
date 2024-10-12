<script setup lang="ts">
import LogicFlow from '@logicflow/core'
import { Menu } from '@logicflow/extension'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})
const containerRef = ref<HTMLDivElement>()
const lf = shallowRef<LogicFlow>()
onMounted(() => {
  lf.value = new LogicFlow({ container: containerRef.value!, grid: true, plugins: [Menu], adjustEdgeStartAndEnd: true })
  lf.value.render(props.data)
  // lf.value.graphModel
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
