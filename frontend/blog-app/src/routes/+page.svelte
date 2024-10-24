<script>
	import { text } from "@sveltejs/kit";


//blog post objects can import them later

let posts = [];
let title = "";
let content = "";



function handleSubmit(event) {
  event.preventDefault()
  posts = [...posts, {"title":title, "content":content}];

  console.log(posts);
  //reset
  title = "";
  content = "";

};

</script>


<h1 class="border font-merriweather text-4xl py-8 my-10">Welcome to Umit's Musings</h1>

<h2 class="border py-8 my-2"> Enter a new blogpost</h2>

<div class="border px-2 mx-2 font-roboto">
<form action="#" class="flex flex-col">
<label for="post-title" class="">Title:</label>
<input bind:value={title} type="text" id="post-title" class="border">
<label for="post-content" class="">Content:</label>
<input bind:value={content} type="text" id="post-content" class="border">
<button on:click={handleSubmit} class="border p-1 shadow-md hover:border-blue-500 max-w-fit px-4">Submit</button>
</form>
</div>

<!-- User's Blogs-->

		
<div class="py-8 my-10">
  {#each posts as post, index (index)}
  <h3>{post.title}</h3>
  <p>{post.content}</p>
  {/each}
</div>
