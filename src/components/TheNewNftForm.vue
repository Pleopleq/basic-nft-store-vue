<template>
  <section class="form-view">
    <h1>Add a new NFT!</h1>
    <div class="form-container">
      <form action="">
        <div>
          <label for="">Name</label>
        </div>
        <div><input type="text" /></div>
        <div>
          <label for="">Image</label>
        </div>
        <div><input type="text" /></div>
        <div>
          <label for="">Price</label>
        </div>
        <div><input type="number" /></div>
        <div><button>Submit</button></div>
      </form>
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
  justify-content: center;
  align-items: center;
  margin: 3rem;
}

.form-container {
  height: 100vh;
}
</style>
