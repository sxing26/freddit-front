<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 m-2">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="" class="flex items-center">
        <img src="./assets/freddit-logo.png" class="mx-3 h-6 sm:h-9" alt="Freddit Logo" />
        <router-link to="/" class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Freddit</router-link>
      </a>
      <div class="flex items-center md:order-2">
        <router-link to=""> <!--display if user is connected-->
          <span type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
            <span class="sr-only">Open user menu</span>
            <img class="w-8 h-8 rounded-full" src="./assets/avatar-placeholder.png" alt="user photo">
          </span>
        </router-link>
        <router-link to="/Login">
          <span type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
            <span class="sr-only">Open user menu</span>
            <img class="w-8 h-8 rounded-full" src="./assets/avatar-placeholder.png" alt="user photo">
          </span>
        </router-link>
      </div>
    </div>
  </nav>
  <router-view/>

<!--  <Login />
  <Signup />
  <User />
  <CommunityEdit />
  <Home />
  <CommunityCreate />
  <Community />
  <Post />
  <PostCreate />-->
</template>

<script setup>

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import User from './components/User.vue'
import CommunityEdit from './components/CommunityEdit.vue'
import Home from './components/Home.vue'
import CommunityCreate from "./components/CommunityCreate.vue";
import Community from "./components/Community.vue";
import Post from "./components/Post.vue";
import PostCreate from "./components/PostCreate.vue";
</script>
