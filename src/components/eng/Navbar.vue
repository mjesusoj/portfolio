<template>
    <nav class="flex sm:justify-center space-x-4">
      <a
        class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-orange-400 hover:text-slate-900"
        href="#"
        >
          Home <v-icon name="fc-home" scale="1.2"/>
      </a>
      <a
        class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-orange-400 hover:text-slate-900"
        href="#about-me"
        >
          About Me <v-icon name="fc-about" scale="1.2"/>
      </a>
      <a
        class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-orange-400 hover:text-slate-900"
        href="#soft-skills"
        >
          Soft Skills 🎯
      </a>
      <a
        class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-orange-400 hover:text-slate-900"
        href="#projects"
        >
          Projects 💻
      </a>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    a {
        cursor: pointer;
    }
</style>