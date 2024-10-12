<script setup lang="ts">
import Drawer from 'primevue/drawer'
import SelectButton from 'primevue/selectbutton'
import Divider from 'primevue/divider'

// ======================= 开关面板 =======================
const layoutStore = useLayoutStore()
const opened = ref(layoutStore.state.optionDrawerOpened.value)
watch(layoutStore.state.optionDrawerOpened, (n) => {
  opened.value = n
})
function handleHide() {
  layoutStore.action.setOptionDrawerOpened(false)
}
const router = useRouter()
function handleExit() {
  // FIXME: 退出登录
  layoutStore.action.setOptionDrawerOpened(false)
  router.push('/login')
}

// ======================= 主题色 =======================
const userPreferenceStore = useUserPreferenceStore()
const themeOptions = ref([
  { label: '浅色', value: 'light' },
  { label: '深色', value: 'dark' },
])
const theme = ref()
watchEffect(() => {
  theme.value = userPreferenceStore.state.colorMode.value
})
function handleChangeTheme() {
  userPreferenceStore.action.setColorMode(theme.value)
}
</script>

<template>
  <Drawer position="right" v-model:visible="opened" @hide="handleHide">
    <h2>系统配置</h2>
    <Divider layout="horizontal">主题</Divider>
    <LayoutSpace wrap-flex margin="0">
      <SelectButton
        v-model="theme"
        :options="themeOptions"
        option-label="label"
        option-value="value"
        @change="handleChangeTheme"
        :allow-empty="false"
      >
        <template #option="slotProps">
          <LayoutSpace wrap-flex margin="0" v-if="slotProps.option.value === 'light'">
            <IconsSun class="icon" />
            <label>浅色</label>
          </LayoutSpace>
          <!-- <a-space v-if="slotProps.option.value === 'light'"><IconsSun class="icon" />浅色</a-space> -->
          <LayoutSpace wrap-flex margin="0" v-if="slotProps.option.value === 'dark'">
            <IconsMoon class="icon" />
            <label>深色</label>
          </LayoutSpace>
        </template>
      </SelectButton>
    </LayoutSpace>
    <Divider layout="horizontal">界面显示</Divider>
    <template #footer>
      <LayoutSpace wrap-flex margin="0">
        <Button label="退出" @click="handleExit" class="exit-btn"></Button>
      </LayoutSpace>
    </template>
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
.exit-btn {
  width: 100%;
}
</style>
