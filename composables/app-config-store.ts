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
const persister = createLocalPersister(store, 'appConfigStore')
persister.load().then(() => {
  isReady.value = true
})

// ================== 设置：抽屉视图打开 ====================
const optionDrawerOpened = ref(false)
function setOptionDrawerOpened(value: boolean) {
  optionDrawerOpened.value = value
}

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

// ================== 布局 ====================
type LayoutType = 'vertical'
const layout = ref<LayoutType>('vertical')
function setLayout(v: LayoutType) {
  layout.value = v
  document.body.setAttribute('layout', v)
}
setLayout('vertical')

// ================== 媒体类型 ====================
type MediaType = 'desktop' | 'pad' | 'phone'
const media = ref<MediaType>('desktop')
function refreshMedia(clientWidth = document.body.clientWidth) {
  let t: MediaType
  if (clientWidth <= 760) {
    t = 'phone'
  } else if (clientWidth <= 990) {
    t = 'pad'
  } else {
    t = 'desktop'
  }
  if (media.value !== t) {
    console.debug('更新media', t)
    media.value = t
  }
}
const throttledRefreshMedia = FnUtil.throttle(refreshMedia, 5)
document.body.onresize = () => {
  throttledRefreshMedia()
}
refreshMedia()

// ================== 导出函数 ===================

const api = {
  state: {
    colorMode: readonly(currentColorMode),
    layout: readonly(layout),
    optionDrawerOpened: readonly(optionDrawerOpened),
    media: readonly(media),
    svgColor: readonly(svgColor),
  },
  action: {
    setColorMode,
    setOptionDrawerOpened,
    setLayout,
  },
}

export function useAppConfigStore() {
  return api
}
