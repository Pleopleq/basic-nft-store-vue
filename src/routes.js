import TheItemList from "./components/TheItemList.vue";
import TheShoppingCart from "./components/TheShoppingCart.vue";

const routes = [
  {
    path: "/",
    redirect: "/items",
  },
  {
    path: "/new-item",
    component: "TheNewNftForm",
  },
  {
    path: "/items",
    component: TheItemList,
  },
  {
    path: "/cart",
    component: TheShoppingCart,
  },
];

export default routes;
