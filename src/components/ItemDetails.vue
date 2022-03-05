<template>
  <div class="card-content">
    <h2>{{ title }}</h2>
    <img :src="img" alt="Borpa" />
    <h3>{{ price }} {{ currency }}</h3>
    <div class="button-container">
      <button @click="onAddToCart" v-if="!isInCart">
        {{ addToCartTextBtn }}
      </button>
      <button @click="onDeleteFromCart" v-else>
        {{ addToCartTextBtn }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "img", "price", "id", "currency", "isInCart"],
  computed: {
    addToCartTextBtn() {
      if (this.isInCart) {
        return "Remove from cart";
      }
      return "Add to cart";
    },
  },
  methods: {
    onAddToCart() {
      this.$store.dispatch("addProductToCart", {
        title: this.title,
        img: this.img,
        price: this.price,
        currency: this.currency,
        id: this.id,
        isInCart: this.isInCart,
      });
      this.isItemInCart();
    },
    onDeleteFromCart() {
      this.$store.dispatch("removeProductFromCart", this.id);
      this.isItemInCart();
    },
    isItemInCart() {
      this.$store.dispatch("isItemInCart", this.id);
    },
  },
};
</script>

<style>
.itemlist-title {
  text-align: center;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

img {
  display: block;
  height: 264px;
  width: 264px;
}

.button-container {
  margin: 1rem;
}

.button-container > button {
  border: none;
  background-color: rebeccapurple;
  color: white;
  padding: 0.8rem;
  border-radius: 1rem;
}
</style>
