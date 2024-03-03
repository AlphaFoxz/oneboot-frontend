<script setup lang="ts">
import { ConfigProvider as AConfigProvider, Space as ASpace } from 'ant-design-vue'

const antdConfigStore = useAntdConfigStore()
const theme = antdConfigStore.getThemeState()
const locale = antdConfigStore.getLocaleState()
</script>

<template>
  <a-config-provider :theme="theme" :locale="locale">
    <!-- <a-space direction="vertical" :style="{ width: '100%', margin: '0' }" :size="[0, 48]"> -->
    <NuxtPage />
    <!-- </a-space> -->
  </a-config-provider>
</template>
