import TheItemList from "./components/TheItemList.vue";
import TheShoppingCart from "./components/TheShoppingCart.vue";

const routes = [
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
