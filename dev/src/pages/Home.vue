<template>
  <div class="page">
    <div class="page-content">
      <h1 class="text-4xl text-center mt-10">Home Page</h1>
      <List :collections="collections" to-router-name="collection" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import List from "../components/List.vue";

export default defineComponent({
  components: {
    List,
  },
  setup() {
    const collections = [
      {
        id: 1,
        title: "Dogs",
        image:
          "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?w=500",
      },
      {
        id: 2,
        title: "Cats",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500",
      },
    ];
    return { collections };
  },
});
</script>
