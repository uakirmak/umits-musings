<script>

import { posts } from '../../stores/postsStore';


let title = "";
let content = "";


function handleSubmit(event) {
  
  event.preventDefault();

  posts.update(currentPosts => [...currentPosts, {
    "id": Date.now(), 
    "title":title, 
    "content":content
  }])

  //reset
  title = "";
  content = "";
};


</script>

<div class="my-10">
  <div class="">
<h1>Welcome to Admin</h1>

<h2 class="border py-2 my-2"> Create a new blog post</h2>
</div>

<div class="border px-2 mx-2 font-roboto">
  <form action="#" class="flex flex-col">
  <label for="post-title" class="">Title:</label>
  <input bind:value={title} type="text" id="post-title" class="border">
  <label for="post-content" class="">Content:</label>
  <input bind:value={content} type="text" id="post-content" class="border">
  <button on:click={handleSubmit} class="border p-1 shadow-md hover:border-blue-500 max-w-fit px-4">Submit</button>
  </form>
  </div>
  
</div>