import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FontAwesomeIcon from './icons'

let app = createApp(App).use(router)
app.mount('#app')

// Register font awesome components
app.component('FontAwesomeIcon', FontAwesomeIcon)

// Add window global
app.config.globalProperties.window = window
