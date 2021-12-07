import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueRouterTransition from '@duandz/vue-router-transition'
import './assets/styles/index.css'
import '@duandz/vue-router-transition/dist/style.css'

const app = createApp(App)
app.use(router)
app.use(VueRouterTransition)
app.mount('#app')
