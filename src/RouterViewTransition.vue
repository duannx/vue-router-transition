<template>
  <router-view v-slot="{ Component, route }">
    <transition
      v-bind="$attrs"
      :name="route.meta.transition"
      :enter-active-class="route.meta.enterActiveClass"
      :leave-active-class="route.meta.leaveActiveClass"
      @enter="enter"
      @leave="leave"
      @after-enter="afterEnter"
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
import { RouterMetaTransition, Transition } from "./types";

export default defineComponent({
  props: {
    defaultClassTransition: {
      type: String,
      required: false,
      default: "transition-active",
    },
    // Class add to body when enter transition active
    bodyClassEnterTransitonActive:{
      type: String,
      required: false,
      default: "body-enter-transition-active",
    },
    // Class add to body when leave transition active
    // It should be different with bodyClassEnterTransitonActive to avoid conflict and accident remove other class
    bodyClassLeaveTransitonActive:{
      type: String,
      required: false,
      default: "body-leave-transition-active",
    }
  },
  setup(props) {
    const router = useRouter();
    // Store router history. Not used yet.
    const history: Array<string> = [];
    // This class will be added to all the elements that are transitioning

    router.afterEach((to, from) => {
      // Do not show animation on the first page load
      if (!history.length) {
        to.meta.transition = "";
        history.push(to.path);
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

      function setTransition(routeTransition: Transition | string) {
        if (typeof routeTransition === "string") {
          transition.name = routeTransition;
        } else {
          transition.name = routeTransition.name;
          transition.enterClass = routeTransition.enterClass;
          transition.leaveClass = routeTransition.leaveClass;
        }
      }

      // Choose the highest priority transition (lowest number)
      if (toTransistions && fromTransistions) {
        fromTransistions.priority < toTransistions.priority
          ? setTransition(fromTransistions.leave)
          : setTransition(toTransistions.enter);
      } else if (toTransistions) {
        setTransition(toTransistions.enter);
      } else if (fromTransistions) {
        setTransition(fromTransistions.leave);
      }

      to.meta.transition = transition.name
        ? props.defaultClassTransition + " " + transition.name
        : undefined;
      to.meta.enterActiveClass = transition.enterClass;
      to.meta.leaveActiveClass = transition.leaveClass;

      // Add the new path to the history.
      if (to.path !== from.path) {
        const beforeLast = history[history.length - 2];
        if (!beforeLast || beforeLast !== to.path) {
          history.push(to.path);
        } else {
          // Remove the last path from the history in case the router go back to beforeLast router
          history.pop();
        }
      }
    });

    return {};
  },
  methods:{
    // Add class to body when transition active
    enter() {
      document.body.classList.add(this.bodyClassEnterTransitonActive);
    },
    afterEnter() {
      document.body.classList.remove(this.bodyClassEnterTransitonActive);
    },
    enterCancelled() {
      document.body.classList.remove(this.bodyClassEnterTransitonActive);
    },

    leave() {
      document.body.classList.add(this.bodyClassLeaveTransitonActive);
    },
    afterLeave() {
      document.body.classList.remove(this.bodyClassLeaveTransitonActive);
    },
    leaveCancelled() {
      document.body.classList.remove(this.bodyClassLeaveTransitonActive);
    },
  }
});
</script>
