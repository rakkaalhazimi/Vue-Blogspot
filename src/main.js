import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "@fortawesome/fontawesome-free/js/brands.js"
import "@fortawesome/fontawesome-free/js/regular.js"
import "@fortawesome/fontawesome-free/js/solid.js"
import "@fortawesome/fontawesome-free/js/fontawesome.js"



// Setup vue app and its plugins
const pinia = createPinia()
const app = createApp(App).use(router).use(pinia)
app.mount('#app')


// Add window global
app.config.globalProperties.window = window
