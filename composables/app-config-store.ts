type ColorModeType = 'light' | 'dark'

const optionDrawerOpened = ref(false)
const currentColorMode = ref<ColorModeType>('light')

const svgColor = ref()
const SVG_COLOR_KEY = 'app-svg-color'
function setSvgColor(value: string) {
  svgColor.value = value
  localStorage.setItem(SVG_COLOR_KEY, value)
}
setSvgColor(localStorage.getItem(SVG_COLOR_KEY) || '#000')

type LayoutType = 'vertical'
const layout = ref<LayoutType>('vertical')
function setLayout(v: LayoutType) {
  layout.value = v
  document.body.setAttribute('layout', v)
}
setLayout('vertical')

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
document.body.onresize = () => {
  refreshMedia()
}
refreshMedia()

export function useAppConfigStore() {
  return {
    state: {
      currentColorMode,
      optionDrawerOpened,
      media,
      svgColor,
    },
    action: {
      setColorMode(value: ColorModeType) {
        currentColorMode.value = value
      },
      setOptionDrawerOpened(value: boolean) {
        optionDrawerOpened.value = value
      },
      setSvgColor,
      setLayout,
    },
  }
}
