<template>
  <div class="page">
    <div class="page-content" v-if="product">
      <router-link
        class="mt-4 block font-bold underline"
        :to="{ name: 'collection', params: { id: product.collection.id } }"
      >
        Back
      </router-link>
      <h1 class="text-4xl mt-10">{{ product.title }}</h1>
      <div class="mt-4 text-2xl font-bold">${{ product.price }}</div>
      <img class="max-w- mt-6 md:max-w-md" :src="product.image" alt="" />
      <div class="mt-4 max-w-lg">
        {{ product.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  collection: {
    id: number;
  };
}

export default defineComponent({
  setup() {
    const dog: Product = {
      id: 1,
      title: "Dog",
      price: 100,
      collection: {
        id: 1,
      },
      image:
        "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?w=500",
      description:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
    };
    const cat: Product = {
      id: 2,
      title: "Cat",
      price: 100,
      collection: {
        id: 2,
      },
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500",
      description:
        "A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.",
    };
    const router = useRouter();
    return {
      product: computed(() => {
        const id = +router.currentRoute.value.params.id;
        if (id >= 5) return cat;
        return dog;
      }),
    };
  },
});
</script>
