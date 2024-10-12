<script setup lang="ts">
import ToggleSwitch from 'primevue/toggleswitch'
import Popover from 'primevue/popover'
import Button from 'primevue/button'

// ==================== 主题切换 =====================
const userPreferenceStore = useUserPreferenceStore()
const isLightTheme = ref(userPreferenceStore.state.colorMode.value === 'light')
const handleThemeChange = () => {
  userPreferenceStore.action.setColorMode(isLightTheme.value ? 'light' : 'dark')
}

// ==================== 语言切换 =====================
const locale = ref<string>()
const localePopoverRef = ref()
const localeOptions = ref([
  { label: '简体中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
])
function handleToggleLocalePopover(event: MouseEvent) {
  localePopoverRef.value.toggle(event)
}
function handleSelectLocale(s: string) {
  localePopoverRef.value.toggle()
  locale.value = s
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
    <Button text @click="handleToggleLocalePopover">
      <IconsLocale style="width: 20px; height: 20px; margin-left: 6px" aria-hidden="false"></IconsLocale>
    </Button>
    <Popover ref="localePopoverRef">
      <LayoutSpace wrap-grid margin="0" v-for="(item, index) in localeOptions" :key="index">
        <Button text @click="handleSelectLocale" :label="item.label"></Button>
      </LayoutSpace>
    </Popover>
  </div>
</template>

<style scoped lang="scss">
.theme-lang {
  position: absolute;
  float: right;
  top: 0.75rem;
  right: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
