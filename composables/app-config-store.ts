const panelOpened = ref(false)
function setPanelOpened(value: boolean) {
  panelOpened.value = value
}

const svgColor = ref()
const SVG_COLOR_KEY = 'app-svg-color'
setSvgColor(localStorage.getItem(SVG_COLOR_KEY) || '#000')
function setSvgColor(value: string) {
  svgColor.value = value
  localStorage.setItem(SVG_COLOR_KEY, value)
}

export const useAppConfigStore = () => {
  return {
    getPanelOpenedState: () => panelOpened,
    setPanelOpened,
    getSvgColorState: () => svgColor,
    setSvgColor,
  }
}
