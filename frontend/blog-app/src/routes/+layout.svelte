<!-- @migration-task Error while migrating Svelte code: Identifier 'children' has already been declared -->
<script>
import "../app.css"; 
import NavBar from "$lib/NavBar.svelte";
import Footer from "$lib/Footer.svelte"
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();

</script>

<!--Top layout container -->
<div class="container mx-auto border">
<!-- Navigation -->
<nav class="flex flex-row justify-center bg-gray-200 font-montserrat">

  <NavBar />

</nav>

<!-- Main Content -->
<main class="font-roboto">
  {@render children?.()}


</main>


<!-- Footer Element -->
<footer class="flex flex-row justify-start bg-gray-200  font-merriweather">
<Footer />
</footer>
</div>