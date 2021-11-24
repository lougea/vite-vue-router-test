<template>
  <div v-if="recipe">
    <h1>{{ uid }}</h1>

    <br />
    <prismic-rich-text :field="recipe.data.text" /><br /><br />

    <router-link to="/">Vers HOMEPAGE</router-link>
    <br />
    <router-link to="/recipe_1">Recipe 1</router-link>
    <br />
    <router-link to="/recipe_2">Recipe 2</router-link>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { usePrismicDocumentByUID } from "@prismicio/vue";
export default {
  setup() {
    const route = useRoute();
    const uid = route.params.uid;
    const { data: recipe } = usePrismicDocumentByUID(
      "recipe",
      route.params.uid
    );
    return {
      uid,
      recipe,
    };
  },
};
</script>
