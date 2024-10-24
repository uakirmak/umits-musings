<script>
  
  import { posts } from '../../stores/postsStore';
  let allPosts = [];

  $: allPosts = $posts;

  function handleDelete(id) {
    posts.update(currentPosts => currentPosts.filter(post => post.id !== id));
  }
</script>

<h1>/dev/null of my Blogs</h1>


<!-- User's Blogs-->

		
<div class="py-8 my-10">
  {#each allPosts as post, index (post.id)}
  <h3>{post.title}</h3>
  <p>{post.content}</p>
  <button on:click={handleDelete(post.id)} class="delete-button border p-1 shadow-md hover:border-blue-500 max-w-fit px-4">Delete</button>
  {/each}
</div>