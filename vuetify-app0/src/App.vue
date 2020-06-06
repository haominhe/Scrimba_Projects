<template>
  <v-app>
    <v-content>
      <AppHome />
    </v-content>
  </v-app>
</template>

<script>
import AppHome from "./components/AppHome";

export default {
  name: "App",

  components: {
    AppHome
  },

  data: () => ({
    //
  })
};
</script>
