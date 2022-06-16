<template>
  <div class="static">
    <div class="flex justify-center lg:float-right">
        <button 
            class='switch'
            :class="{ isActive }"
            ref="isActive"
            id='switch'
          >
            <router-link to="/">
              <span>ES</span>
            </router-link>
            <router-link to="/eng" @click="englishBtn">
              <img src="../../assets/united-kingdom.svg.png" width="50" height="50" alt="Bandera Reino Unido">
            </router-link>
        </button>
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
      <!-- TODO: Add hobbies button -->
    </nav>
  </div>

</template>

<script>
    import { onMounted, ref } from 'vue'
    import '../../assets/css/language.css'

    export default {
        setup() {
            let isActive = ref(false)
            
            const englishBtn = () =>  {
                isActive.value = true
            }

            onMounted( () => {
              console.log('componente montado');
              isActive.value = false
            })
            
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