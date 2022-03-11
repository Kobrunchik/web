<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue';

/*export default {
  components: {
    Navbar
  }
}*/
</script>

<template>

  <Header/>
  <Navbar/>

  <div class="container-fluid bg-dark bg-gradient bg-opacity-10">
    <RouterView/>
  </div>


</template>

<style>

</style>
