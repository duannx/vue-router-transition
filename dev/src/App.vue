<template>
  <div class="menu">
    <div class="menu__center">
      <div class="menu__item">
        <router-link to="/collection/1">Dog</router-link>
      </div>
      <div class="menu__item">
        <router-link to="/collection/2">Cat</router-link>
      </div>
    </div>

    <div class="menu__item">
      <a href="https://github.com/duannx/vue-router-transition" target="_blank">Github</a>
    </div>
  </div>
  <div class="dynamic-content">
    <RouterViewTransition :keepAliveAttrs="{ max: 2 }" :keepAlive="true" :routeKey="route.fullPath" defaultClassTransition="transition-active" />
  </div>

</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
const route = useRoute()
</script>

<style lang="scss">
.menu {
  display: flex;
  background: #eee;
  position: relative;
  z-index: 10;

  &__item {
    cursor: pointer;
    padding: 10px 20px;
    font-size: 2rem;
    text-decoration: underline;
  }

  &__center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
}
</style>

