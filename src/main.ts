import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/style/tailwind.css'
import '@/assets/style/Main.scss'
import { definePreset } from '@primevue/themes'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'

import 'primeicons/primeicons.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import scrollReveal from '@/directives/scrollReveal'

library.add(fas, far, fab)

const myPreset = definePreset(Aura, {
  semantic: {
    // 重設Prime vue主題色
    primary: {
      50: '#e8f1fa', // Lightest
      100: '#c8daf1',
      200: '#a5c2e8',
      300: '#79a3db',
      400: '#4e85cf',
      500: '#0d47a1', // Base color
      600: '#0b3e91',
      700: '#093581',
      800: '#072c71',
      900: '#051d51', // Darkest
      950: '#031639', // Extra dark
    },
  },
})
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.directive('scroll-reveal', scrollReveal)

app.use(createPinia())
app.use(router)
app.use(ToastService)
app.use(ConfirmationService)
app.use(PrimeVue, {
  ripple: true, // 按鈕元件在被點擊時會有水波效果
  // 預設主題設定
  theme: {
    preset: myPreset,
    options: {
      prefix: 'p',
      darkModeSelector: false,
      cssLayer: false,
    },
  },
  locale: {
    dateFormat: 'yy-mm-dd',
    firstDayOfWeek: 1,
    locale: 'zh-TW',
  },
})

app.mount('#app')
