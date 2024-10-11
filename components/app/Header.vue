<script setup lang="ts">
import {
  LayoutHeader as ALayoutHeader,
  Tabs as ATabs,
  TabPane as ATabPane,
  Breadcrumb as ABreadcrumb,
} from 'ant-design-vue'
import { SettingOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import Button from 'primevue/button'

const appConfigStore = useAppConfigStore()

const bgColor = ref()
watchEffect(() => {
  setColor(appConfigStore.state.colorMode.value)
})
function setColor(themeName: 'light' | 'dark') {
  if (themeName === 'dark') {
    bgColor.value = '#000'
  } else if (themeName === 'light') {
    bgColor.value = '#fff'
  } else {
    isNever(themeName)
  }
}

const mediaName = appConfigStore.state.media
function handleOpenSettings() {
  appConfigStore.action.setOptionDrawerOpened(true)
}

const activeKey = ref()
</script>

<template>
  <a-layout-header class="header" :style="{ background: bgColor }">
    <div class="header-line">
      <LayoutSpace wrap-flex margin="0">
        <Button v-if="mediaName === 'phone'" @click="handleOpenSettings" style="position: absolute; top: 0; left: 0px">
          <MenuUnfoldOutlined></MenuUnfoldOutlined>
        </Button>
        <a-breadcrumb style="height: 100%"></a-breadcrumb>
        <Button text severity="secondary" @click="handleOpenSettings" style="position: absolute; top: 0; right: 0px">
          <SettingOutlined></SettingOutlined>
        </Button>
      </LayoutSpace>
    </div>
    <div class="header-line">
      <a-tabs v-model:activeKey="activeKey" class="tabs" size="small" type="editable-card" hide-add>
        <a-tab-pane key="1" tab="首页" :closable="false"></a-tab-pane>
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
