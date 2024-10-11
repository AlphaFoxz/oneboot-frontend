<script setup lang="ts">
import Toast from 'primevue/toast'

const appConfigStore = useAppConfigStore()

const colorMode = useColorMode()
colorMode.preference = appConfigStore.state.colorMode.value

watch(appConfigStore.state.colorMode, (v) => {
  colorMode.value = v
})
</script>

<template>
  <Toast position="top-center" />
  <NuxtPage />
</template>

<style scoped lang="scss"></style>
