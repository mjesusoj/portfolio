<template>
    <div id="projects">
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <h2 class="text-3xl text-sky-500 font-bold bg-clip-text">
                Projects
            </h2>
            <p class="text-sky-200 font-medium mt-2">
                Aquí se muestran algunos de mis proyectos realizados, utilizando diferentes tecnologías y frameworks.
            </p>
        </div>
        <div class="list gap-10 columns-1 lg:columns-3 dark:bg-slate-800 text-sky-200 p-5 mt-4 md:mt-0">
            <div class="craftianosPage">
                <a href="https://craftianosmoney.com" target="_blank" rel="noopener noreferrer">
                    <h3 class="text-2xl text-sky-500 hover:text-sky-700 font-bold bg-clip-text">CraftianosMoney Page</h3>
                </a>
                <p class="font-medium mt-2">
                    Este proyecto me ha permitido conocer más de las tecnologías que se utilizan en el desarrollo de páginas web.
                    De hecho es el más completo que tengo, porque comenzó desde un desarrollo personal 
                    y se ha convertido en un reto, ya que en un principio estaba diseñada con HTML, CSS y JS.
                    Ahora en la actualidad, está diseñada con React.js, utilizando preprocesadores como SASS, 
                    react router para manejar las rutas dentro de la página, entre otras tecnologías.
                </p>
            </div>
            <div class="pokemonGame">
                <a href="https://pokemon-game-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <h3 class="text-2xl text-sky-500 hover:text-sky-700 font-bold bg-clip-text">Pokemon Game</h3>
                </a>
                <p class="font-medium mt-2">
                    Este proyecto pertenece al curso de 
                    <a class="text-amber-300 hover:text-amber-500 font-bold" href="https://www.udemy.com/course/vuejs-fh/" target="_blank" rel="noopener noreferrer">
                        Vue.js: De cero a experto
                    </a>,
                    está desarrollado con Vue.js, manejo de rutas con Vue Router.
                    Además de usar Bootstrap como framework de CSS y de FontAwesome para los iconos.
                </p>
            </div>
            <div class="app-tailwind">
                <a href="https://github.com/mjesusoj/my-firstapp-tailwind" target="_blank" rel="noopener noreferrer">
                    <h3 class="text-2xl text-sky-500 hover:text-sky-700 font-bold bg-clip-text">My First App with Tailwind</h3>
                </a>
                <p class="font-medium mt-2">
                    Proyecto sencillo, implementando por primera vez Tailwind CSS, con React.js, 
                    utilizando manejo de rutas con React Router, y utilizando una librería de Tailwind para el formulario.
                </p>
            </div>
            <div class="vacacionesCody">
                <a href="https://mjesusoj.github.io/vacaciones-cody/" target="_blank" rel="noopener noreferrer">
                    <h3 class="text-2xl text-sky-500 hover:text-sky-700 font-bold bg-clip-text">Vacaciones Cody</h3>
                </a>
                <p class="font-medium mt-2">
                    Con este proyecto se partía de una base construida con HTML y CSS, 
                    para más tarde aplicarle Bootstrap como framework de CSS, 
                    botón para cambiar de Modo oscuro/claro y para las fuentes, el recurso gratuito "Google Fonts".
                </p>
            </div>
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
</style>