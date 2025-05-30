import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cart from "@/views/Cart.vue";
import Profile from "@/views/Profile.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },

        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },

        {
            path: '/profile',
            name: 'profile',
            component: Profile,
        },

        {
            path: '/product/:name',
            name: 'ProductPage',
            component: () => import('@/views/ProductPage.vue')
        }
    ],
})

export default router
