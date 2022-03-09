<template>
  <div class="cart-title"><h1>Shopping Cart</h1></div>
  <section class="cart-container">
    <div v-if="cartItems.length > 0">
      <h2>Items</h2>
      <div class="cart-items">
        <the-cart-carrousel>
          <div v-for="item in cartItems" :key="item.id">
            <base-cart-item>
              <div class="cart-item">
                <h1>{{ item.title }}</h1>
                <img :src="item.img" alt="" class="cart-img" />
                <p>{{ item.price }} {{ item.currency }}</p>
              </div></base-cart-item
            >
          </div>
        </the-cart-carrousel>
      </div>
      <div class="cart-info">
        <p>Quantity: {{ itemsInCart }}</p>
        <p>Total: {{ totalPrice }} ETH</p>
      </div>
    </div>
    <div v-else>
      <h2>Add items to your cart</h2>
    </div>
  </section>
</template>

<script>
import TheCartCarrousel from "./TheCartCarrousel.vue";

export default {
  components: { TheCartCarrousel },
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

.cart-container {
  height: 100vh;
  text-align: center;
}

.cart-img {
  width: 40px;
  height: 40px;
}
</style>
