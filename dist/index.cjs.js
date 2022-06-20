'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueRouter = require('vue-router');

var script = vue.defineComponent({
    props: {
        defaultClassTransition: {
            type: String,
            required: false,
            default: "transition-active",
        },
        // Class add to body when enter transition active
        bodyClassEnterTransitonActive: {
            type: String,
            required: false,
            default: "body-enter-transition-active",
        },
        // Class add to body when leave transition active
        // It should be different with bodyClassEnterTransitonActive to avoid conflict and accident remove other class
        bodyClassLeaveTransitonActive: {
            type: String,
            required: false,
            default: "body-leave-transition-active",
        },
        // The key to distinct your router. The trasition will only trigger when the key is changed
        routeKey: {
            type: String,
            requried: true,
        }
    },
    setup(props) {
        const router = vueRouter.useRouter();
        // Store router history. Not used yet.
        const history = [];
        // This class will be added to all the elements that are transitioning
        router.afterEach((to, from) => {
            to.meta.previousRouterScrollPosition = 0;
            // Do not show animation on the first page load
            if (!history.length) {
                to.meta.transition = "";
                history.push({
                    path: to.path,
                    previousRouterScrollPosition: window.scrollY,
                });
                return;
            }
            const toTransistions = to.meta
                .transitions;
            const fromTransistions = from.meta
                .transitions;
            const transition = {
                name: undefined,
                enterClass: undefined,
                leaveClass: undefined,
            };
            function setTransition(routeTransition, highPriorityElement) {
                if (typeof routeTransition === "string") {
                    transition.name = routeTransition;
                }
                else {
                    transition.name = routeTransition.name;
                    transition.enterClass = routeTransition.enterClass;
                    transition.leaveClass = routeTransition.leaveClass;
                }
                if (highPriorityElement == "enter") {
                    transition.enterClass =
                        "high-priority-transition " + (transition.enterClass || "");
                }
                else {
                    transition.leaveClass =
                        "high-priority-transition " + (transition.leaveClass || "");
                }
            }
            // Choose the highest priority transition (lowest number)
            if (toTransistions && fromTransistions) {
                fromTransistions.priority < toTransistions.priority
                    ? setTransition(fromTransistions.leave, "leave")
                    : setTransition(toTransistions.enter, "enter");
            }
            else if (toTransistions) {
                setTransition(toTransistions.enter, "enter");
            }
            else if (fromTransistions) {
                setTransition(fromTransistions.leave, "leave");
            }
            to.meta.transition = transition.name
                ? props.defaultClassTransition + " " + transition.name
                : undefined;
            to.meta.enterActiveClass = transition.enterClass;
            to.meta.leaveActiveClass = transition.leaveClass;
            // Add the new path to the history.
            if (to.path !== from.path) {
                const beforeLast = history[history.length - 2];
                if (!beforeLast || beforeLast.path !== to.path) {
                    history.push({
                        path: to.path,
                        previousRouterScrollPosition: window.scrollY,
                    });
                }
                else {
                    // Remove the last path from the history in case the router go back to beforeLast router
                    const lastHistory = history.pop();
                    if (lastHistory) {
                        to.meta.previousRouterScrollPosition = lastHistory.previousRouterScrollPosition;
                    }
                }
            }
        });
        return {};
    },
    methods: {
        // Add class to body when transition active
        beforeEnter(el, previousRouterScrollPosition) {
            el.style.top = -previousRouterScrollPosition + "px";
            document.body.classList.add(this.bodyClassEnterTransitonActive);
        },
        afterEnter(el, previousRouterScrollPosition) {
            el.style.top = '';
            document.body.classList.remove(this.bodyClassEnterTransitonActive);
            window.scrollTo(0, previousRouterScrollPosition || 0);
        },
        enterCancelled(el) {
            el.style.top = '';
            document.body.classList.remove(this.bodyClassEnterTransitonActive);
        },
        beforeLeave() {
            document.body.classList.add(this.bodyClassLeaveTransitonActive);
        },
        afterLeave() {
            document.body.classList.remove(this.bodyClassLeaveTransitonActive);
        },
        leaveCancelled() {
            document.body.classList.remove(this.bodyClassLeaveTransitonActive);
        },
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = vue.resolveComponent("router-view");

  return (vue.openBlock(), vue.createBlock(_component_router_view, null, {
    default: vue.withCtx(({ Component, route }) => [
      vue.createVNode(vue.Transition, vue.mergeProps(_ctx.$attrs, {
        name: route.meta.transition,
        "enter-active-class": route.meta.enterActiveClass,
        "leave-active-class": route.meta.leaveActiveClass,
        onBeforeEnter: $event => (_ctx.beforeEnter($event, route.meta.previousRouterScrollPosition)),
        onBeforeLeave: _ctx.beforeLeave,
        onAfterEnter: $event => (_ctx.afterEnter($event, route.meta.previousRouterScrollPosition)),
        onAfterLeave: _ctx.afterLeave,
        onEnterCancelled: _ctx.enterCancelled,
        onLeaveCancelled: _ctx.leaveCancelled
      }), {
        default: vue.withCtx(() => [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(Component), { key: _ctx.routeKey }))
        ]),
        _: 2 /* DYNAMIC */
      }, 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["name", "enter-active-class", "leave-active-class", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave", "onEnterCancelled", "onLeaveCancelled"])
    ]),
    _: 1 /* STABLE */
  }))
}

script.render = render;
script.__file = "src/RouterViewTransition.vue";

var index = {
    install(app, router) {
        app.component('RouterViewTransition', script);
    }
};

exports.RouterViewTransition = script;
exports["default"] = index;