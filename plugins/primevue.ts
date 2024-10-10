import Aura from '@primevue/themes/aura'
import Tooltip from 'primevue/tooltip'

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
  nuxtApp.vueApp.directive('tooltip', Tooltip)
})
