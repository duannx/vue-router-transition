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
                enter: 'fade',
                leave: 'fade',
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
                enter: 'slide-left',
                leave: 'slide-left-reverse'
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
                enter: 'slide-right',
                leave: 'slide-right-reverse'
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
                enter: 'slide-left',
                leave: 'slide-left-reverse'
            }
        }
    },
    {
        path: '/product/1',
        component: Product,
        meta: {
            transitions: {
                priority: 1,
                enter: 'slide-up',
                leave: 'slide-up-reverse'
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
                enter: 'slide-down',
                leave: 'slide-down-reverse'
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
                enter: 'fade',
                leave: 'fade'
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
                enter: 'zoom-in',
                leave: 'zoom-in-reverse'
            }
        },
        props: {
            id: 1
        }
    },
    {
        path: '/product/5',
        component: Product,
        meta: {
            transitions: {
                priority: 1,
                enter: {
                    enterClass: 'animate__animated animate__bounceInDown',
                    leaveClass: 'stay-here' // Add a fake class on the element to prevent vue imediatelly remove it
                },
                leave: {
                    enterClass: '', // No need to add the fake class beacause vue imediatly add it
                    leaveClass: 'animate__animated animate__bounceOutUp'
                }
            }
        },
        props: {
            id: 5
        }
    },
    {
        path: '/product/6',
        component: Product,
        meta: {
            transitions: {
                priority: 1,
                enter: {
                    enterClass: 'animate__animated animate__backInLeft',
                    leaveClass: 'stay-here' // Add a fake class on the element to prevent vue imediatelly remove it
                },
                leave: {
                    enterClass: '',
                    leaveClass: 'animate__animated animate__backOutLeft'
                }
            }
        },
        props: {
            id: 6
        }
    },
    {
        path: '/product/7',
        component: Product,
        meta: {
            transitions: {
                priority: 1,
                enter: {
                    enterClass: 'animate__animated animate__flipInX',
                    leaveClass: 'stay-here' // Add a fake class on the element to prevent vue imediatelly remove it
                },
                leave: {
                    enterClass: '',
                    leaveClass: 'animate__animated animate__flipOutX'
                }
            }
        },
        props: {
            id: 7
        }
    },
    {
        path: '/product/8',
        component: Product,
        meta: {
            transitions: {
                priority: 1,
                enter: {
                    enterClass: 'animate__animated animate__rollIn',
                    leaveClass: 'stay-here' // Add a fake class on the element to prevent vue imediatelly remove it
                },
                leave: {
                    enterClass: '',
                    leaveClass: 'animate__animated animate__rollOut'
                }
            }
        },
        props: {
            id: 8
        }
    },
    {
        path: '/product/:id',
        component: Product,
        name: 'product',
        meta: {
            transitions: {
                priority: 1,
                enter: 'slide-left',
                leave: 'slide-left-reverse'
            }
        }
    }
]
export default routes