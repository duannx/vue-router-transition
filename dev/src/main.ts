import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueRouterTransition from '@duandz/vue-router-transition'
// import VueRouterTransition from '../../src'

import '@duandz/vue-router-transition/dist/style.css'
// import '../../src/style.css'

import 'animate.css'
import './assets/styles/index.css'



const app = createApp(App)
app.use(router)
app.use(VueRouterTransition)
app.mount('#app')
