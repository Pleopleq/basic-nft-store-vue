<template>
  <div class="itemlist-title">
    <h1>NFTs for sale</h1>
  </div>
  <section>
    <base-card>
      <item-details
        :title="'Borpa'"
        :price="'0.5 ETH'"
        :img="'https://i.kym-cdn.com/entries/icons/original/000/037/171/cover2.jpg'"
      ></item-details>
    </base-card>
  </section>
</template>

<script>
import ItemDetails from "./ItemDetails.vue";
export default {
  components: { ItemDetails },
};
</script>
