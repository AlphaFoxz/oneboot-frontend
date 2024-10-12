<script setup lang="ts">
import Toast from 'primevue/toast'

const layoutStore = useLayoutStore()
const userPreferenceStore = useUserPreferenceStore()

const colorMode = useColorMode()
colorMode.preference = userPreferenceStore.state.colorMode.value
watch(userPreferenceStore.state.colorMode, (v) => {
  colorMode.value = v
})

let layoutName = layoutStore.state.layout
watch(layoutName, (v) => {
  console.debug('layoutName updated', v)
})
</script>

<template>
  <NuxtLayout :name="layoutName">
    <Toast position="top-center" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped lang="scss"></style>
