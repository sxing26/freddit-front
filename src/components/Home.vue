<template>
  <div class="bg-white rounded px-8 pt-10 pb-4 mx-4 flex justify-between">
    <form  class="inline-block border-2 rounded p-2 mr-4 w-2/3">
      <input type="text"  placeholder="Search communities...">
    </form>
    <button class="inline-block px-4 py-2 bg-green-500 rounded text-white">Create community</button>
  </div>

  <div class="bg-white rounded px-8 py-4 flex flex-col">
    <div class="inline-block text-grey-darker mx-4 px-4 py-4 text-sm border-2 rounded font-bold mb-2 flex justify-between items-center">
      <a href="">{placeholder community}</a>
      <p class="inline-block px-4 py-2">{placeholder number of users} users</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>