<template>
  <section class="carousel-container">
    <div class="carousel">
      <div class="inner">
        <slot> </slot>
      </div>
    </div>
  </section>

  <div class="carousel-buttons">
    <button>prev</button>
    <button>next</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel-container {
  display: flex;
  justify-content: center;
}
.carousel {
  width: 320px;
  overflow: hidden;
}

.inner {
  white-space: nowrap;
  margin-right: 10px;
  display: inline-flex;
}

.carousel-buttons {
  display: flex;
  justify-content: center;
}
</style>
