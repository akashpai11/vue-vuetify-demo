<template>
  <v-app>
    <Navbar id="nav" />
    <v-main class="ml-2">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style lang="scss">
#app {
  font-family: "Poppins";

  color: #2c3e50;
  background-color: #2c3e50;
}

#nav {
  margin-bottom: 10px;
}
</style>
