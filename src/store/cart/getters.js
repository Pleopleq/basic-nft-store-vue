export default {
  cartProductList(state) {
    return state.cart.items;
  },
  itemsInCart(state) {
    return state.cart.items.length;
  },
};
