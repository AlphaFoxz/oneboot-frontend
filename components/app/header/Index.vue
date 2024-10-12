<script setup lang="ts">
import { SettingOutlined } from '@ant-design/icons-vue'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import MegaMenu from 'primevue/megamenu'
import { menuItems } from './define'

const layoutStore = useLayoutStore()
const items = ref(menuItems)
function handleOpenSettings() {
  layoutStore.action.setOptionDrawerOpened(true)
}
</script>

<template>
  <MegaMenu id="menu" :model="items" style="height: 100%">
    <template #start></template>
    <template #end>
      <Button text>
        <Avatar image="/avatar.png" />
      </Button>
      <Button text severity="secondary" @click="handleOpenSettings">
        <SettingOutlined></SettingOutlined>
      </Button>
    </template>
  </MegaMenu>
</template>

<style></style>
