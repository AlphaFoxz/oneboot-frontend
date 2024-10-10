<script setup lang="ts">
import { Menu as AMenu } from 'ant-design-vue'
import ToggleSwitch from 'primevue/toggleswitch'
import Popover from 'primevue/popover'
import Listbox from 'primevue/listbox'

const opRef = ref()
const antdConfigStore = useAntdConfigStore()
const appConfigStore = useAppConfigStore()
const isLightTheme = ref(appConfigStore.state.currentColorMode.value === 'light')
const locale = ref()
const handleThemeChange = () => {
  appConfigStore.action.setColorMode(isLightTheme.value ? 'light' : 'dark')
  if (isLightTheme.value) {
    appConfigStore.action.setSvgColor('#000')
  } else {
    appConfigStore.action.setSvgColor('#fff')
  }
}
watch(locale, (n) => {
  antdConfigStore.action.setLocale(n)
  // opRef.value.hide()
})
function toggle() {
  opRef.value.toggle(event)
}
</script>

<template>
  <div class="theme-lang">
    <ToggleSwitch v-model="isLightTheme" @change="handleThemeChange">
      <template #handle="{ checked }">
        <IconsSun v-if="checked" style="width: 14px; height: 22px" />
        <IconsMoon v-else style="width: 14px; height: 22px" />
      </template>
    </ToggleSwitch>
    <Button text @click="toggle">
      <IconsLocale style="width: 20px; height: 20px; margin-left: 6px"></IconsLocale>
    </Button>
    <Popover ref="opRef" style="background-color: rgba(0, 0, 0, 0)">
      <Listbox
        v-model="locale"
        :options="[
          { label: '简体中文', value: 'zh-CN' },
          { label: 'English', value: 'en-US' },
        ]"
        optionLabel="label"
        optionValue="value"
      ></Listbox>
    </Popover>
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
