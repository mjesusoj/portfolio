<template>
  <div class="static">
    <!-- TODO: Create button to change language from eng to es and together -->
    <div class="flex justify-center lg:float-right">
        <button 
            class='switch'
            id='switch'
            @click="switchLanguage"
          >
            <span>📘</span>
            <span>🚀</span>
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
    </nav>
  </div>
</template>

<script>
    import '../../assets/css/language.css'

    export default {
        setup() {
            const switchLanguage = () => {
                const active = this.$switch
                console.log(active);
            }

            return {
              switchLanguage
            }
        }
        
    }
</script>

<style scoped>
    a {
        cursor: pointer;
    }
</style>