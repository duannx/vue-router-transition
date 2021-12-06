import Home from '../pages/Home.vue';
import { RouteRecordRaw } from 'vue-router';
// import ProductDetails from '../pages/ProductDetails';
// import Collection from '../pages/Collection';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            trasitions: {
                priority: -1,
                in: 'fade',
                out: 'fade'
            }
        }
    },
    // {
    //     path: '/collection/:id',
    //     component: Collection,
    //     name: 'collection',
    //     meta: {
    //         transitions: {
    //             priority: 2,
    //             in: 'slide-left-fade',
    //             out: 'slide-right-fade'
    //         }
    //     }
    // },
    // {
    //     path: '/product/:id',
    //     component: ProductDetails,
    //     name: 'product-details',
    //     meta: {
    //         transitions: {
    //             priority: 1,
    //             in: 'slide-left-fade',
    //             out: 'slide-right-fade'
    //         }
    //     }
    // }
]
export default routes