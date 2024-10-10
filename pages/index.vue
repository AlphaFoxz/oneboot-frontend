<script setup lang="ts">
import { Layout as ALayout } from 'ant-design-vue'
</script>

<template>
  <a-layout style="min-height: 100vh">
    <AppSider />
    <a-layout>
      <AppOption></AppOption>
      <AppHeader></AppHeader>
      <AppContent></AppContent>
    </a-layout>
  </a-layout>
</template>
