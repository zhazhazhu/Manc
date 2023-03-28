import '@manc-ui/theme'
import 'uno.css'
import './style.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from '~pages'

const router = createRouter({
  routes,
  history: createWebHistory(),
})

const app = createApp(App)

app.use(router)

app.mount('#app')
