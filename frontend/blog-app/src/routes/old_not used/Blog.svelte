<script>
  import { onMount } from 'svelte';

  let featuredPosts = [
    { title: 'The Future of AI in Cognitive Research', image: '/api/placeholder/300/200', description: 'Exploring how artificial intelligence is reshaping cognitive psychology studies.' },
    { title: 'Neural Networks and Human Learning', image: '/api/placeholder/300/200', description: 'Comparing machine learning algorithms to human cognitive processes.' },
    { title: 'The Ethics of Brain-Computer Interfaces', image: '/api/placeholder/300/200', description: 'Discussing the implications of direct neural interfaces in cognitive enhancement.' },
  ];

  let recentPosts = [
    'Quantum Computing and Cognitive Modeling',
    'The Role of VR in Psychological Experiments',
    'Machine Learning in Neuroscience: A Review',
  ];

  onMount(() => {
    console.log('Component mounted');
  });
</script>

<main>
  <header>
    <h1>Cognitive Tech Insights</h1>
    <p class="tagline">Exploring the intersection of research and technology</p>
    <nav>
      <ul>
        <li><a href="#technology">Technology</a></li>
        <li><a href="#programming">Programming</a></li>
        <li><a href="#research">Research</a></li>
        <li><a href="#science">Science</a></li>
      </ul>
    </nav>
  </header>

  <div class="content">
    <section class="featured-posts">
      <h2>Featured Posts</h2>
      <div class="post-grid">
        {#each featuredPosts as post}
          <div class="post-card">
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        {/each}
      </div>
    </section>

    <aside>
      <h3>Recent Posts</h3>
      <ul>
        {#each recentPosts as post}
          <li>{post}</li>
        {/each}
      </ul>
    </aside>
  </div>

  <footer>
    <div class="social-icons">
      <a href="#twitter" aria-label="Twitter"><i class="icon-twitter"></i></a>
      <a href="#linkedin" aria-label="LinkedIn"><i class="icon-linkedin"></i></a>
      <a href="#github" aria-label="GitHub"><i class="icon-github"></i></a>
    </div>
    <nav>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </footer>
</main>

<style>
  :global(body) {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: #333;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }

  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  header {
    text-align: center;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  .tagline {
    font-size: 1.2rem;
    color: #7f8c8d;
    margin-bottom: 1rem;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  nav a {
    text-decoration: none;
    color: #3498db;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  nav a:hover {
    color: #2980b9;
  }

  .content {
    display: flex;
    gap: 2rem;
  }

  .featured-posts {
    flex: 3;
  }

  .post-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .post-card:hover {
    transform: translateY(-5px);
  }

  .post-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .post-card h3 {
    font-size: 1.2rem;
    margin: 1rem;
  }

  .post-card p {
    font-size: 0.9rem;
    margin: 0 1rem 1rem;
    color: #7f8c8d;
  }

  aside {
    flex: 1;
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  aside h3 {
    color: #2c3e50;
    border-bottom: 2px solid #3498db;
    padding-bottom: 0.5rem;
  }

  aside ul {
    list-style-type: none;
    padding: 0;
  }

  aside li {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  footer {
    margin-top: 2rem;
    text-align: center;
    padding-top: 1rem;
    border-top: 1px solid #e0e0e0;
  }

  .social-icons {
    margin-bottom: 1rem;
  }

  .social-icons a {
    display: inline-block;
    margin: 0 0.5rem;
    color: #3498db;
    font-size: 1.5rem;
  }

  footer nav a {
    margin: 0 0.5rem;
    color: #7f8c8d;
    text-decoration: none;
  }
</style>