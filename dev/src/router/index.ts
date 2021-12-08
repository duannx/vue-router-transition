import { createRouter, createWebHistory, Router } from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHistory('/vue-router-transition/'),
    routes
})
export default router