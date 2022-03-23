<template>
  <section class="carousel-container">
    <div class="carousel">
      <div class="inner" ref="inner" :style="innerStyles">
        <slot> </slot>
      </div>
    </div>
  </section>

  <div class="carousel-buttons">
    <button>prev</button>
    <button @click="next">next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerStyles: {},
      step: "",
    };
  },
  mounted() {
    this.setStep();
  },
  methods: {
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalCards = this.$store.getters.itemsInCart;
      this.step = `${innerWidth / totalCards}px`;
    },
    next() {
      this.moveLeft();
    },
    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})`,
      };
    },
  },
};
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
  transition: transform 0.2s;
}

.carousel-buttons {
  display: flex;
  justify-content: center;
}
</style>
