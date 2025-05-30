import './assets/main.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App)

app.use(router)
    .use(Vue3Toastify, {
        autoClose: 3000,
    },)
app.use(createPinia())

app.mount('#app')
