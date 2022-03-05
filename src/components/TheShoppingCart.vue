<template>
  <div class="cart-title"><h1>Shopping Cart</h1></div>
  <section class="cart-container">
    <div>
      <h2>Items</h2>
    </div>
    <div class="cart-items">
      <div v-for="item in cartItems" :key="item.id">
        <base-cart-item>
          <div class="cart-item">
            <h1>{{ item.title }}</h1>
            <img :src="item.img" alt="" />
            <p>{{ item.price }} {{ item.currency }}</p>
          </div></base-cart-item
        >
      </div>
    </div>
    <div class="cart-info">
      <p>Quantity: {{ itemsInCart }}</p>
      <p>Total: {{ totalPrice }} ETH</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      price: 0,
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartProductList;
    },
    itemsInCart() {
      return this.$store.getters.itemsInCart;
    },
    totalPrice() {
      return Number(this.$store.getters.cartTotalPrice).toFixed(1);
    },
  },
};
</script>

<style scoped>
.cart-title {
  text-align: center;
}
.cart-items {
  display: flex;
  justify-content: center;
}
.cart-container {
  height: 100vh;
  text-align: center;
}
</style>
