<template>
    <nav class="flex sm:justify-center space-x-4">
      <button
        class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-slate-100 hover:text-slate-900"
        @click="btnHome"
        >
          Home
      </button>
      <button
        class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-slate-100 hover:text-slate-900"
        >
          About Me
      </button>
      <button
        class="rounded-lg px-3 py-2 text-sky-500 font-bold hover:bg-slate-100 hover:text-slate-900"
        >
          Projects
      </button>
    </nav>
</template>

<script>
    export default {
        methods: {
            btnHome() {
                console.log('hello');
            }
        }
    }
</script>

<style scoped>
    
</style>