<script setup lang="ts">
defineProps({
  wrapFlex: {
    type: Boolean,
    default: false,
  },
  wrapGrid: {
    type: Boolean,
    default: false,
  },
  margin: {
    type: String,
    default: '0.5rem',
  },
  padding: {
    type: String,
    default: '0',
  },
})
</script>

<template>
  <template v-if="wrapFlex">
    <div :class="[$style.margin, $style.padding, $style.flex]">
      <slot></slot>
    </div>
  </template>
  <template v-else-if="wrapGrid">
    <div :class="[$style.margin, $style.padding, $style.grid]">
      <slot></slot>
    </div>
  </template>
  <template v-else>
    <slot :class="[$style.margin, $style.padding]"></slot>
  </template>
</template>

<style scoped module lang="scss">
.margin {
  margin: v-bind(margin);
}
.padding {
  padding: v-bind(padding);
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid {
  display: grid;
  grid-auto-columns: auto;
  grid-auto-rows: auto;
}
</style>
