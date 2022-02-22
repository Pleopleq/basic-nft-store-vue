<template>
  <div class="card-content">
    <h2>{{ title }}</h2>
    <img :src="img" alt="Borpa" />
    <h3>{{ price }}</h3>
    <div class="button-container">
      <button @click="onAddToCart">{{ addToCartTextBtn }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "img", "price", "id"],
  data() {
    return {
      isInCart: false,
    };
  },
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
      if (this.isInCart) {
        return (this.isInCart = !this.isInCart);
      }
      this.isInCart = !this.isInCart;
      this.$emit("item-added", this.id);
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
