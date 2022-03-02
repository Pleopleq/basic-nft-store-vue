import { createStore } from "vuex";
import rootGetters from "./getters";
import cartModule from "./cart/index";

const store = createStore({
  modules: { cart: cartModule },
  state() {
    return {
      listOfNfts: [
        {
          id: "a1",
          title: "Borpa #01",
          price: 0.5,
          currency: "ETH",
          img: "https://i.kym-cdn.com/photos/images/facebook/002/143/871/68e.png",
          isInCart: false,
        },
        {
          id: "a2",
          title: "Borpa #02",
          price: 1.2,
          currency: "ETH",
          img: "https://i.redd.it/zc0h1a4ofzt71.png",
          isInCart: false,
        },
        {
          id: "a3",
          title: "Borpa #03",
          price: 1.1,
          currency: "ETH",
          img: "https://pbs.twimg.com/profile_images/1478599117182013443/JC6UMXhH.jpg",
          isInCart: false,
        },
        {
          id: "a4",
          title: "Borpa #04",
          price: 1.0,
          currency: "ETH",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksZ6IG11nlwGWelAqXBUIBzsTNNAjt2_67g&usqp=CAU",
          isInCart: false,
        },
      ],
    };
  },
  getters: rootGetters,
});

export default store;
