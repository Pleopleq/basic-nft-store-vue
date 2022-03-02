<template>
  <div class="cart-title"><h1>Shopping Cart</h1></div>
  <section class="cart-container">
    <div>
      <h2>Items</h2>
    </div>
    <div class="cart-items">
      <div v-for="items in cartItems" :key="items.id">
        <h1>{{ items.title }}</h1>
      </div>
    </div>
    <div class="cart-info">
      <p>Quantity: 0</p>
      <p>Total: 0</p>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartProductList;
    },
  },
};
</script>

<style scoped>
.cart-title {
  text-align: center;
}
.cart-container {
  height: 100vh;
  text-align: center;
}
</style>
