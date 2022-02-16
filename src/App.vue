<template>
  <the-header></the-header>
  <main class="main-view">
    <router-view></router-view>
  </main>
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
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.main-view {
  margin: 3rem;
  height: 75vh;
}
</style>
