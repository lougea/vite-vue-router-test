<template>
  <h1>HOMEPAGE</h1>

  <br />
  <router-link to="/recipe_1">Recipe 1</router-link>
  <br />
  <router-link to="/recipe_2">Recipe 2</router-link>
</template>

<script>
import { useSinglePrismicDocument } from "@prismicio/vue";

export default {
  setup() {
    const { data: home } = useSinglePrismicDocument("home");
    return { home };
  },
};
</script>
