<template>
  <div class="list" v-if="collections">
    <router-link
      :to="collection.path"
      v-for="collection of collections"
      :key="collection.id"
    >
      <div
        class="
          w-full
          h-0
          pb-full
          relative
          bg-gray-200
          rounded-md
          overflow-hidden
        "
      >
        <img
          class="w-full h-full absolute top-0 left-0 object-contain"
          :src="collection.image"
          alt=""
        />
      </div>
      <h2 class="text-3xl text-center mt-4">
        {{ collection.title }}
      </h2>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    collections: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>
