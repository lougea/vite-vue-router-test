import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: () => import("./pages/index.vue"),
    },
    {
      path: "/article",
      name: "Article",
      component: () => import("./pages/article.vue"),
    },
    {
      path: "/:uid",
      name: "Page",
      component: () => import("./pages/_uid.vue"),
    },
  ],
});

export default router;
