<template>
  <div class="inline-block text-grey-darker  py-4 font-bold mb-2 flex justify-between items-center">
    <h1 class="font-bold text-4xl px-4 py-8 flex">f/{community}</h1>
    <button class="inline-block px-4 mx-4 py-2 bg-green-500 rounded text-white">Join community</button>
  </div>
  <div class="text-grey-darker mx-auto  px-8 py-4 text-sm border-2 rounded mb-2 w-11/12">
    <div class="flex justify-between items-center">
      <div>
        <h5 class="font-bold text-lg px-4 pt-2">{placeholder post title}</h5>
        <h6 class="inline-block align-baseline px-4 pb-2 font-light text-sm text-blue">posted by <a href="">u/{placeholder author}</a></h6>
      </div>
      <p>{post score placeholder}</p>
    </div>
    <p class="px-8">{placeholder excerpt}</p>
  </div>
</template>

<script>
export default {
  name: "Community"
}
</script>

<style scoped>

</style>