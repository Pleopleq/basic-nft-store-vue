import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import BaseCard from "./components/global/BaseCard.vue";
import routes from "./routes";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.component("base-card", BaseCard);
app.use(router);

app.mount("#app");
