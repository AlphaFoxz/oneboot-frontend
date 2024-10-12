import type { LayoutKey } from '#build/types/layouts'

// ================== 布局 ====================
const layout = ref<LayoutKey>('default')
function setLayout(v: LayoutKey) {
  layout.value = v
  document.body.setAttribute('layout', v)
}

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

// ================== 设置：抽屉视图打开 ====================
const optionDrawerOpened = ref(false)
function setOptionDrawerOpened(value: boolean) {
  optionDrawerOpened.value = value
}

// ================== 导出api ====================
const api = {
  state: {
    layout: readonly(layout),
    media: readonly(media),
    optionDrawerOpened: readonly(optionDrawerOpened),
  },
  action: {
    setLayout,
    setOptionDrawerOpened,
  },
}

export function useLayoutStore() {
  return api
}
