import Home from '../pages/Home.vue';
import { RouteRecordRaw } from 'vue-router';
import Product from '../pages/Product.vue';
import Collection from '../pages/Collection.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            transitions: {
                priority: 3,
                in: 'fade',
                out: 'fade'
            }
        }
    },
    {
        path: '/collection/:id',
        component: Collection,
        name: 'collection',
        meta: {
            transitions: {
                priority: 2,
                in: 'fade-left',
                out: 'fade-right'
            }
        }
    },
    {
        path: '/product/:id',
        component: Product,
        name: 'product',
        meta: {
            transitions: {
                priority: 1,
                in: 'fade-left',
                out: 'fade-right'
            }
        }
    }
]
export default routes