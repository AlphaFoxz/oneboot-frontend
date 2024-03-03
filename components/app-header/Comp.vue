<script setup lang="ts">
import {
  LayoutHeader as ALayoutHeader,
  Space as ASpace,
  Flex as AFlex,
  Tabs as ATabs,
  TabPane as ATabPane,
  Breadcrumb as ABreadcrumb,
  Button as AButton,
} from 'ant-design-vue'
import { SettingOutlined } from '@ant-design/icons-vue'

const antdConfigStore = useAntdConfigStore()
const bgColor = ref()
setColor(antdConfigStore.getThemeName())
watch(antdConfigStore.getThemeState(), () => {
  setColor(antdConfigStore.getThemeName())
})
function setColor(themeName: string) {
  if (themeName === 'dark') {
    bgColor.value = '#000'
  } else {
    bgColor.value = '#fff'
  }
}

const appConfigStore = useAppConfigStore()
function handleOpenSettings() {
  appConfigStore.setPanelOpened(true)
}

const activeKey = ref()
</script>

<template>
  <a-layout-header class="header" :style="{ background: bgColor }">
    <div class="header-line">
      <a-breadcrumb style="height: 100%"></a-breadcrumb>
      <a-button @click="handleOpenSettings" :icon="h(SettingOutlined)" style="position: absolute; top: 0; right: 0px" />
    </div>
    <div class="header-line">
      <a-tabs v-model:activeKey="activeKey" class="tabs" size="small" type="editable-card" hide-add>
        <a-tab-pane key="1" tab="首页" :closable="true"></a-tab-pane>
      </a-tabs>
    </div>
  </a-layout-header>
</template>

<style scoped>
.header {
  padding: 0;
  position: relative;
}
.header-line {
  position: relative;
  height: 50%;
  overflow: hidden;
}
.tabs {
  height: 100%;
  position: absolute;
  bottom: 0;
}
</style>
