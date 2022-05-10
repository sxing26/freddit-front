<template>
  <h1 class="font-bold text-4xl px-4 py-8 flex">Create post</h1>
  <select name="" id="" class="my-4 mx-9 my-2 p-2 border rounded">
    <option value="text">Text post</option>
    <option value="multimedia">Multimedia post</option>
  </select>
  <form action="" class="my-4 mx-9">
    <input type="text" placeholder="Title..." class="w-full my-2 p-2 border rounded">
    <textarea class="w-full h-24 border rounded "></textarea>
    <button type="submit" class=" my-2 px-4 py-2 bg-green-500 rounded text-white">send!</button>
  </form>
  <form action="" class="my-4 mx-9">
    <input type="text" placeholder="Title..." class="w-full my-2 p-2 border rounded">
    <input type="file"  class="py-2 block">
    <button type="submit" class=" my-2 px-4 py-2 bg-green-500 rounded text-white">send!</button>
  </form>

</template>

<script>
export default {
  name: "PostCreate"
}
</script>

<style scoped>

</style>