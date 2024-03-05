<script setup lang="ts">
import {
  Drawer as ADrawer,
  Space as ASpace,
  Flex as AFlex,
  Typography as ATypography,
  Divider as ADivider,
  RadioGroup as ARadioGroup,
  RadioButton as ARadioButton,
} from 'ant-design-vue'

const appConfigStore = useAppConfigStore()
const opened = ref(appConfigStore.getPanelOpenedState().value)
watch(appConfigStore.getPanelOpenedState(), (n) => {
  opened.value = n
})
function handleClose() {
  appConfigStore.setPanelOpened(false)
}

const antdConfigStore = useAntdConfigStore()
const theme = ref(antdConfigStore.getThemeName())
watch(antdConfigStore.getThemeState(), () => {
  theme.value = antdConfigStore.getThemeName()
})
function handleChangeTheme() {
  antdConfigStore.setTheme(theme.value)
}
</script>

<template>
  <a-drawer v-model:open="opened" @close="handleClose">
    <a-typography :level="1">项目配置</a-typography>
    <a-divider>主题</a-divider>
    <a-radio-group v-model:value="theme" @change="handleChangeTheme">
      <a-radio-button value="light"
        ><a-space><IconsSun class="icon" />浅色</a-space></a-radio-button
      >
      <a-radio-button value="dark"
        ><a-space><IconsMoon class="icon" />深色</a-space></a-radio-button
      >
    </a-radio-group>
    <a-divider>界面显示</a-divider>
  </a-drawer>
</template>

<style scoped lang="scss">
.icon {
  width: 100%;
  height: 18px;
  vertical-align: sub;
}
</style>
