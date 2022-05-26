<template>
    <div id="projects">
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <h2 class="text-3xl text-sky-500 font-bold bg-clip-text">
                Projects 💻
            </h2>
            <p class="text-sky-200 font-medium mt-2">
                Aquí muestro algunos de proyectos que he realizado, utilizando diferentes tecnologías y frameworks.
            </p>
        </div>
        <div class="list gap-10 columns-1 lg:columns-3 dark:bg-slate-800 text-sky-200 p-5 mt-4 md:mt-0">
            <div class="craftianosPage">
                <a href="https://craftianosmoney.com" target="_blank" rel="noopener noreferrer">
                    <h3 class="text-2xl text-sky-500 hover:text-sky-700 font-bold bg-clip-text">CraftianosMoney Page</h3>
                </a>
                <!-- <p class="font-medium mt-2">
                    Este proyecto me ha permitido conocer más de las tecnologías que se utilizan en el desarrollo de páginas web.
                </p> -->
                <ul class="list-disc list-inside text-left p-3">
                    <li class="mt-1">Es el proyecto <i>que más completo tengo, ya que se convirtió en un reto personal</i></li>
                    <li class="mt-1">Desarrollado con <b>React.js</b> y uso de <b>react-router</b> para el manejo de rutas ✅</li>
                    <li class="mt-1">Uso de frameworks CSS como <b>Bootstrap</b> y <b>SCSS</b> como preprocesador ✅</li>
                    <li class="mt-1">Implementación de <b>técnicas SEO</b> para el posicionamiento en buscadores ✅</li>
                </ul>
                <div class="tech mt-2">
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">HTML</button>
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">CSS</button>
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">JS</button>
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">React JS</button>
                </div>
            </div>
            <div class="pokemonGame">
                <a href="https://pokemon-game-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <h3 class="text-2xl text-sky-500 hover:text-sky-700 font-bold bg-clip-text">Pokemon Game</h3>
                </a>
                <p class="font-medium mt-2">
                    Este proyecto pertenece al curso de 
                    <a class="text-orange-300 hover:text-orange-400 font-bold" href="https://www.udemy.com/course/vuejs-fh/" target="_blank" rel="noopener noreferrer">
                        Vue.js: De cero a experto de Udemy
                    </a>,
                    es un pequeño juego de pokemon, el cual está desarrollado con Vue.js, manejo de rutas con Vue Router.
                    El listado de pokemons, se recogen de una API externa y se muestran en una lista, con la ayuda de Vuex.
                    Además de usar Bootstrap como framework de CSS, FontAwesome para los iconos, animaciones y fuentes personalizadas.
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

    /* color: #42b983; */
</style>