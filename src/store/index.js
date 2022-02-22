import { createStore } from "vuex";
import productsModule from "./products/index";
import cartModule from "./cart/index";

const store = createStore({
  modules: { listOfNfts: productsModule, cart: cartModule },
});

export default store;
