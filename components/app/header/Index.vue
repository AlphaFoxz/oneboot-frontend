<script setup lang="ts">
import Popover from 'primevue/popover'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import MegaMenu from 'primevue/megamenu'
import { menuItems } from './define'

// ======================= 系统设置面板 ======================
const layoutStore = useLayoutStore()
const items = ref(menuItems)
function handleOpenSettings() {
  layoutStore.action.setOptionDrawerOpened(true)
}

// ======================= 用户操作下拉选项 ======================
const router = useRouter()
const userOprationItems = ref([
  {
    label: '账户设置',
    icon: 'pi pi-user-plus',
    command: () => router.push('/admin/welcome'),
  },
  {
    label: '退出系统',
    icon: 'pi pi-power-off',
    command: () => router.push('/login'),
  },
])
const userPopoverRef = ref()
function handleOpenUserPopover(event: MouseEvent) {
  userPopoverRef.value.toggle(event)
}
</script>

<template>
  <MegaMenu id="menu" :model="items" style="height: 100%">
    <template #start></template>
    <template #end>
      <Button text @click="handleOpenUserPopover">
        <Avatar image="/avatar.png" />
      </Button>
      <Button text severity="secondary" @click="handleOpenSettings">
        <i class="pi pi-cog"></i>
      </Button>
    </template>
  </MegaMenu>
  <Popover ref="userPopoverRef">
    <LayoutSpace wrap-grid v-for="(item, index) in userOprationItems" :key="index" margin="0">
      <Button :icon="item.icon" :label="item.label" text @click="item.command"></Button>
    </LayoutSpace>
  </Popover>
</template>

<style></style>
