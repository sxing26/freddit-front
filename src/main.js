import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHistory} from "vue-router";
import Home from './components/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./components/Login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App)
    .use(router)
    .mount('#app')
