<script setup lang="ts">
const antdConfigStore = useAntdConfigStore()

const colorMode = useColorMode()
colorMode.preference = antdConfigStore.action.getThemeName()

const appConfigStore = useAppConfigStore()
watch(appConfigStore.state.currentColorMode, (v) => {
  colorMode.value = v
})
</script>

<template>
  <NuxtPage />
</template>

<style lang="scss"></style>
