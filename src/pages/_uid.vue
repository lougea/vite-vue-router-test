<template>
  <h1>{{ uid }}</h1>
  <router-link to="/">Vers HOMEPAGE</router-link>
</template>

<script>
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const uid = route.params.uid;
    return {
      uid,
    };
  },
};
</script>
