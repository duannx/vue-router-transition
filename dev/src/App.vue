<template>
  <div class="menu">
    <div class="menu__item">
      <router-link to="/collection/1">Dog</router-link>
    </div>
    <div class="menu__item">
      <router-link to="/collection/2">Cat</router-link>
    </div>
  </div>
  <div class="dynamic-content">
    <RouterViewTransition :routeKey="route.fullPath" defaultClassTransition="transition-active" />
  </div>

</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
const route = useRoute()
</script>

<style lang="scss">
.menu {
  display: flex;
  justify-content: center;
  background: #eee;
  position: relative;
  z-index: 10;

  &__item {
    cursor: pointer;
    padding: 10px 20px;
    font-size: 2rem;
    text-decoration: underline;
  }
}
</style>

