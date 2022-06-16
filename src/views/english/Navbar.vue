<template>
  <div class="static">
    <!-- TODO: Create button to change language from eng to es and together -->
    <div class="flex justify-center lg:float-right">
        <button 
            class='switch'
            :class="{ active: isActive }"
            ref="isActive"
            id='switch'
          >
            <router-link to="/" @click="englishBtn">
              <img src="../../assets/spain.svg.png" width="50" height="50" alt="Bandera España">
            </router-link>
            <router-link to="/eng">
              <span>ENG</span>
            </router-link>
        </button>
    </div>
    <nav class="flex sm:justify-center space-x-4 sm:mx-20">
        <a
          class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-orange-300 hover:text-slate-900"
          href="#"
          >
            Home <v-icon name="fc-home" scale="1.2"/>
        </a>
        <a
          class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-orange-300 hover:text-slate-900"
          href="#about-me"
          >
            About Me <v-icon name="fc-about" scale="1.2"/>
        </a>
        <a
          class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-orange-300 hover:text-slate-900"
          href="#soft-skills"
          >
            Soft Skills 🎯
        </a>
        <a
          class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-orange-300 hover:text-slate-900"
          href="#projects"
          >
            Projects 💻
        </a>
        <!-- TODO: Add hobbies button -->
    </nav>
  </div>
</template>

<script>
    import { ref } from 'vue'
    import '../../assets/css/language.css'

    export default {
        setup() {
            let isActive = ref(true)

            const englishBtn = () =>  {
                isActive.value = false
            }

            return {
              isActive,
              englishBtn
            }
        }
    }
</script>

<style scoped>
    a {
        cursor: pointer;
    }
</style>