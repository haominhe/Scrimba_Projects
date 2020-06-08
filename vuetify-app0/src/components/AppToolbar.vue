<template>
  <v-card color="grey lighten-4" flat height="100px" tile>
    <v-toolbar dense color="blue lighten-4" height="80px">
      <v-app-bar-nav-icon color="indigo" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <router-link class="routerLink" to="/">
        <v-toolbar-title class="indigo--text">Software Developer</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>




      <v-badge left >
        <span slot="badge" style="color:indigo">6</span>
        <v-icon color="grey lighten-1" large>mdi-account-circle</v-icon>
      </v-badge>




      <v-btn class="ma-2" outlined color="indigo">
        <v-icon>mdi-magnify</v-icon>About
      </v-btn>

      <router-link class="routerLink" to="/projects">
        <v-btn class="ma-2" outlined color="indigo">
          <v-icon>mdi-heart</v-icon>Projects
        </v-btn>
      </router-link>

      <router-link class="routerLink" to="/contact">
        <v-btn class="ma-2" outlined color="indigo">
          <v-icon>mdi-dots-vertical</v-icon>Contact
        </v-btn>
      </router-link>

      <div class="hidden-md-and-up">
        <v-navigation-drawer v-model="drawer" absolute temporary height="200px">
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </div>
    </v-toolbar>
  </v-card>
</template>





<script>
export default {
  data() {
    return {
      drawer: null,

      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-comment-multiple-outline" }
      ]
    };
  }
};
</script>



<style>
.routerLink {
  color: indigo;
  text-decoration: none;
}
</style>




