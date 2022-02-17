<template>
  <the-header></the-header>
  <main class="main-view">
    <router-view></router-view>
  </main>
  <footer></footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "App",
  components: { TheHeader },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  font-family: sans-serif;
}

.main-view {
  margin: 3rem;
}
footer {
  height: 2rem;
  background-color: red;
}
</style>
