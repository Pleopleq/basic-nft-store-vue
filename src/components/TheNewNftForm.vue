<template>
  <section class="form-view">
    <h1>Add a new NFT!</h1>
    <div class="form-container">
      <form action="">
        <div>
          <label for="name">Name</label>
        </div>
        <div><input type="text" class="form-input" /></div>
        <div>
          <label for="image">Image</label>
        </div>
        <div><input type="text" class="form-input" /></div>
        <div>
          <label for="price">Price</label>
        </div>
        <div><input type="text" class="form-input" /></div>
        <div><button class="form-submit">Submit</button></div>
      </form>
    </div>
    <div class="alert-container">
      <div>
        <p>Just use number inside the price input.</p>
      </div>
      <div>
        <p>Please fill all the inputs.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
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
