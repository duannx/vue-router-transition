<template>
  <router-view v-slot="{ Component, route }">
    <transition
      v-bind="$attrs"
      :name="route.meta.transition"
      :enter-active-class="route.meta.enterActiveClass"
      :leave-active-class="route.meta.leaveActiveClass"
      @before-enter="beforeEnter($event, route.meta.previousRouterScrollPosition)"
      @before-leave="beforeLeave"
      @after-enter="afterEnter($event, route.meta.previousRouterScrollPosition)"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { RouterMetaTransition, Transition, RouterHistory } from "./types";

export default defineComponent({
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
  },
  setup(props) {
    const router = useRouter();
    // Store router history. Not used yet.
    const history: Array<RouterHistory> = [];
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

      const toTransistions: RouterMetaTransition | undefined = to.meta
        .transitions as RouterMetaTransition;
      const fromTransistions: RouterMetaTransition | undefined = from.meta
        .transitions as RouterMetaTransition;

      const transition: Transition = {
        name: undefined,
        enterClass: undefined,
        leaveClass: undefined,
      };

      function setTransition(
        routeTransition: Transition | string,
        highPriorityElement: string
      ) {
        if (typeof routeTransition === "string") {
          transition.name = routeTransition;
        } else {
          transition.name = routeTransition.name;
          transition.enterClass = routeTransition.enterClass;
          transition.leaveClass = routeTransition.leaveClass;
        }

        if (highPriorityElement == "enter") {
          transition.enterClass =
            "high-priority-transition " + (transition.enterClass || "");
        } else {
          transition.leaveClass =
            "high-priority-transition " + (transition.leaveClass || "");
        }
      }

      // Choose the highest priority transition (lowest number)
      if (toTransistions && fromTransistions) {
        fromTransistions.priority < toTransistions.priority
          ? setTransition(fromTransistions.leave, "leave")
          : setTransition(toTransistions.enter, "enter");
      } else if (toTransistions) {
        setTransition(toTransistions.enter, "enter");
      } else if (fromTransistions) {
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
        } else {
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
    beforeEnter(el: HTMLElement, previousRouterScrollPosition: number) {
      el.style.top = -previousRouterScrollPosition + "px";
      document.body.classList.add(this.bodyClassEnterTransitonActive);
    },
    afterEnter(el: HTMLElement, previousRouterScrollPosition: number) {
      el.style.top = '';
      document.body.classList.remove(this.bodyClassEnterTransitonActive);
      window.scrollTo(0, previousRouterScrollPosition || 0);
    },
    enterCancelled(el: HTMLElement) {
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
</script>
