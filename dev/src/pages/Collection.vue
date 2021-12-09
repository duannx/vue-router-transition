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
  path: string;
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
  props: {
    id: {
      type: Number,
      required: false,
    },
  },
  setup(props) {
    const router = useRouter();
    const collections: Array<Collection> = [
      {
        id: 1,
        title: "Dogs",
        products: [
          {
            id: 1,
            title: "Dog 1 - Slide up",
            path: "/product/1",
            description: "A dog",
            image:
              "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?w=500",
            price: 100,
          },
          {
            id: 2,
            title: "Dog 2 - Slide down",
            path: "/product/2",
            description: "A dog",
            image:
              "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?w=500",
            price: 100,
          },
          {
            id: 3,
            title: "Dog 3 - Fade",
            path: "/product/3",
            description: "A dog",
            image:
              "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?w=500",
            price: 100,
          },
          {
            id: 4,
            title: "Dog 4 - Zoom in",
            path: "/product/4",
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
            title: "Cat 1 - animate__bounceInDown",
            path: "/product/5",
            description: "A cat",
            image:
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500",
            price: 100,
          },
          {
            id: 6,
            title: "Cat 2 - animate__backInLeft",
            path: "/product/6",
            description: "A cat",
            image:
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500",
            price: 100,
          },
          {
            id: 7,
            title: "Cat 3 - animate__flipInX",
            path: "/product/7",
            description: "A cat",
            image:
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500",
            price: 100,
          },
          {
            id: 8,
            title: "Cat 4 - animate__rollIn",
            path: "/product/8",
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
        let id = +router.currentRoute.value.params.id;
        if (!id) id = props.id
        return collections.find((collection) => collection.id == id);
      }),
    };
  },
});
</script>
