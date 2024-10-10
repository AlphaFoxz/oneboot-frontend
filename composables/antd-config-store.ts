import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { theme } from 'ant-design-vue'

const appConfigStore = useAppConfigStore()
// 主题
type ThemeType = 'light' | 'dark'
const THEME_KEY = 'antd-theme'
const currentTheme = ref()
setTheme(getThemeName())
const currentLocale = ref(zhCN)
function getThemeName(): ThemeType {
  return (localStorage.getItem(THEME_KEY) as ThemeType) || 'dark'
}
function setTheme(value: ThemeType) {
  switch (value) {
    case 'dark':
      currentTheme.value = {
        algorithm: theme.darkAlgorithm,
      }
      localStorage.setItem(THEME_KEY, 'dark')
      break
    default:
      currentTheme.value = {
        algorithm: theme.defaultAlgorithm,
      }
      localStorage.setItem(THEME_KEY, 'light')
  }
  appConfigStore.action.setColorMode(value)
}
// 语言
type LocaleType = 'en-US' | 'zh-CN'
function setLocale(value: LocaleType) {
  switch (value) {
    case 'en-US':
      currentLocale.value = enUS
      break
    default:
      currentLocale.value = zhCN
  }
}

export function useAntdConfigStore() {
  return {
    state: {
      currentTheme,
      currentLocale,
    },
    action: {
      getThemeName,
      setTheme,
      setLocale,
    },
  }
}
