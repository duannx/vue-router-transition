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
import Dog1 from "../assets/dog_1.jpeg";
import Dog2 from "../assets/dog_2.jpeg";
import Dog3 from "../assets/dog_3.jpeg";
import Dog4 from "../assets/dog_4.png";
import Cat1 from "../assets/cat_1.jpeg";
import Cat2 from "../assets/cat_2.jpeg";
import Cat3 from "../assets/cat_3.jpeg";
import Cat4 from "../assets/cat_4.jpeg";

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
  props: {
    id: {
      type: Number,
      required: false,
    },
  },
  setup(props) {
    const products = [
      {
        id: 1,
        title: "Dog 1 - Slide up",
        path: "/product/1",
        description:
          "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
        image: Dog1,
        price: 100,
        collection: {
          id: 1,
        },
      },
      {
        id: 2,
        title: "Dog 2 - Slide down",
        path: "/product/2",
        description:
          "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
        image: Dog2,
        price: 100,
        collection: {
          id: 1,
        },
      },
      {
        id: 3,
        title: "Dog 3 - Fade",
        path: "/product/3",
        description:
          "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
        image: Dog3,
        price: 100,
        collection: {
          id: 1,
        },
      },
      {
        id: 4,
        title: "Dog 4 - Zoom in",
        path: "/product/4",
        description:
          "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
        image: Dog4,
        price: 100,
        collection: {
          id: 1,
        },
      },
      {
        id: 5,
        title: "Cat 1 - animate__bounceInDown",
        path: "/product/5",
        description:
          "A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.",
        image: Cat1,
        price: 100,
        collection: {
          id: 2,
        },
      },
      {
        id: 6,
        title: "Cat 2 - animate__backInLeft",
        path: "/product/6",
        description:
          "A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.",
        image: Cat2,
        price: 100,
        collection: {
          id: 2,
        },
      },
      {
        id: 7,
        title: "Cat 3 - animate__flipInX",
        path: "/product/7",
        description:
          "A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.",
        image: Cat3,
        price: 100,
        collection: {
          id: 2,
        },
      },
      {
        id: 8,
        title: "Cat 4 - animate__rollIn",
        path: "/product/8",
        description:
          "A cat is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.",
        image: Cat4,
        price: 100,
        collection: {
          id: 2,
        },
      },
    ];

    const router = useRouter();
    return {
      product: computed(() => {
        let id = +router.currentRoute.value.params.id;
        if (!id) id = props.id;
        const product = products.find((product) => product.id === id);
        return product;
      }),
    };
  },
});
</script>
