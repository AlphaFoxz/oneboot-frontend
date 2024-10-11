<script setup lang="ts">
// const validTypes = ['unwrapped', 'wrapped'] as const
// type ValidType = (typeof validTypes)[number]

defineProps({
  wrapFlex: {
    type: Boolean,
    default: false,
  },
  margin: {
    type: String,
    default: '0.5rem',
  },
})
</script>

<template>
  <template v-if="wrapFlex">
    <div :class="[$style.margin, $style.flex]">
      <slot></slot>
    </div>
  </template>
  <template v-else>
    <slot :class="[$style.margin]"></slot>
  </template>
</template>

<style scoped module lang="scss">
.margin {
  margin: v-bind(margin);
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
