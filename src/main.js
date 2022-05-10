import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import AxiosPlugin from 'vue-axios-cors'
import {createRouter, createWebHistory} from "vue-router";
import Home from './components/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('./components/User.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./components/Login.vue')
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import('./components/Signup.vue')

    },
    {
        path: '/community/create',
        name: 'CommunityCreate',
        component: () => import('./components/CommunityCreate.vue')
    },
    {
        path: '/community/edit',
        name: 'CommunityEdit',
        component: () => import('./components/CommunityEdit.vue')
    },
    {
        path: '/community',
        name: 'Community',
        component: () => import('./components/Community.vue'),
        props: true
    },
    {
        path: '/post',
        name: 'Post',
        component: () => import('./components/Post.vue')
    },
    {
        path: '/post/create',
        name: 'PostCreate',
        component: () => import('./components/PostCreate.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App)
    .use(router)
    .mount('#app')
