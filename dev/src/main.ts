import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueRouterTransition from '../../src'

const app = createApp(App)
app.use(router)
app.use(VueRouterTransition)
app.mount('#app')
