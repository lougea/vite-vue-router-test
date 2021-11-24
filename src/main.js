import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router.js";
import Prismic from "./prismic.js";

createApp(App).use(Router).use(Prismic).mount("#app");
