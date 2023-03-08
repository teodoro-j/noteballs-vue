<template>
  <NavBar />
  <!-- <RouterLink to="/" class="button">Notes</RouterLink>
  <span> | </span>
  <RouterLink to="/stats" class="button">Stats</RouterLink> -->
  <RouterView />
</template>


<script setup>
import NavBar from './components/Layout/NavBar.vue';
</script>

<style>
@import 'bulma\css\bulma.min.css';
</style>
