<template>
  <div class="card-content">
    <h2>{{ title }}</h2>
    <img :src="img" alt="Borpa" />
    <h3>{{ price }}</h3>
    <div>
      <button>Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "img", "price"],
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
</style>
