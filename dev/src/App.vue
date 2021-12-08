<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <RouterViewTransition
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      bodyClassTransitonActive: "body-transition-active",
    };
  },
  methods: {
    // Add class to body when transition active
    enter() {
      document.body.classList.add(this.bodyClassTransitonActive);
    },
    afterEnter() {
      document.body.classList.remove(this.bodyClassTransitonActive);
    },
    enterCancelled() {
      document.body.classList.remove(this.bodyClassTransitonActive);
    },
  },
});
</script>
