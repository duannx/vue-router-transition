# vue-router-transition
✨ Configurable and native-like page transition for Vue3 and vue-router-next

## [Demo](https://duannx.github.io/vue-router-transition/)

## Why :question:
 - Light weight: Only one component added and optional pre-built css
   
 - Configurable: Easily config different transition for **EACH route**. Support reverse transition to make your app animation look like native.
   
 - Easy to use: Just need to install the package and add some configs to use.
 
## Install :coffee:
**Note:** The plugin only support for Vue3+ and Vue Router Next (vue-router^4)

```bash
npm i @duandz/vue-router-transition
yarn add @duandz/vue-router-transition
```

## Usage :rocket:
### Import the plugin on your main.js
```js
// src/main.js
import VueRouterTransition from '@duandz/vue-router-transition'
Vue.use(VueRouterTransition)
// Optional. Import css file if you want to use built in css
import '@duandz/vue-router-transition/dist/style.css'
```
### Replace your `router-view` with `RouterViewTransition` component
```html
<!-- App.vue -->
<template>
   <RouterViewTransition/>
</template>
```
### Add config to your routes list
```js
// routes.js
export default [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { // the plugin will use meta.transitons of your route
            transitions: {
                priority: 3, // smaller number - higher priority
                in: 'fade', // transition when navigate to this route
                out: 'fade' // transition when navigate from this route
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
                in: 'slide-left',
                out: 'slide-left-reverse'
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
                in: 'slide-right',
                out: 'slide-right-reverse'
            }
        }
    }
]
```


## List of available transitions
- fade
- slide-left
- slide-right
- slide-up
- sldie-down
- zoom-in
- More comming soon...

You can easily add your custom transition by providing a name and styling for it. This plugin is built on top of [Vue3 Transition](https://v3.vuejs.org/guide/transitions-overview.html). Strong recommend to read Vue3 Transition before customizing the plugin. The classes to add style are: `yourClassName-enter-from, yourClassName-enter-to, yourClassName-enter-active, yourClassName-leave-from, yourClassName-leave-to, yourClassName-leave-active`

## Props 
```js
props: {
  /**
   * Default class added when the transition active for all type of transitions
   */
  defaultClassTransition: {
    type: String,
    required: false,
    default: "transition-active"
  },  
}
```

## Development
- Clone the project
- Install dependencies: `npm install` or `yarn`
- `yarn dev` to watch build source code
- `cd dev && yarn dev` to run the demo

## TODO
- Add demo
- Add tests
- Add more transition: slide-up, slide-down, zoom-in, zoom-out...
- Support all Vue3 Transition properties
- Support breakpoints config
- Support transition hooks
- Clean readme

## License
MIT