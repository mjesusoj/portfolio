<template>
    <div id="hobbies-es">
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <h2 class="text-3xl text-sky-500 font-bold bg-clip-text">
                Hobbies
            </h2>
            <p class="text-sky-200 font-medium mt-2">
                Estos son algunos hobbies que tengo y que me gusta hacer
            </p>
        </div>
        <div class="list gap-10 dark:bg-slate-800 text-sky-200 p-5 mt-4 md:mt-0">
            <span class="inline-grid grid-cols-2 xl:grid-cols-6 gap-10">
                <p>
                    <span class="md:align-top block">Escuchar música</span>
                    <v-icon name="co-apple-music" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Salud y Ejercicio</span>
                    <v-icon name="gi-health-normal" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Leer</span>
                    <v-icon name="fc-reading" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Ciberseguridad</span>
                    <v-icon name="md-security" scale="3"/>
                </p>
                <p>
                    <span class="md:align-top block">Privacidad</span>
                    <v-icon name="fc-privacy" scale="3"/>
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