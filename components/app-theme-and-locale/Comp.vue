<script setup lang="ts">
import { Switch as ASwitch, Dropdown as ADropdown, Menu as AMenu } from 'ant-design-vue'

const antdConfigStore = useAntdConfigStore()
const appConfigStore = useAppConfigStore()
const theme = ref<'light' | 'dark'>(antdConfigStore.getThemeName())
const locale = ref()
const handleThemeChange = () => {
  antdConfigStore.setTheme(theme.value)
  if (theme.value === 'light') {
    appConfigStore.setSvgColor('#000')
  } else {
    appConfigStore.setSvgColor('#fff')
  }
}
watch(locale, (n) => {
  antdConfigStore.setLocale(n)
})
</script>

<template>
  <div class="theme-lang">
    <a-switch v-model:checked="theme" @change="handleThemeChange" checked-value="dark" un-checked-value="light">
      <template #checkedChildren><IconsSun id="sun" style="width: 14px; height: 22px" /></template>
      <template #unCheckedChildren><IconsMoon style="width: 14px; height: 22px" /></template>
    </a-switch>
    <a-dropdown v-model:value="locale">
      <IconsLocale style="width: 20px; height: 20px; margin-left: 6px" @click.prevent></IconsLocale>
      <template #overlay>
        <a-menu
          v-model:selectedKeys="locale"
          :items="[
            { key: 'zh-CN', label: '简体中文' },
            { key: 'en-US', label: 'English' },
          ]"
        ></a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<style scoped>
.theme-lang {
  position: absolute;
  float: right;
  top: 0.75rem;
  right: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
svg {
  vertical-align: top;
}
</style>
