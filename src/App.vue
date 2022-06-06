<template>
  <div class="md:container md:mx-auto">
    <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4">
          <h1 class="text-4xl text-sky-500 font-bold bg-clip-text mb-4">
            MJesu's Portfolio <v-icon name="fc-rules" scale="2"/>
          </h1>

          <Navbar />
        </div>

        <div class="col-span-4 col-end-6">
          <div class="columns-xl mt-5">
            <AboutMe />
          </div>
        </div>

        <div class="col-start-2 col-span-4">
          <SoftSkills />
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
  import AboutMe from './components/es/AboutMe.vue'
  import Footer from './components/es/ui/Footer.vue'
  import Navbar from './components/es/ui/Navbar.vue'
  import Projects from './components/es/Projects.vue'
  import SoftSkills from './components/es/SoftSkills.vue'
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
