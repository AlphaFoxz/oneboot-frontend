import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura'
import Tooltip from 'primevue/tooltip'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'

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
  app.use(ConfirmationService)
})
