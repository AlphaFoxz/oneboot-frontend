<template>
  <AppOption></AppOption>
  <div class="container">
    <div class="header">
      <AppHeader></AppHeader>
    </div>
    <div class="openedTab"></div>
    <LayoutFlex wrapped class="content">
      <Suspense timeout="0">
        <slot></slot>
        <template #fallback> loading... </template>
      </Suspense>
    </LayoutFlex>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  height: 100%;
  grid-template-rows: 3rem 2rem 1fr;
  grid-template-columns: 1fr;
}
</style>
