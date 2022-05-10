<template>
  <form @submit.prevent="onLogin()">
    <div class="bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text"
               placeholder="Email"
              v-model="email"
        >
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
               id="password" type="password" placeholder="******************"
              v-model="password"
        >
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue hover:bg-blue-dark font-bold py-2 px-4 rounded" type="submit">
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
          Forgot Password?
        </a>
        <router-link to="/signup" class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
          No account yet? Sign up!
        </router-link>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  props: [],
  data : function() {
    return {
      email: '',
      password: ''
    }
  },
  mounted() {
  },
  methods: {
    onLogin() {
      let obj = this;
      axios.post('http://localhost:3000/users/checkConnexion',
          {
            email: obj.email,
            password: obj.password
          }
      ).then(function (response) {
        console.log(response.data);
        obj.$router.push('/');
      })
    },
  }
}
</script>
