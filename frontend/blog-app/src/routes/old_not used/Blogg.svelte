<script>
  let posts = [
    {
      title: 'The Role of Cognitive Science in AI',
      description: 'Exploring how cognitive psychology informs artificial intelligence research.',
      category: 'Research',
      image: 'ai-research.jpg'
    },
    {
      title: 'Programming Neural Networks',
      description: 'A deep dive into coding neural networks from scratch using Python.',
      category: 'Programming',
      image: 'neural-networks.jpg'
    },
    // Add more posts here
  ];
</script>

<style>
  /* General Styles */
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
  }

  header {
    background-color: #007acc;
    color: white;
    padding: 1rem;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
  }

  nav {
    background-color: #004c99;
    padding: 1rem;
    display: flex;
    justify-content: center;
  }

  nav a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
    font-weight: bold;
  }

  nav a:hover {
    text-decoration: underline;
  }

  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    padding: 2rem;
  }

  .post-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    transition: transform 0.2s;
  }

  .post-card:hover {
    transform: scale(1.05);
  }

  .post-image {
    width: 100%;
    border-radius: 8px;
  }

  footer {
    background-color: #007acc;
    color: white;
    padding: 1rem;
    text-align: center;
    margin-top: 2rem;
  }
</style>

<header>
  <h1>Cognitive Tech Insights</h1>
  <p>Exploring the intersection of research and technology</p>
</header>

<nav>
  <a href="#technology">Technology</a>
  <a href="#programming">Programming</a>
  <a href="#research">Research</a>
  <a href="#science">Science</a>
</nav>

<main>
  {#each posts as post}
    <div class="post-card">
      <img class="post-image" src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.description}</p>
    </div>
  {/each}
</main>

<footer>
  <p>&copy; 2024 Cognitive Tech Insights. All Rights Reserved.</p>
  <div>
    <a href="https://twitter.com">Twitter</a> |
    <a href="https://github.com">GitHub</a> |
    <a href="https://linkedin.com">LinkedIn</a>
  </div>
</footer>
