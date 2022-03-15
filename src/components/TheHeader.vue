<template>
  <header>
    <div class="logo">
      <h1>NFT STORE</h1>
    </div>
    <nav>
      <ul>
        <li><router-link to="/items">Items</router-link></li>
        <li>
          <router-link to="/cart">Cart {{ itemsInCart }} </router-link>
        </li>
        <li><router-link to="/new-item">Add a new NFT</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    itemsInCart() {
      return this.$store.getters.itemsInCart;
    },
  },
};
</script>

<style scoped>
a,
a:visited {
  color: white;
  text-decoration: none;
}
a:hover {
  color: rgb(182, 157, 232);
}

header {
  display: flex;
  height: 12vh;
  justify-content: space-around;
  background-color: blueviolet;
  color: white;
}

.logo {
  display: flex;
  align-items: center;
}

.logo > h1 {
  margin: 0;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 2rem;
}

ul {
  display: flex;
  justify-content: space-around;
  width: 17rem;
  min-width: 2rem;
  padding: 0;
  list-style-type: none;
}
</style>
