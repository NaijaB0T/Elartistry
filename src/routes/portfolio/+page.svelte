<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { portfolioData } from '$lib/photoData';
  import { fly } from 'svelte/transition';
  import { createIntersectionObserver } from '$lib/utils';
  import ImageGrid from '../../components/ImageGrid.svelte';
  import AnimationContainer from '../../components/AnimationContainer.svelte';
  import FullscreenGallery from '../../components/FullscreenGallery.svelte';
  
  // State variables
  let activeCategory = 'all';
  let filteredImages = [];
  let animationReady = false;
  let galleryOpen = false;
  let galleryImages = [];
  let galleryIndex = 0;
  
  // Get all categories from the data
  let categories = [
    { id: 'all', name: 'All Work' },
    ...portfolioData.categories
  ];
  
  // Get all images from categories
  let allImages = portfolioData.categories.flatMap(category => 
    category.images.map(image => ({
      image,
      category: category.id
    }))
  );
  
  onMount(() => {
    // Check for category in URL params
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam && categories.some(c => c.id === categoryParam)) {
      activeCategory = categoryParam;
    }
    
    // Filter images
    filterImages(activeCategory);
    
    // Delay animation to allow for smooth transitions
    setTimeout(() => {
      animationReady = true;
    }, 100);
  });
  
  // Filter images based on active category
  function filterImages(category) {
    if (category === 'all') {
      filteredImages = allImages;
    } else {
      filteredImages = allImages.filter(item => item.category === category);
    }
  }
  
  // Handle category change
  function changeCategory(category) {
    activeCategory = category;
    animationReady = false;
    
    // Update URL without reloading the page
    const url = new URL(window.location);
    if (category === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', category);
    }
    window.history.pushState({}, '', url);
    
    // Filter images
    filterImages(category);
    
    // Delay animation to allow for smooth transitions
    setTimeout(() => {
      animationReady = true;
    }, 100);
  }
  
  function openGallery(item, index) {
    galleryImages = filteredImages.map(i => i.image);
    galleryIndex = index;
    galleryOpen = true;
  }
  
  function closeGallery() {
    galleryOpen = false;
  }
</script>

<svelte:head>
  <title>Portfolio | {portfolioData.photographer.name} | Photographer & Filmmaker</title>
  <meta name="description" content="Explore the portfolio of {portfolioData.photographer.name}, a photographer and filmmaker based in {portfolioData.photographer.location}.">
</svelte:head>

<!-- Portfolio header -->
<section class="pt-32 pb-16 bg-primary">
  <div class="container mx-auto px-6 md:px-8">
    <AnimationContainer animation="slide-up">
      <h1 class="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">Portfolio</h1>
      <p class="text-muted max-w-2xl mx-auto text-center mb-12">
        A curated collection of my work across various projects and styles.
      </p>
    </AnimationContainer>
    
    <!-- Category filter tabs -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      {#each categories as category}
        <button
          class="px-4 py-2 rounded-full transition-colors duration-300 text-sm"
          class:bg-accent={activeCategory === category.id}
          class:text-primary={activeCategory === category.id}
          class:bg-gray-800={activeCategory !== category.id}
          class:text-secondary={activeCategory !== category.id}
          on:click={() => changeCategory(category.id)}
        >
          {category.name}
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- Portfolio grid -->
<section class="pb-20 bg-primary">
  <div class="container mx-auto px-6 md:px-8">
    {#if animationReady}
      <div in:fly={{ y: 20, duration: 500 }}>
        <ImageGrid 
          images={filteredImages.map(item => item.image)} 
          columns={3}
          basePath="/images/"
          showCaption={true}
          onClick={openGallery}
        />
      </div>
    {:else}
      <div class="h-96 flex items-center justify-center">
        <div class="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
    {/if}
    
    {#if filteredImages.length === 0}
      <div class="text-center py-16">
        <p class="text-muted">No images found in this category.</p>
      </div>
    {/if}
  </div>
</section>

<!-- Projects section -->
<section class="py-20 bg-primary">
  <div class="container mx-auto px-6 md:px-8">
    <AnimationContainer animation="slide-up">
      <h2 class="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">Projects</h2>
      <p class="text-muted max-w-2xl mx-auto text-center mb-12">
        Explore my featured projects and series
      </p>
    </AnimationContainer>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each portfolioData.projects as project, i}
        <AnimationContainer animation="slide-up" delay={i * 100}>
          <a href={`/portfolio/${project.id}`} class="block group">
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={`/images/${project.images[0]}`} 
                alt={project.title} 
                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span class="text-white text-sm">View Project</span>
                </div>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
            <p class="text-sm text-accent mb-2">{project.category} · {project.year}</p>
            <p class="text-muted text-sm line-clamp-2">{project.description}</p>
          </a>
        </AnimationContainer>
      {/each}
    </div>
  </div>
</section>

<!-- Gallery modal -->
{#if galleryOpen}
  <FullscreenGallery 
    images={galleryImages}
    currentIndex={galleryIndex}
    basePath="/images/"
    on:close={closeGallery}
  />
{/if}