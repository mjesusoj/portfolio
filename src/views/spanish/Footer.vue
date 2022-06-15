<template>
    <nav class="flex sm:justify-center space-x-4 mt-4">
      <a
        class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-orange-300 hover:text-slate-900"
        href="https://www.linkedin.com/in/mjesusoj"
        target="_blank" rel="noopener noreferrer"
        >
          Mi perfil en LinkedIn <v-icon class="icon-linkedin" name="fa-linkedin" />
      </a>
      <a
        class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-orange-300 hover:text-slate-900"
        href="https://github.com/mjesusoj/portfolio"
        target="_blank" rel="noopener noreferrer"
        >
          Proyecto en Github <v-icon class="icon-github" name="fa-github" />
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

    .icon-linkedin {
        color: #c2e4f6;
    }

    .icon-github {
        color: #f7f7f7;
    }
</style>