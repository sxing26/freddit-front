<template>
  <h1 class="font-bold text-4xl px-4 py-8 flex">u/{username}</h1>
    <div class="bg-white rounded px-8 py-4 flex flex-col">
      <p class="block text-grey-darker text-sm font-bold mb-2">
        Email
      </p>
      <p>{user email}</p>
    </div>
    <div class="bg-white rounded px-8 py-4 flex flex-col">
      <p class="block text-grey-darker text-sm font-bold mb-2">
        Score
      </p>
      <p>{user score}</p>
    </div>
    <div class="bg-white rounded px-8 py-4 flex flex-col">
      <h3 class="font-bold text-2xl px-4 pt-8 pb-4">Joined Communities</h3>
      <div class="inline-block text-grey-darker mx-4 px-4 py-4 text-sm border-2 rounded font-bold mb-2 flex justify-between items-center">
        <a href="">{placeholder community}</a>
        <button class="inline-block px-4 py-2 bg-red-600 rounded text-white">Leave</button>
      </div>
    </div>
    <div class="bg-white rounded px-8 py-4 flex flex-col">
      <h3 class="font-bold text-2xl px-4 pt-8 pb-4">Latest posts</h3>
      <div class="inline-block text-grey-darker mx-4 px-4 py-4 text-sm border-2 rounded font-bold mb-2 flex justify-between items-center">
        <a>{placeholder post}</a>
        <div>
          <p>score: {placeholder score}</p>
          <p>{placeholder time}</p>
        </div>
      </div>
    </div>
  <div class="bg-white rounded px-8 py-4 flex flex-col">
    <h3 class="font-bold text-2xl px-4 pt-8 pb-4">Latest comments</h3>
    <div class="inline-block text-grey-darker mx-4 px-4 py-4 text-sm border-2 rounded font-bold mb-2 flex justify-between items-center">
      <a>{placeholder comment}</a>
      <div>
        <p>score: {placeholder score}</p>
        <p>{placeholder time}</p>
      </div>
    </div>
  </div>
</template>

<script>

</script>
