import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'

createApp(App).use(router).use(store).use(vueAxios,axios).mount('#app')
