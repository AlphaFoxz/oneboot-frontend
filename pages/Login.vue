<script setup lang="ts">
import { Layout as ALayout } from 'ant-design-vue'
</script>

<template>
  <div class="login-root">
    <AppThemeAndLocale></AppThemeAndLocale>
    <div class="login-container">
      <div class="image"><IconsLoginBanner /></div>
      <LoginBox class="login-box"></LoginBox>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-root {
  user-select: none;
}
.image {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @include respondTo('pad') {
    display: none;
  }
  @include respondTo('phone') {
    display: none;
  }
}
.login-container {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 2rem;

  .login-box {
    @include respondTo('pc') {
      margin-left: 50px;
      margin-right: 200px;
    }
  }
}
</style>
