import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import library for icons
import { OhVueIcon, addIcons } from "oh-vue-icons"
import * as icons from "oh-vue-icons/icons"

const vueIcons = Object.values({ ...icons })
addIcons(...vueIcons)

import './assets/css/index.css'

createApp(App)
    .use(router)
    .component('v-icon', OhVueIcon)
    .mount('#app')
