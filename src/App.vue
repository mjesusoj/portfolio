<template>
  <div class="md:container md:mx-auto">
    <header>
      <div class="columns-auto">
        <h1 class="text-4xl text-sky-500 font-bold bg-clip-text mb-4">
          MJesu's Portfolio
        </h1>
        
        <Navbar />
      </div>
      <div class="columns-xl mt-5">
        <AboutMe />
      </div>
    </header>
  </div>
</template>

<script setup>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import Navbar from './components/Navbar.vue'
  import AboutMe from './components/AboutMe.vue'
</script>

<style>
  body {
    text-align: center;
    background:#282c34;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
  }
</style>
