<script setup lang="ts">
import LogicFlow from '@logicflow/core'
import '@logicflow/core/lib/style/index.css'

const data = ref({
  // 节点
  nodes: [],
  // 边
  edges: [],
})
</script>

<template>
  <div>
    <LogicFlow :data="data"></LogicFlow>
  </div>
</template>

<style lang="scss" scoped></style>
