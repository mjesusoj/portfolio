<template>
    <div id="projects">
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <h2 class="text-3xl text-sky-500 font-bold bg-clip-text">
                Projects 💻
            </h2>
            <p class="text-sky-200 font-medium mt-2">
                Here I show some of the projects I have done, using different technologies and frameworks.
            </p>
        </div>
        <div class="list gap-10 columns-1 xl:columns-3 bg-slate-800 text-sky-200 p-5 mt-4 md:mt-0">
            <div class="craftianosPage">
                <a href="https://craftianosmoney.com" target="_blank" rel="noopener noreferrer">
                    <h3 class="text-2xl text-sky-500 hover:text-sky-700 font-bold bg-clip-text">CraftianosMoney Page</h3>
                </a>
                <ul class="list-disc list-inside text-left p-3">
                    <li class="mt-2 italic">
                        It is the most complete project I have, since it became a personal challenge
                    </li>
                    <li class="mt-2">
                        Developed with <b>React.js</b> and <b>react-router</b> for routes manages 🔗
                    </li>
                    <li class="mt-2">
                        Use of frameworks <b>Bootstrap</b> and <b>SCSS</b> as a preprocessor ✅
                    </li>
                    <li class="mt-2">
                        Deploy it on <b>an independient hosting and custom domain</b> ✨
                    </li>
                    <li class="mt-2">
                        Implementation <b>SEO techniques</b> for the positioning on web search engines ✅
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
                        This project is include on the Udemy Course: <br />
                        <a class="text-orange-300 hover:text-orange-400 font-bold italic" 
                            href="https://www.udemy.com/course/vuejs-fh/" target="_blank" rel="noopener noreferrer">
                            Vue.js: De cero a experto
                        </a>
                    </li>
                    <li class="mt-2">
                        Developed with Vue.js and use <b>Vuex</b> for data managment ✅
                    </li>
                    <li class="mt-2">
                        The list of pokemons is collected from an external API and is displayed on a list, 
                        with the help of Vuex
                    </li>
                    <li class="mt-4">
                        Using FontAwesome to display custom icons, animations, 
                        in addition to including a font according to the game
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
                        Personal project to learn how to use Tailwind CSS for the first time 😍
                    </li>
                    <li class="mt-2">
                        Develop with React.js and use of react-router for routes managment ✅
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
                        Challenge of transforming an initial page with HTML and CSS to implementing it with Bootstrap
                    </li>
                    <li class="mt-2">
                        Custom fonts, use of the resource "Google Fonts"
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