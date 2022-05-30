import { createApp } from 'vue'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import { FcRules, FcAbout, ViFileTypeHtml, ViFileTypeCss, ViFileTypeReactjs, ViFileTypeVue } from "oh-vue-icons/icons"
import * as FaIcons from "oh-vue-icons/icons/fa"

const Fa = Object.values({ ...FaIcons });
addIcons(FcRules, FcAbout, ViFileTypeHtml, ViFileTypeCss, ViFileTypeReactjs, ViFileTypeVue, ...Fa);

import './assets/css/index.css'

createApp(App).component('v-icon', OhVueIcon).mount('#app')
