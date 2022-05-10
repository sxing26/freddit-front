<template>
  <div class="inline-block text-grey-darker  py-4 font-bold mb-2 flex justify-between items-center">
    <h1 class="font-bold text-4xl px-4 py-8 flex">f/{{community_slug}}</h1>
    <div>
      <router-link to="/post/create">
        <button class="inline-block px-4 mx-4 py-2 bg-blue-500 rounded text-white">New post</button>
      </router-link>
      <router-link to="/community/edit">
        <button class="inline-block px-4 mx-4 py-2 bg-yellow-500 rounded text-white">Edit community</button>
      </router-link>
      <button class="inline-block px-4 mx-4 py-2 bg-green-500 rounded text-white">Join community</button>
    </div>
  </div>
  <router-link to="/post" v-for="post in posts">
    <div class="text-grey-darker mx-auto  px-8 py-4 text-sm border-2 rounded mb-2 w-11/12">
      <div class="flex justify-between items-center">
        <div>
          <h5 class="font-bold text-lg px-4 pt-2">{{ post.title }}</h5>
          <h6 class="inline-block align-baseline px-4 pb-2 font-light text-sm text-blue">posted by <a href="">u/{{ post.user }}</a></h6>
        </div>
        <p>{{ post.score }}</p>
      </div>
      <p class="px-8">{{ post.content }}</p>
    </div>
  </router-link>
</template>

<script>
import axios from "axios";

export default {
  name: "Community",
  props: [
      'community_slug'
  ],
  data : function() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.fetchCommunityPosts();
  },
  methods: {
    fetchCommunityPosts: function () {
      let obj = this;
      axios.get('http://localhost:3000/posts/community/' + obj.community_slug).then(function (response) {
        obj.posts = response.data;
      })
          .then(() => {
              for (const post of obj.posts) {
                post.content = obj.fetchPostContent(post._id);
              }
          })
    },
    fetchPostContent(postId) {
      axios.post('http://localhost:3000/posts/get', {
        id: postId
      }).then(function (response) {
        console.log(response.data);
        return response.data;
      })
    }
  }
}
</script>

<style scoped>

</style>