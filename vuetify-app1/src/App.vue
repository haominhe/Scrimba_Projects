<template>
  <v-app>
    <v-content>
      <TopNav />
    </v-content>
  </v-app>
</template>

<script>
import TopNav from "./components/TopNav";

export default {
  name: "App",

  components: {
    TopNav
  },

  data: () => ({
    //
  })
};
</script>
