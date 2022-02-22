<template>
  <div class="itemlist-title">
    <h1>NFTs for sale</h1>
  </div>
  <section class="itemlist-list">
    <base-card v-for="nft of listOfNfts" :key="nft.id">
      <item-details
        :id="nft.id"
        :title="nft.title"
        :price="nft.price"
        :img="nft.img"
      ></item-details>
    </base-card>
  </section>
</template>

<script>
import ItemDetails from "./ItemDetails.vue";
export default {
  components: { ItemDetails },
  computed: {
    listOfNfts() {
      return this.$store.state.listOfNfts;
    },
  },
};
</script>

<style scoped>
.itemlist-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;
}
@media (min-width: 700px) {
  .itemlist-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 900px) {
  .itemlist-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1400px) {
  .itemlist-list {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 2000px) {
  .itemlist-list {
    height: 100vh;
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
