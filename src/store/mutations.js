export default {
  isItemInCart(state, id) {
    const productInCart = state.listOfNfts.find((item) => item.id === id);
    productInCart.isInCart = !productInCart.isInCart;
  },
  addProductToStore(state, productData) {
    state.listOfNfts.push(productData);
  },
};
