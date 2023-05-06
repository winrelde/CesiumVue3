import { createRouter,createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'App',
        component: ()=>import('../components/HelloWorld.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
