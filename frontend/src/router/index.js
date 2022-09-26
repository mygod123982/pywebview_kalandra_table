import * as vueRouter from 'vue-router'

const tableInfos = () => import('@/components/tableInfos.vue')

const routes = [
    {
        path: '/',
        component: tableInfos
    }
]


export const router = vueRouter.createRouter({
    history: vueRouter.createWebHashHistory(),
    routes
})

export default router