<script setup lang="ts">
import { LayoutSider as ALayoutSider, Menu as AMenu } from 'ant-design-vue'
import { HomeFilled, SettingFilled } from '@ant-design/icons-vue'

// ==========媒体类型
const appConfigStore = useAppConfigStore()
const mediaName = appConfigStore.state.media
watch(mediaName, () => {
  if (mediaName.value === 'pad') {
    state.collapsed = true
  } else if (mediaName.value === 'desktop') {
    state.collapsed = false
  }
})
const state = reactive({
  collapsed: false,
})
const selectedKeys = ref()
const items = ref([
  {
    key: '-1',
    icon: h(HomeFilled),
    label: '首页',
    title: '首页',
  },
  {
    key: '2',
    icon: h(SettingFilled),
    label: '系统管理',
    title: '系统管理',
  },
])
</script>

<template>
  <a-layout-sider
    v-if="mediaName !== 'phone'"
    class="sider"
    theme="light"
    v-model:collapsed="state.collapsed"
    collapsible
  >
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      :items="items"
      :mode="state.collapsed ? 'vertical' : 'inline'"
      :style="{ border: 0 }"
    ></a-menu>
  </a-layout-sider>
</template>

<style scoped>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
</style>
