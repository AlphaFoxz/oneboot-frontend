import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { theme } from 'ant-design-vue'

// 主题
type ThemeType = 'light' | 'dark'
const THEME_KEY = 'antd-theme'
const currentTheme = ref()
setTheme(getThemeName())
const currentLocale = ref(zhCN)
function getThemeName(): ThemeType {
  return (localStorage.getItem(THEME_KEY) as ThemeType) || 'light'
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

export const useAntdConfigStore = () => {
  return {
    getThemeName,
    getThemeState: () => currentTheme,
    setTheme,
    getLocaleState: () => currentLocale,
    setLocale,
  }
}
