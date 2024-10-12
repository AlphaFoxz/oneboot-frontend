import { createStore } from 'tinybase/with-schemas'
import { createLocalPersister } from 'tinybase/persisters/persister-browser/with-schemas'

const store = createStore().setValuesSchema({
  colorMode: { type: 'string' },
  layout: { type: 'string' },
})
const persister = shallowRef(createLocalPersister(store, 'userPreferenceStore'))
persister.value.load().then((p) => {
  p.startAutoSave()
  currentColorMode.value = (store.getValue('colorMode') as ColorModeType) || 'light'
})

// ================== 主题颜色 ====================
type ColorModeType = 'light' | 'dark'
const currentColorMode = ref<ColorModeType>('light')
async function setColorMode(value: ColorModeType) {
  // await untilReady()
  currentColorMode.value = value
  store.setValue('colorMode', value)
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
