export default {
  addProductToCart(state, productData) {
    const productInCartIndex = state.cart.items.findIndex(
      (ci) => ci.productId === productData.id
    );
    if (productInCartIndex >= 0) {
      state.cart.items[productInCartIndex].qty++;
    } else {
      const newItem = { ...productData };
      state.cart.items.push(newItem);
    }
    state.cart.qty++;
    state.cart.total += productData.price;
    console.log(state.cart);
  },
  removeProductFromCart(state, id) {
    const productInCartIndex = state.cart.items.findIndex(
      (itemInCart) => itemInCart.id === id
    );
    if (productInCartIndex >= 0) {
      return;
    }
    const prodData = state.cart.items[productInCartIndex];
    state.cart.items.splice(productInCartIndex, 1);
    state.cart.total -= prodData.price;
  },
};
