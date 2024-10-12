import { createStore } from 'tinybase/with-schemas'
import { createLocalPersister } from 'tinybase/persisters/persister-browser/with-schemas'

const isReady = ref(false)
async function untilReady() {
  return new Promise<void>((resolve) => {
    if (isReady.value) {
      resolve()
    } else {
      setTimeout(() => {
        untilReady().then(resolve)
      }, 100)
    }
  })
}
const store = createStore().setValuesSchema({
  colorMode: { type: 'string' },
  layout: { type: 'string' },
})
const persister = createLocalPersister(store, 'userPreferenceStore')
persister.load().then(() => {
  isReady.value = true
})

// ================== 主题颜色 ====================
type ColorModeType = 'light' | 'dark'
const currentColorMode = ref<ColorModeType>('light')
watch(isReady, () => {
  currentColorMode.value = store.getValue('colorMode') as ColorModeType
})
async function setColorMode(value: ColorModeType) {
  await untilReady()
  currentColorMode.value = value
  store.setValue('colorMode', value)
  await persister.save()
}
const svgColor = ref()
watchEffect(() => {
  if (currentColorMode.value === 'light') {
    svgColor.value = '#000'
  } else if (currentColorMode.value === 'dark') {
    svgColor.value = '#fff'
  }
})

// ================== 导出函数 ===================

const api = {
  state: {
    colorMode: readonly(currentColorMode),
    svgColor: readonly(svgColor),
  },
  action: {
    setColorMode,
  },
}

export function useUserPreferenceStore() {
  return api
}
