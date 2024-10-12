<template>
  <AppOption></AppOption>
  <div class="container">
    <div class="header">
      <AppHeader></AppHeader>
    </div>
    <div class="openedTab"></div>
    <LayoutSpace wrapFlex class="content" margin="0">
      <slot></slot>
    </LayoutSpace>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  height: 100%;
  grid-template-rows: 3rem 2rem 1fr;
}
</style>
