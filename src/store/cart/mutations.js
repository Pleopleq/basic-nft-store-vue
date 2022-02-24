export default {
  addProductToCart(state, productData) {
    const newItem = { ...productData };
    state.cart.items.push(newItem);
    state.cart.qty++;
    state.cart.total += productData.price;
  },
  removeProductFromCart(state, id) {
    const productInCartIndex = state.cart.items.findIndex(
      (itemInCart) => itemInCart.id === id
    );
    const prodData = state.cart.items[productInCartIndex];
    state.cart.items.splice(productInCartIndex, 1);
    state.cart.qty -= 1;
    state.cart.total -= prodData.price;
  },
};
