import { App } from 'vue'

interface Router {
    beforeEach: (to: any, from: any, next: any) => void
    afterEach: (to: any, from: any) => void
}

export default {
    install(app:App, router: Router) {
        console.log('[vue-router-transition] install');
    }
}