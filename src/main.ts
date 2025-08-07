import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import roteador from './roteador'
import store from './store'

createApp(App)
    .use(store)
    .use(roteador)
    .mount('#app')
