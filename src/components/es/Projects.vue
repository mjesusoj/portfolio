<template>
    <div id="projects">
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <h2 class="text-3xl text-sky-500 font-bold bg-clip-text">
                Proyectos 💻
            </h2>
            <p class="text-sky-200 font-medium mt-2">
                Aquí muestro algunos de proyectos que he realizado, utilizando diferentes tecnologías y frameworks.
            </p>
        </div>
        <div class="list gap-10 columns-1 xl:columns-3 dark:bg-slate-800 text-sky-200 p-5 mt-4 md:mt-0">
            <div class="craftianosPage">
                <a href="https://craftianosmoney.com" target="_blank" rel="noopener noreferrer">
                    <h3 class="text-2xl text-sky-500 hover:text-sky-700 font-bold bg-clip-text">CraftianosMoney Page</h3>
                </a>
                <ul class="list-disc list-inside text-left p-3">
                    <li class="mt-2">Es el proyecto <i>que más completo tengo, ya que se convirtió en un reto personal</i></li>
                    <li class="mt-2">Desarrollado con <b>React.js</b> y uso de <b>react-router</b> para el manejo de rutas 🔗</li>
                    <li class="mt-2">Uso de frameworks CSS como <b>Bootstrap</b> y <b>SCSS</b> como preprocesador ✅</li>
                    <li class="mt-2">Desplegado en <b>hosting independiente y dominio personalizado</b> ✨</li>
                    <li class="mt-2">Implementación de <b>técnicas SEO</b> para el posicionamiento en buscadores webs ✅</li>
                </ul>
                <div class="tech mt-2">
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        HTML <v-icon name="vi-file-type-html" />
                    </button>
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        CSS <v-icon name="vi-file-type-css" />
                    </button>
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        SASS <v-icon name="vi-file-type-sass" />
                    </button>
                    <button class="py-2 px-3 mx-1 mt-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        Bootstrap <v-icon name="fa-bootstrap" />
                    </button>
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        JS <v-icon name="fa-js" />
                    </button>
                    <button class="py-2 px-3 mx-1 mt-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        React <v-icon name="vi-file-type-reactjs" />
                    </button>
                </div>
            </div>

            <div class="pokemonGame">
                <a href="https://pokemon-game-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <h3 class="text-2xl text-sky-500 hover:text-sky-700 font-bold bg-clip-text pt-2">Pokemon Game</h3>
                </a>
                <ul class="list-disc list-inside text-left p-3">
                    <li class="mt-2">
                        Este proyecto está incluido en el curso de Udemy: <br />
                        <a class="text-orange-300 hover:text-orange-400 font-bold" 
                            href="https://www.udemy.com/course/vuejs-fh/" target="_blank" rel="noopener noreferrer">
                            Vue.js: De cero a experto
                        </a>
                    </li>
                    <li class="mt-2">
                        Desarrollado con Vue.js y uso de <b>Vuex</b> para el manejo de datos ✅
                    </li>
                    <li class="mt-2">
                        El listado de pokemons se recoge de una API externa
                        y se muestra en una lista, <br /> con la ayuda de Vuex
                    </li>
                    <li class="mt-4">
                        Uso de FontAwesome para mostrar iconos personalizados, animaciones, 
                        además de incluir una fuente acorde al juego
                    </li>
                </ul>
                <div class="tech mt-2">
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        HTML <v-icon name="vi-file-type-html" />
                    </button>
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        CSS <v-icon name="vi-file-type-css" />
                    </button>
                    <button class="py-2 px-3 mx-1 mt-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        Bootstrap <v-icon name="fa-bootstrap" />
                    </button>
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        JS <v-icon name="fa-js" />
                    </button>
                    <button class="py-2 px-3 mx-1 mt-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        Vue <v-icon name="vi-file-type-vue" />
                    </button>
                    <button class="py-2 px-3 mx-1 mt-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        Font Awesome <v-icon name="si-fontawesome" />
                    </button>
                </div>
            </div>

            <div class="app-tailwind">
                <a href="https://my-firstapp-tailwind.vercel.app" target="_blank" rel="noopener noreferrer">
                    <h3 class="text-2xl text-sky-500 hover:text-sky-700 font-bold bg-clip-text pt-2">Learning Tailwind</h3>
                </a>
                <ul class="list-disc list-inside text-left p-3">
                    <li class="mt-2">
                        Proyecto personal para aprender a usar Tailwind CSS por primera vez 😍
                    </li>
                    <li class="mt-2">
                        Desarrollado con React.js y uso de <b>react-router</b> para el manejo de rutas ✅
                    </li>
                </ul>
                <div class="tech mt-2 mb-4">
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        HTML <v-icon name="vi-file-type-html" />
                    </button>
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        CSS <v-icon name="vi-file-type-css" />
                    </button>
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        JS <v-icon name="fa-js" />
                    </button>
                    <button class="py-2 px-3 mx-1 mt-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        React <v-icon name="vi-file-type-reactjs" />
                    </button>
                    <button class="py-2 px-3 mx-1 mt-2 lg:mt-0 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        Tailwind CSS <v-icon name="si-tailwindcss" />
                    </button>
                </div>
            </div>

            <div class="vacacionesCody">
                <a href="https://mjesusoj.github.io/vacaciones-cody/" target="_blank" rel="noopener noreferrer">
                    <h3 class="text-2xl text-sky-500 hover:text-sky-700 font-bold bg-clip-text">Vacaciones Cody</h3>
                </a>
                <ul class="list-disc list-inside text-left p-3">
                    <li class="mt-2">
                        Reto de transformar una página inicial con HTML y CSS a implementarla con Bootstrap
                    </li>
                    <li class="mt-2">
                        Implementación de fuentes personalizadas, uso del recurso "Google Fonts"
                    </li>
                </ul>
                <div class="tech mt-2">
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        HTML <v-icon name="vi-file-type-html" />
                    </button>
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        CSS <v-icon name="vi-file-type-css" />
                    </button>
                    <button class="py-2 px-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        JS <v-icon name="fa-js" />
                    </button>
                    <button class="py-2 px-3 mx-1 mt-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        Bootstrap <v-icon name="fa-bootstrap" />
                    </button>
                    <button class="py-2 px-3 mx-1 mt-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        Font Aw <v-icon name="si-fontawesome" />
                    </button>
                </div>
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