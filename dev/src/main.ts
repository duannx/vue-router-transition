import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueRouterTransition from '../../src'
import './assets/styles/index.css'
import '../../src/style.css'

const app = createApp(App)
app.use(router)
app.use(VueRouterTransition)
app.mount('#app')
