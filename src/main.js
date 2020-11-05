import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import './assets/css/default.css'
import './assets/css/style.css'


// window.axios = axios
// db.collection('posts').onSnapshot(snapshot=>{
//     snapshot.forEach(data=>{
//         console.log(data.data());
//     })
// })
let app = createApp(App).use(router)

app.mount('#app')
