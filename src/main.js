import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router/index'

import './assets/css/default.css'
import './assets/css/style.css'

window.axios = axios

let app = createApp(App).use(router)

app.mount('#app')
