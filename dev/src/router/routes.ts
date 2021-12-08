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
    // i use exact path here (/collection/1 instead of /collection/:id) to set different 
    // transition for each page. Demo purpose only.
    {
        path: '/collection/1',
        component: Collection,
        meta: {
            transitions: {
                priority: 2,
                in: 'slide-left',
                out: 'slide-left-reverse'
            }
        },
        props: {
            id: 1
        }
    },
    {
        path: '/collection/2',
        component: Collection,
        meta: {
            transitions: {
                priority: 2,
                in: 'slide-right',
                out: 'slide-right-reverse'
            }
        },
        props: {
            id: 2
        }
    },
    {
        path: '/collection/:id',
        component: Collection,
        name: 'collection',
        meta: {
            transitions: {
                priority: 2,
                in: 'slide-left',
                out: 'slide-left-reverse'
            }
        }
    },
    {
        path: '/product/1',
        component: Product,
        meta: {
            transitions: {
                priority: 1,
                in: 'slide-up',
                out: 'slide-up-reverse'
            }
        },
        props: {
            id: 1
        }
    },
    {
        path: '/product/2',
        component: Product,
        meta: {
            transitions: {
                priority: 1,
                in: 'slide-down',
                out: 'slide-down-reverse'
            }
        },
        props: {
            id: 1
        }
    },
    {
        path: '/product/3',
        component: Product,
        meta: {
            transitions: {
                priority: 1,
                in: 'fade',
                out: 'fade'
            }
        },
        props: {
            id: 1
        }
    },
    {
        path: '/product/4',
        component: Product,
        meta: {
            transitions: {
                priority: 1,
                in: 'zoom-in',
                out: 'zoom-in-reverse'
            }
        },
        props: {
            id: 1
        }
    },
    {
        path: '/product/:id',
        component: Product,
        name: 'product',
        meta: {
            transitions: {
                priority: 1,
                in: 'slide-left',
                out: 'slide-left-reverse'
            }
        }
    }
]
export default routes