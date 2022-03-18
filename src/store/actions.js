export default {
  isItemInCart(context, payload) {
    context.commit("isItemInCart", payload);
  },
  addProductToStore(context, payload) {
    context.commit("addProductToStore", payload);
  },
};
