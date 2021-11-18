<template>
  <nav>
    <v-toolbar flat max-height="50px" dark>
      <v-app-bar-nav-icon
        class="white--text"
        @click="drawerHandler"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Projects</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="text-center mr-4 mb-2">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text dark v-bind="attrs" v-on="on" class="grey--text">
              Menu
              <v-icon right>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="link in links"
              :key="link.text"
              router
              :to="link.route"
            >
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center>
        <v-flex class="pt-2">
          <v-avatar class="mt-5 grey lighten-2" size="100">
            <img
              src="https://avatars.dicebear.com/api/bottts/:seed.svg"
              alt=""
            />
          </v-avatar>
          <p class="white--text text-center subheading mt-2">Akash Pai</p>
        </v-flex>
      </v-layout>
      <Popup />
      <v-list>
        <v-list-item
          v-for="item in links"
          :key="item.text"
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">{{
            item.text
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  name: "Navbar",
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "Projects", route: "/projects" },
        { icon: "mdi-account-box-multiple", text: "Team", route: "/team" },
      ],
    };
  },
  methods: {
    drawerHandler() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped></style>
