<script setup lang="ts">
import { Layout as ALayout } from 'ant-design-vue'
</script>

<template>
  <a-layout style="min-height: 100vh">
    <AppSiderComp />
    <a-layout>
      <AppOptionComp></AppOptionComp>
      <AppHeaderComp></AppHeaderComp>
      <AppContentComp></AppContentComp>
    </a-layout>
  </a-layout>
</template>
