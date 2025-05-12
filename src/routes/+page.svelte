<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { portfolioData } from '$lib/photoData';
  import { shuffleArray, createIntersectionObserver } from '$lib/utils';
  import ImageGrid from '../components/ImageGrid.svelte';
  import AnimationContainer from '../components/AnimationContainer.svelte';
  import FullscreenGallery from '../components/FullscreenGallery.svelte';
  import Button from '$lib/components/ui/button.svelte';
  
  // Featured projects to show on homepage
  let featuredProjects = portfolioData.projects.slice(0, 3);
  let featuredCategories = portfolioData.categories.filter(c => c.featured);
  
  // Gallery state
  let galleryOpen = false;
  let galleryImages = [];
  let galleryIndex = 0;
  
  // Animation state
  let heroVisible = false;
  let staggeredItems = [];
  
  // Randomize featured images for visual interest
  let randomizedFeaturedImages = shuffleArray(portfolioData.featuredImages).slice(0, 9);
  
  onMount(() => {
    // Hero animation
    setTimeout(() => {
      heroVisible = true;
    }, 500);
    
    // Staggered animations
    const observer = createIntersectionObserver((entry) => {
      if (entry.isIntersecting) {
        const itemIndex = parseInt(entry.target.dataset.index);
        if (!staggeredItems.includes(itemIndex)) {
          staggeredItems = [...staggeredItems, itemIndex];
        }
      }
    });
    
    // Observe animated elements
    document.querySelectorAll('[data-animate]').forEach((el, index) => {
      el.dataset.index = index;
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  });
  
  function openGallery(image, index, collection) {
    galleryImages = collection || [image];
    galleryIndex = index || 0;
    galleryOpen = true;
  }
  
  function closeGallery() {
    galleryOpen = false;
  }
</script>

<svelte:head>
  <title>{portfolioData.photographer.name} | Photographer & Filmmaker | {portfolioData.photographer.location}</title>
  <meta name="description" content="Portfolio of {portfolioData.photographer.name}, a photographer and filmmaker based in {portfolioData.photographer.location}.">
</svelte:head>

<!-- Hero section -->
<section class="relative h-screen flex items-center justify-center overflow-hidden">
  <div class="absolute inset-0 z-0">
    <img 
      src="/images/{portfolioData.featuredImages[0]}" 
      alt="Featured photography work" 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  </div>
  
  <div class="container mx-auto px-6 md:px-8 relative z-10 text-center">
    {#if heroVisible}
      <h1 
        class="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white"
        in:fly={{ y: 40, duration: 800 }}
      >
        {portfolioData.photographer.name}
      </h1>
      
      <p 
        class="text-xl md:text-2xl text-white mb-6"
        in:fly={{ y: 40, duration: 800, delay: 200 }}
      >
        {portfolioData.photographer.title}
      </p>
      
      <p 
        class="text-white text-lg mb-8"
        in:fly={{ y: 40, duration: 800, delay: 400 }}
      >
        {portfolioData.photographer.availability}
      </p>
      
      <div in:fly={{ y: 40, duration: 800, delay: 600 }}>
        <Button variant="outline" size="lg" class_="uppercase tracking-wider bg-transparent border-white">
          <a href="/portfolio" class="text-white hover:text-white">VIEW PORTFOLIO</a>
        </Button>
      </div>
    {/if}
  </div>
  
  <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
    <a 
      href="#about"
      class="flex flex-col items-center text-white hover:text-accent transition-colors duration-300"
      in:fade={{ delay: 1000, duration: 800 }}
    >
      <span class="mb-2 text-sm">Scroll</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-bounce">
        <path d="M12 5v14M19 12l-7 7-7-7"/>
      </svg>
    </a>
  </div>
</section>

<!-- About section -->
<section id="about" class="py-20 md:py-28 bg-primary">
  <div class="container mx-auto px-6 md:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div data-animate>
        {#if staggeredItems.includes(0)}
          <AnimationContainer animation="slide-right">
            <div class="relative">
              <img 
                src="/images/{portfolioData.featuredImages[1]}" 
                alt="Photographer portrait" 
                class="w-full h-auto rounded-lg shadow-xl"
              />
              <div class="absolute -bottom-6 -right-6 bg-accent p-3 rounded-lg shadow-lg">
                <p class="text-primary font-serif text-xl">El.artistry</p>
              </div>
            </div>
          </AnimationContainer>
        {/if}
      </div>
      
      <div data-animate>
        {#if staggeredItems.includes(1)}
          <AnimationContainer animation="slide-left" delay={300}>
            <h2 class="text-3xl md:text-4xl font-serif font-bold mb-6">About Me</h2>
            <p class="text-lg text-muted mb-6">{portfolioData.photographer.bio}</p>
            <p class="text-muted mb-8">Based in {portfolioData.photographer.location}</p>
            
            <Button variant="outline">
              <a href="/about">Learn More</a>
            </Button>
          </AnimationContainer>
        {/if}
      </div>
    </div>
  </div>
</section>

<!-- Featured work grid -->
<section class="py-20 md:py-28 bg-primary">
  <div class="container mx-auto px-6 md:px-8">
    <div data-animate>
      {#if staggeredItems.includes(2)}
        <AnimationContainer animation="slide-up">
          <h2 class="text-3xl md:text-4xl font-serif font-bold mb-2 text-center">Featured Work</h2>
          <p class="text-muted mb-12 text-center">A selection of recent projects and collaborations</p>
        </AnimationContainer>
      {/if}
    </div>
    
    <div data-animate>
      {#if staggeredItems.includes(3)}
        <AnimationContainer animation="fade-in" delay={300}>
          <ImageGrid 
            images={randomizedFeaturedImages} 
            columns={3}
            basePath="/images/"
            onClick={(image, index) => openGallery(image, index, randomizedFeaturedImages)}
          />
        </AnimationContainer>
      {/if}
    </div>
    
    <div class="text-center mt-12" data-animate>
      {#if staggeredItems.includes(4)}
        <AnimationContainer animation="slide-up" delay={400}>
          <Button variant="outline">
            <a href="/portfolio">View All Work</a>
          </Button>
        </AnimationContainer>
      {/if}
    </div>
  </div>
</section>

<!-- Categories section -->
<section class="py-20 md:py-28 bg-primary">
  <div class="container mx-auto px-6 md:px-8">
    <div data-animate>
      {#if staggeredItems.includes(5)}
        <AnimationContainer animation="slide-up">
          <h2 class="text-3xl md:text-4xl font-serif font-bold mb-2 text-center">Categories</h2>
          <p class="text-muted mb-12 text-center">Explore my work by specialty</p>
        </AnimationContainer>
      {/if}
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each featuredCategories as category, i}
        <div data-animate>
          {#if staggeredItems.includes(6 + i)}
            <AnimationContainer animation="slide-up" delay={200 + i * 100}>
              <div class="group relative overflow-hidden rounded-lg">
                <img 
                  src={`/images/${category.images[0]}`} 
                  alt={category.name} 
                  class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 class="text-xl font-bold text-white mb-2">{category.name}</h3>
                    <p class="text-white/80 text-sm mb-4">{category.description}</p>
                    <a 
                      href={`/portfolio?category=${category.id}`} 
                      class="text-accent hover:text-white transition-colors duration-300 text-sm flex items-center"
                    >
                      View Collection
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimationContainer>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Featured projects section -->
<section class="py-20 md:py-28 bg-primary">
  <div class="container mx-auto px-6 md:px-8">
    <div data-animate>
      {#if staggeredItems.includes(9)}
        <AnimationContainer animation="slide-up">
          <h2 class="text-3xl md:text-4xl font-serif font-bold mb-2 text-center">Recent Projects</h2>
          <p class="text-muted mb-12 text-center">A collection of my latest creative endeavors</p>
        </AnimationContainer>
      {/if}
    </div>
    
    {#each featuredProjects as project, i}
      <div class="mb-20 md:mb-28 last:mb-0" data-animate>
        {#if staggeredItems.includes(10 + i)}
          <AnimationContainer animation="slide-up" delay={200 + i * 100}>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div class={i % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                <h3 class="text-2xl md:text-3xl font-serif font-bold mb-4">{project.title}</h3>
                <p class="text-sm text-accent mb-4">{project.category} · {project.year}</p>
                <p class="text-muted mb-6">{project.description}</p>
                <Button variant="outline" class_="bg-transparent border-accent">
                  <a href={`/portfolio/${project.id}`} class="text-white">View Project</a>
                </Button>
              </div>
              <div class={i % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                <div class="relative overflow-hidden rounded-lg group cursor-pointer"
                     on:click={() => openGallery(project.images[0], 0, project.images)}
                     on:keydown={(e) => {
                       if (e.key === 'Enter' || e.key === ' ') {
                         openGallery(project.images[0], 0, project.images);
                       }
                     }}
                     tabindex="0"
                     role="button"
                     aria-label="View project gallery"
                >
                  <img 
                    src={`/images/${project.images[0]}`} 
                    alt={project.title} 
                    class="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div class="bg-primary/80 px-4 py-2 rounded-full">
                      <span class="text-white text-sm">View Gallery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimationContainer>
        {/if}
      </div>
    {/each}
  </div>
</section>

<!-- Contact section -->
<section class="py-20 md:py-28 bg-primary">
  <div class="container mx-auto px-6 md:px-8">
    <div class="bg-black/20 rounded-xl p-8 md:p-12 text-center" data-animate>
      {#if staggeredItems.includes(13)}
        <AnimationContainer animation="slide-up">
          <h2 class="text-3xl md:text-4xl font-serif font-bold mb-4">Let's Work Together</h2>
          <p class="text-muted max-w-2xl mx-auto mb-8">
            Interested in collaborating on a project? I'm available for freelance work and open to new opportunities.
          </p>
          <Button variant="outline" size="lg" class_="uppercase tracking-wider bg-transparent border-white">
            <a href="/contact" class="text-white hover:text-white">Get in Touch</a>
          </Button>
        </AnimationContainer>
      {/if}
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