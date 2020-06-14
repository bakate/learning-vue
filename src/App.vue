<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  },

  data: () => ({
    //
  })
};
</script>
<template>
  <v-app class="primary">
    <Navbar />
    <v-main>
      <v-container class="my-5">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
