import { App } from 'vue';
import RouterViewTransition from './RouterViewTransition.vue';
interface Router {
    beforeEach: (to: any, from: any, next: any) => void;
    afterEach: (to: any, from: any) => void;
}
export { RouterViewTransition };
export type { RouterMetaTransition } from './types';
declare const _default: {
    install(app: App, router: Router): void;
};
export default _default;
