import Aura from '@primevue/themes/aura'
import Tooltip from 'primevue/tooltip'
import ToastService from 'primevue/toastservice'

export default defineNuxtPlugin((nuxtApp) => {
  const primevue = usePrimeVue()
  primevue.config.theme = {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.dark-mode',
      cssLayer: false,
    },
  }
  const app = nuxtApp.vueApp
  app.directive('tooltip', Tooltip)
  app.use(ToastService)
})
