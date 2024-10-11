<script setup lang="ts">
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

const theme = ref()
watchEffect(() => {
  theme.value = appConfigStore.state.colorMode.value
})
function handleChangeTheme() {
  appConfigStore.action.setColorMode(theme.value)
}
</script>

<template>
  <Drawer position="right" v-model:visible="opened" @hide="handleClose">
    <h2>项目配置</h2>
    <Divider layout="horizontal">主题</Divider>
    <SelectButton
      v-model="theme"
      :options="themeOptions"
      option-label="label"
      option-value="value"
      @change="handleChangeTheme"
    >
      <template #option="slotProps">
        <LayoutSpace wrap-flex margin="0" style v-if="slotProps.option.value === 'light'">
          <IconsSun class="icon" />
          <label>浅色</label>
        </LayoutSpace>
        <!-- <a-space v-if="slotProps.option.value === 'light'"><IconsSun class="icon" />浅色</a-space> -->
        <LayoutSpace wrap-flex margin="0" v-if="slotProps.option.value === 'dark'">
          <IconsSun class="icon" />
          <label>深色</label>
        </LayoutSpace>
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
label {
  text-wrap: nowrap;
}
</style>
