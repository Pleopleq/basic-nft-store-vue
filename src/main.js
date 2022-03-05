import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import BaseCard from "./components/global/BaseCard.vue";
import BaseCartItem from "./components/global/BaseCartItem.vue";
import routes from "./routes";
import store from "./store/index";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.component("base-card", BaseCard);
app.component("base-cart-item", BaseCartItem);
app.use(router);
app.use(store);

app.mount("#app");
