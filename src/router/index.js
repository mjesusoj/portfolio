import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/spanish/Home.vue')
    },
    ...['/sobre-mi', '/habilidades-blandas', '/proyectos', '/hobbies-es'].map(path => ({
        path,
        component: () => import(/* webpackChunkName: "home" */ '../views/spanish/Home.vue')
    })),
    {
        path: '/eng',
        name: 'english-app',
        component: () => import(/* webpackChunkName: "english-app" */ '../views/english/Home.vue')
    },
    ...['/about-me', '/soft-skills', '/projects', '/hobbies'].map(path => ({
        path,
        component: () => import(/* webpackChunkName: "home" */ '../views/english/Home.vue')
    })),
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router