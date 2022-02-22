export default {
  cartProductList(state) {
    return state.cartProductList;
  },
  itemsInCart(state) {
    return state.cartProductList.length;
  },
};
