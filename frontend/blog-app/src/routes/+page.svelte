<script>
	import { text } from "@sveltejs/kit";

  import { posts } from '../stores/postsStore.js';
  let recentPosts = [];

  $: recentPosts = $posts.slice(-3); // Show the last 3 posts


</script>


<h1 class="border font-merriweather text-4xl py-8 my-10">Welcome to Umit's Musings</h1>

<h2>Recent Posts</h2>
{#each recentPosts as post}
  <div>
    <h2>{post.title}</h2>
    <p>{post.content}</p>
  </div>
{/each}

