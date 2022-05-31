<template>
    <div id="projects">
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <h2 class="text-3xl text-sky-500 font-bold bg-clip-text">
                Skills 🎯
            </h2>
            <p class="text-sky-200 font-medium mt-2">
                Estas son algunas tecnologías o habilidades que domino 👇
            </p>
        </div>
        <div class="list gap-10 dark:bg-slate-800 text-sky-200 p-5 mt-4 md:mt-0">
            <span class="inline-grid grid-cols-2 md:grid-cols-5 gap-10">
                <p>
                    <span class="md:align-top block">HTML </span>
                    <v-icon class="object-top" name="vi-file-type-html" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">CSS </span>
                    <v-icon name="vi-file-type-css" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">JavaScript </span>
                    <v-icon name="fa-js" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">React.js </span>
                    <v-icon name="vi-file-type-reactjs" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Vue.js </span>
                    <v-icon name="vi-file-type-vue" scale="3"/>
                </p>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'name'
    }
</script>

<style scoped>
    .list > div {
        margin-top: 3%;
    }

    /* color: #42b983; */
</style>