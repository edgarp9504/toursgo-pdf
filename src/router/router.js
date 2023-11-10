import { createRouter, createWebHashHistory } from 'vue-router'



const routes = [
    {
        path: '/', 
        component: () => import(  '@/components/Formulario')
    },
    {
        path: '/tours',
         component: () => import(  '@/components/Formulario_tour')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router