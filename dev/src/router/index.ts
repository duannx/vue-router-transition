import { createRouter, createWebHistory, Router } from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHistory(process.env.NODE_ENV === 'production' ? '/vue-router-transition/' : '/'),
    routes
})
export default router