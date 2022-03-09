<template>
  <div class="cart-item"><slot></slot></div>
</template>

<script>
export default {};
</script>

<style scoped>
.cart-item {
  margin-right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  border: 1px solid black;
}
</style>
