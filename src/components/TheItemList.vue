<template>
  <div class="itemlist-title">
    <h1>NFTs for sale</h1>
  </div>
  <section class="itemlist-list">
    <base-card v-for="nft of listOfNfts" :key="nft.id">
      <item-details
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
  data() {
    return {
      listOfNfts: [
        {
          id: "a1",
          title: "Borpa #01",
          price: "0.5 ETH",
          img: "https://i.kym-cdn.com/photos/images/facebook/002/143/871/68e.png",
        },
        {
          id: "a2",
          title: "Borpa #02",
          price: "1.2 ETH",
          img: "https://i.redd.it/zc0h1a4ofzt71.png",
        },
        {
          id: "a3",
          title: "Borpa #03",
          price: "1.0 ETH",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksZ6IG11nlwGWelAqXBUIBzsTNNAjt2_67g&usqp=CAU",
        },
        {
          id: "a3",
          title: "Borpa #03",
          price: "1.0 ETH",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksZ6IG11nlwGWelAqXBUIBzsTNNAjt2_67g&usqp=CAU",
        },
        {
          id: "a3",
          title: "Borpa #03",
          price: "1.0 ETH",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksZ6IG11nlwGWelAqXBUIBzsTNNAjt2_67g&usqp=CAU",
        },
        {
          id: "a3",
          title: "Borpa #03",
          price: "1.0 ETH",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksZ6IG11nlwGWelAqXBUIBzsTNNAjt2_67g&usqp=CAU",
        },
        {
          id: "a3",
          title: "Borpa #03",
          price: "1.0 ETH",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksZ6IG11nlwGWelAqXBUIBzsTNNAjt2_67g&usqp=CAU",
        },
      ],
    };
  },
};
</script>

<style scoped>
.itemlist-list {
  display: grid;
  gap: 22px;
  grid-template-rows: 28rem;
  grid-template-columns: 1fr;
}
@media (min-width: 600px) {
  .itemlist-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 900px) {
  .itemlist-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1200px) {
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
