import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

let app = createApp(App).use(router)
app.mount('#app')

// Add window global
app.config.globalProperties.window = window
