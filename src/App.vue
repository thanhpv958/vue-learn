<template>
  <div id="app" class="container">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/Layout/Navbar";
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
<style>
</style>
