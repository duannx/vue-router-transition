import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'animate.css'

// import VueRouterTransition from '@duannx/vue-router-transition'
import VueRouterTransition from '../..'

import '@duannx/vue-router-transition/dist/style.css'
// import '../../dist/style.css'

import './assets/styles/index.css'

const app = createApp(App)
app.use(router)
app.use(VueRouterTransition)
app.mount('#app')
