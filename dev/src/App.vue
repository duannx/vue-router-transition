<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

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
    <RouterViewTransition defaultClassTransition="transition-active" />
  </div>
  
</template>

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

