<script setup lang="ts">
import { Layout as ALayout } from 'ant-design-vue'
</script>

<template>
  <a-layout>
    <div class="login-root">
      <AppThemeAndLocaleComp></AppThemeAndLocaleComp>
      <div class="login-container">
        <div class="image"><IconsLoginBanner /></div>
        <LoginBoxComp></LoginBoxComp>
      </div>
    </div>
  </a-layout>
</template>

<style>
.login-root {
  user-select: none;
}
.image {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.login-container {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 18rem;
  padding: 0 2rem;
}
</style>
