import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({
  endpoint: "link",
  clientConfig: {
    routes: [
      {
        type: "home",
        path: "/",
      },
      {
        type: "recipe",
        path: "/:uid",
      },
    ],
  },
});

export default prismic;
