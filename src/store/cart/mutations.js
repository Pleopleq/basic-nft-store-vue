export default {
  addProductToCart(state, id) {
    const productSelected = state.listOfNfts.find((item) => item.id === id);
    return console.log(productSelected);
  },
};
