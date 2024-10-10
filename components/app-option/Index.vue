<script setup lang="ts">
import { Space as ASpace } from 'ant-design-vue'
import Drawer from 'primevue/drawer'
import SelectButton from 'primevue/selectbutton'
import Divider from 'primevue/divider'

const appConfigStore = useAppConfigStore()
const opened = ref(appConfigStore.state.optionDrawerOpened.value)
const themeOptions = ref([
  { label: '浅色', value: 'light' },
  { label: '深色', value: 'dark' },
])
watch(appConfigStore.state.optionDrawerOpened, (n) => {
  opened.value = n
})
function handleClose() {
  appConfigStore.action.setOptionDrawerOpened(false)
}

const antdConfigStore = useAntdConfigStore()
const theme = ref(antdConfigStore.action.getThemeName())
watch(antdConfigStore.state.currentTheme, () => {
  theme.value = antdConfigStore.action.getThemeName()
})
function handleChangeTheme() {
  antdConfigStore.action.setTheme(theme.value)
}
</script>

<template>
  <Drawer position="right" v-model:visible="opened" @hide="handleClose">
    项目配置
    <Divider layout="horizontal">主题</Divider>
    <SelectButton
      v-model="theme"
      :options="themeOptions"
      option-label="label"
      option-value="value"
      @change="handleChangeTheme"
    >
      <template #option="slotProps">
        <a-space v-if="slotProps.option.value === 'light'"><IconsSun class="icon" />浅色</a-space>
        <a-space v-if="slotProps.option.value === 'dark'"><IconsSun class="icon" />深色</a-space>
      </template>
    </SelectButton>

    <Divider layout="horizontal">界面显示</Divider>
  </Drawer>
</template>

<style scoped lang="scss">
.icon {
  width: 100%;
  height: 18px;
  vertical-align: sub;
}
</style>
