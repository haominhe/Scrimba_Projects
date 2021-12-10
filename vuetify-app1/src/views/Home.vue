<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TopNav msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue'

export default {
  name: 'Home',
  components: {
    TopNav
  }
}
</script>
