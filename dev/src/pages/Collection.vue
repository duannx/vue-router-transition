<template>
  <div class="page">
    <div class="page-content">
      <router-link class="mt-4 block font-bold underline" :to="{ name: 'home' }"
        >Back</router-link
      >
      <h1 class="text-4xl text-center mt-10">
        Collection: {{ collection.title }}
      </h1>
      <List
        v-if="collection"
        :collections="collection.products"
        to-router-name="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import List from "../components/List.vue";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

interface Collection {
  id: number;
  title: string;
  products: Product[];
}

export default defineComponent({
  components: {
    List,
  },
  setup() {
    const router = useRouter();
    const collections: Array<Collection> = [
      {
        id: 1,
        title: "Dogs",
        products: [
          {
            id: 1,
            title: "Dog 1",
            description: "A dog",
            image:
              "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?w=500",
            price: 100,
          },
          {
            id: 2,
            title: "Dog 2",
            description: "A dog",
            image:
              "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?w=500",
            price: 100,
          },
          {
            id: 3,
            title: "Dog 3",
            description: "A dog",
            image:
              "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?w=500",
            price: 100,
          },
          {
            id: 4,
            title: "Dog 4",
            description: "A dog",
            image:
              "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?w=500",
            price: 100,
          },
        ],
      },
      {
        id: 2,
        title: "Cats",
        products: [
          {
            id: 5,
            title: "Cat 1",
            description: "A cat",
            image:
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500",
            price: 100,
          },
          {
            id: 6,
            title: "Cat 2",
            description: "A cat",
            image:
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500",
            price: 100,
          },
          {
            id: 7,
            title: "Cat 3",
            description: "A cat",
            image:
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500",
            price: 100,
          },
          {
            id: 8,
            title: "Cat 4",
            description: "A cat",
            image:
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500",
            price: 100,
          },
        ],
      },
    ];

    return {
      collection: computed(() => {
        const id = router.currentRoute.value.params.id;
        return collections.find((collection) => collection.id == +id);
      }),
    };
  },
});
</script>
