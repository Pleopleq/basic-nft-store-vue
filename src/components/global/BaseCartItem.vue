<template>
  <div class="cart-item"><slot></slot></div>
</template>

<script>
export default {};
</script>

<style scoped>
.cart-item {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  border: 1px solid black;
}
</style>
