export default {
  addProductToCart(context, payload) {
    context.commit("addProductToCart", payload);
  },
  removeProductFromCart(context, payload) {
    context.commit("removeProductFromCart", payload);
  },
  isItemInCart(context, payload) {
    context.commit("isItemInCart", payload);
  },
};
