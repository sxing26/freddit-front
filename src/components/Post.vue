<template>
  <h1 class="font-bold text-4xl px-4 py-8 flex">{Post title placeholder}</h1>
  <div class="text-grey-darker mx-auto  px-8 py-4 text-sm border-2 rounded mb-2 w-11/12 flex">
    <div class="inline-block py-4">
      <button class="block px-4 py-2 bg-green-500 rounded text-white w-full mb-2">upvote</button>
      <div class="block px-4 py-2 w-full mb-2 text-center">{score}</div>
      <button class="block px-4 py-2 bg-red-600 rounded text-white">downvote</button>
    </div>
    <div class="px-8 w-full">
      <p class="pt-4">by {author}, {time}</p>
      <p class=" py-4">{post content}</p>
    </div>
  </div>
  <form action="" class="my-4 h-40 border rounded mx-9">
    <textarea class="w-full h-24"></textarea>
    <button type="submit" class=" m-2 px-4 py-2 bg-green-500 rounded text-white">send!</button>
  </form>
  <div> <!--section commentaires-->
    <div class="text-grey-darker mx-auto  px-8 text-sm border-l-2 mb-2 w-11/12"> <!--une hierarchie-->
      <div class="text-grey-darker ml-0 pb-4 text-sm border-l-0 mb-2 flex">
        <div class="inline-block py-4">
          <button class="block px-4 py-2 bg-green-500 rounded text-white w-full mb-2">upvote</button>
          <div class="block px-4 py-2 w-full mb-2 text-center">{score}</div>
          <button class="block px-4 py-2 bg-red-600 rounded text-white">downvote</button>
        </div>
        <div class="px-8 w-full">
          <p class="pt-4">by {author}, {time}</p>
          <p class=" py-4 inline-block w-full">{comment content}</p>
          <button class=" py-4 inline-block underline">respond</button>
        </div>
      </div>
      <div class="text-grey-darker mx-auto  px-8 pb-4 text-sm border-l-2 mb-2 flex">
        <div class="inline-block py-4">
          <button class="block px-4 py-2 bg-green-500 rounded text-white w-full mb-2">upvote</button>
          <div class="block px-4 py-2 w-full mb-2 text-center">{score}</div>
          <button class="block px-4 py-2 bg-red-600 rounded text-white">downvote</button>
        </div>
        <div class="px-8 w-full">
          <p class="pt-4">by {author}, {time}</p>
          <p class=" py-4 inline-block w-full">{comment content}</p>
          <button class="py-4 inline-block underline">respond</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Post"
}
</script>

<style scoped>

</style>