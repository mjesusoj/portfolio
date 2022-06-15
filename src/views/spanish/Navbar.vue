<template>
  <div class="static">
    <div class="flex justify-center lg:float-right">
        <button 
            class='switch'
            id='switch'
            @click="switchLanguage"
          >
            <router-link to="/">
              <span>📘</span>
            </router-link>
            <router-link to="/eng">
              <span>🚀</span>
            </router-link>
        </button>
        <!-- <a
          class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-orange-300 hover:text-slate-900"
          href="#footer"
          >
            Change 🚩
        </a> -->
    </div>
    <nav class="flex sm:justify-center space-x-4 sm:mx-20">
      <a
        class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-orange-300 hover:text-slate-900"
        href="#"
        >
          Inicio <v-icon name="fc-home" scale="1.2"/>
      </a>
      <a
        class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-orange-300 hover:text-slate-900"
        href="#about-me"
        >
          Sobre mí <v-icon name="fc-about" scale="1.2"/>
      </a>
      <a
        class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-orange-300 hover:text-slate-900"
        href="#soft-skills"
        >
          Habilidades Blandas 🎯
      </a>
      <a
        class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-orange-300 hover:text-slate-900"
        href="#projects"
        >
          Proyectos 💻
      </a>
    </nav>
  </div>

</template>

<script>
    import '../../assets/css/language.css'

    export default {

    }
</script>

<style scoped>
    a {
        cursor: pointer;
    }
</style>