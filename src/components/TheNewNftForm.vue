<template>
  <section class="form-view">
    <h1>Add a new NFT!</h1>
    <div class="form-container">
      <form @submit.prevent="addProductToStore">
        <div>
          <label for="name">Name</label>
        </div>
        <div>
          <input type="text" class="form-input" v-model="name" />
          {{ name }}
        </div>
        <div>
          <label for="image">Image</label>
        </div>
        <div>
          <input type="text" class="form-input" v-model="image" />
          {{ image }}
        </div>
        <div>
          <label for="price">Price</label>
        </div>
        <div>
          <input type="number" class="form-input" v-model.number="price" />
          {{ price }}
        </div>
        <div><button class="form-submit">Submit</button></div>
      </form>
    </div>
    <div>
      <div v-if="isNegativeNumbers" class="alert-container">
        <p>Just use positive numbers inside the price.</p>
      </div>
      <div v-else-if="isInputsEmpty" class="alert-container">
        <p>Please fill all the inputs.</p>
      </div>
      <div v-else></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      image: "",
      price: 0,
      id: 1,
      isInputsEmpty: false,
      isNegativeNumbers: false,
    };
  },
  methods: {
    addProductToStore() {
      if (this.name === "" || this.image === "") {
        return (this.isInputsEmpty = true);
      }
      if (this.price < 0) {
        return (this.isNegativeNumbers = true);
      }

      this.id = this.id * 2;
      this.$store.dispatch("addProductToStore", {
        id: this.id,
        title: this.name,
        image: this.image,
        price: this.price,
        currency: "ETH",
        isInCart: false,
      });
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
.form-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  height: 100vh;
}

.form-input {
  margin: 0.5rem 0 0.7rem 0;
  padding: 0.3rem;
}

.form-submit {
  width: 100%;
}

.alert-container {
  text-align: center;
  background-color: #e89090;
  color: #ba2626;
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 24px;
}
</style>
