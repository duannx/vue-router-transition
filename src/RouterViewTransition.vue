<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { RouterMetaTransition } from "./types";

export default defineComponent({
  setup() {
    const router = useRouter();
    const history: Array<string> = [];
    // This class will be added to all the elements that are transitioning
    const defaultClassTransition = "transition-active";

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
      let transition = "";

      if (toTransistions && fromTransistions) {
        fromTransistions.priority < toTransistions.priority
          ? (transition = fromTransistions.out)
          : (transition = toTransistions.in);
      } else if (toTransistions) {
        transition = toTransistions.in;
      } else if (fromTransistions) {
        transition = fromTransistions.out;
      }

      to.meta.transition = defaultClassTransition + " " + transition;

      if (to.path !== from.path) {
        const beforeLast = history[history.length - 2];
        if (!beforeLast || beforeLast !== to.path) {
          history.push(to.path);
        } else {
          history.pop();
        }
      }
    });

    return {};
  },
});
</script>
