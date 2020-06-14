<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { icon: "mdi-widgets", text: "Dashboard", route: "/" },
      { icon: "mdi-tools", text: "Campaigns", route: "/campaigns" },
      { icon: "mdi-account", text: "Account", route: "/account" }
    ]
  })
};
</script>
<template>
  <nav>
    <v-app-bar app color="blue darken-4" dense dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="text-grey">DeepReach</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon router to="/account">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app color="blue darken-4" dark>
      <v-col>
        <v-list nav>
          <v-list-item
            v-for="(link, i) in links"
            :key="i"
            router
            :to="link.route"
          >
            <v-list-item-icon>
              <v-icon dark v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item> </v-list
      ></v-col>
    </v-navigation-drawer>
  </nav>
</template>
