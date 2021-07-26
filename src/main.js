import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import './assets/css/default.css'
import './assets/css/style.css'


let app = createApp(App).use(router)

app.mount('#app')
