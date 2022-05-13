<template>
    <div id="projects">
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <h2 class="text-3xl text-sky-500 font-bold bg-clip-text">
                Projects
            </h2>
            <p class="text-sky-200 font-medium mt-2">
                Aquí se muestran algunos de mis proyectos realizados, con diferentes tecnologías y frameworks.
            </p>
        </div>
        <div class="gap-10 columns-1 lg:columns-3 dark:bg-slate-800 text-sky-200 p-5">
            <div class="craftianosPage">
                <a href="https://craftianosmoney.com" target="_blank" rel="noopener noreferrer">
                    <h3 class="text-2xl text-sky-500 hover:text-sky-700 font-bold bg-clip-text">CraftianosMoney Page</h3>
                </a>
                <p class="font-medium mt-2">
                    Este proyecto me ha permitido conocer más de las tecnologías que se utilizan en el desarrollo de páginas web.
                    De hecho es el más completo que tengo, porque comenzó desde un desarrollo personal 
                    y se ha convertido en un reto, ya que en un principio estaba diseñada con HTML, CSS y JS.
                    Ahora en la actualidad, está diseñada con React.js, utilizando preprocesadores como SASS, 
                    react router para manejar las rutas dentro de la app, entre otras tecnologías.
                </p>
            </div>
            <div class="pokemonGame">
                <a href="https://pokemon-game-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <h3 class="text-2xl text-sky-500 hover:text-sky-700 font-bold bg-clip-text">Pokemon Game</h3>
                </a>
                <p class="font-medium mt-2">
                    Este proyecto pertenece al curso de Vue: De Cero a Experto de Udemy,
                    está desarrollado con Vue.js, manejo de rutas con Vue Router.
                    Además de usar Bootstrap como framework de CSS y uso de FontAwesome para los iconos.
                </p>
            </div>
            <div class="vacacionesCody">
                <h3>My First App with Tailwind</h3>
                <p class="font-medium mt-2"></p>
            </div>
            <div class="vacacionesCody">
                <h3>Vacaciones Cody</h3>
                <p class="font-medium mt-2"></p>
            </div>
            <div class="vacacionesCody">
                <h3>Servidor Test?? - TFG Grado Superior 2020</h3>
                <p class="font-medium mt-2"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'name'
    }
</script>

<style>

</style>