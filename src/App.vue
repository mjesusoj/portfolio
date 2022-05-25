<template>
  <div class="md:container md:mx-auto">
    <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4 ...">
          <h1 class="text-4xl text-sky-500 font-bold bg-clip-text mb-4">
            MJesu's Portfolio 👨‍💻
          </h1>
          
          <Navbar />
        </div>

        <div class="col-span-4 col-end-6">
          <div class="columns-xl mt-5">
            <AboutMe />
          </div>
        </div>

        <div class="col-start-2 col-span-4">
          <Projects />
        </div>
        
        <div class="col-start-2 col-span-4 mt-5 mb-5">
          <p class="text-sky-200 font-medium mt-2">
              Todos los derechos reservados <br />
              Manuel Jesús Ojeda ©️ 2022
          </p>
          
          <Footer />
        </div>
      </div>
  </div>
</template>

<script setup>
  import Navbar from './components/ui/Navbar.vue'
  import AboutMe from './components/AboutMe.vue'
  import Projects from './components/Projects.vue'
  import Footer from './components/ui/Footer.vue'
</script>

<style>
  html { scroll-behavior: smooth }

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
