<template>
  <div class="md:container md:mx-auto">
    <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4">
          <h1 class="text-4xl text-sky-500 font-bold bg-clip-text mb-4">
            Portfolio MJ <v-icon name="fc-rules" scale="2"/>
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

        <div class="col-start-2 col-span-4">
          <Hobbies />
        </div>
        
        <div class="col-start-2 col-span-4 mt-5 mb-5">
          <p class="text-sky-200 font-medium mt-2">
              All rights reserved <br />
              Manuel Jesus Ojeda
              <v-icon name="ri-copyright-fill" /> 2022
          </p>
          
          <Footer />
        </div>
      </div>
  </div>
</template>

<script setup>
  import AboutMe from './AboutMe.vue'
  import Footer from './Footer.vue'
  import Hobbies from './Hobbies.vue'
  import Navbar from '../../components/NavbarEng.vue'
  import Projects from './Projects.vue'
  import SoftSkills from './SoftSkills.vue'
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
