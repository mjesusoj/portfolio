<template>
  <header>
    <Navbar />
    <img class="bg-clip-border" alt="Vue logo" src="./assets/logo.png" />
    <h1 class="text-5xl text-sky-500 font-bold bg-clip-text text-transparent">
      Hello world!
    </h1>
  </header>
  <!-- <HelloWorld /> -->
</template>

<script setup>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import Navbar from './components/Navbar.vue'
  /* import HelloWorld from './components/HelloWorld.vue' */
</script>

<style>
  body {
    background:#282c34;
    text-align: center;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
  }
</style>
