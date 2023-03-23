import '@manc-ui/theme'
import 'uno.css'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'base',
      component: App,
    },
  ],
  history: createWebHashHistory(),
})

const app = createApp(App)

app.use(router)

app.mount('#app')
