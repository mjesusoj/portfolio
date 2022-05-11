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
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img class="w-24 h-23 md:w-48 md:h-auto md:rounded-md rounded-full mx-auto" src="./assets/photo-mj.png" alt="Vue logo"  />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <h1 class="text-3xl text-sky-500 font-bold bg-clip-text">
                About Me
              </h1>
              <p class="text-sky-200 font-medium mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores accusamus debitis? 
                Doloremque possimus inventore ratione quidem fuga quod neque enim dolores at. 
                Ad laboriosam nostrum eligendi temporibus magnam sint.
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">
                Manuel Jesús Ojeda
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                Desarrollador web 👨‍💻
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </header>
  </div>
</template>

<script setup>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import Navbar from './components/Navbar.vue'
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
