<script setup lang="ts">
import { Drawer as ADrawer } from 'ant-design-vue'

const appConfigStore = useAppConfigStore()
const opened = ref(appConfigStore.getPanelOpenedState().value)
watch(appConfigStore.getPanelOpenedState(), (n) => {
  opened.value = n
})
function handleClose() {
  appConfigStore.setPanelOpened(false)
}
</script>

<template>
  <a-drawer v-model:open="opened" @close="handleClose"> </a-drawer>
</template>
