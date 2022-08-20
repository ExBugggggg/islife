import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'home',
        meta: {
            title: 'Home'
        },
        component: () => import('@views/Home/HomeView.vue')
    }, {
        path: '/Album',
        name: 'album',
        meta: {
            title: 'Album'
        },
        component: () => import('@views/Album/AlbumView.vue')
    }, {
        path: '/Archive',
        name: 'archive',
        meta: {
            title: 'Archive'
        },
        component: () => import('@views/Archive/ArchiveView.vue')
    }, {
        path: '/Category',
        name: 'category',
        meta: {
            title: 'Category'
        },
        component: () => import('@views/Category/CategoryView.vue')
    }, {
        path: '/Plan',
        name: 'plan',
        meta: {
            title: 'Plan'
        },
        component: () => import('@views/Plan/PlanView.vue')
    }, {
        path: '/Tags',
        name: 'tags',
        meta: {
            title: 'Tags'
        },
        component: () => import('@views/Tags/TagsView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
