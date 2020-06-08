<template>
  <div id="app">
    <app-toolbar></app-toolbar>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppToolbar from "./components/AppToolbar";
import AppFooter from "./components/AppFooter";
export default {
  components: { AppToolbar, AppFooter }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: indigo;
}
</style>
