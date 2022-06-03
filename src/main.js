import { createApp } from 'vue'
import App from './App.vue'
import AppEng from './AppEng.vue'

// Import library oh-vue-icons 
import { OhVueIcon, addIcons } from "oh-vue-icons"
import * as icons from "oh-vue-icons/icons"

const vueIcons = Object.values({ ...icons })
addIcons(...vueIcons)

import './assets/css/index.css'

import './helpers/getLanguage.vue'

let selectorApp;

if ( localStorage.getItem('lang') == 'en' ) {
    selectorApp = AppEng;
} else {
    selectorApp = App;
}

createApp(selectorApp).component('v-icon', OhVueIcon).mount('#app')
