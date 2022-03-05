export default {
  cartProductList(state) {
    return state.cart.items;
  },
  cartTotalPrice(state) {
    return state.cart.total;
  },
  itemsInCart(state) {
    return state.cart.items.length;
  },
};
