import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/spanish/Home.vue')
    },
    {
        path: '/eng',
        name: 'English App',
        component: () => import(/* webpackChunkName: "english-app" */ '../views/english/Home.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router