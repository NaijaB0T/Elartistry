<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { portfolioData } from '$lib/photoData';
  import { fade, fly } from 'svelte/transition';
  import AnimationContainer from '../../../components/AnimationContainer.svelte';
  import ImageGrid from '../../../components/ImageGrid.svelte';
  import FullscreenGallery from '../../../components/FullscreenGallery.svelte';
  import Button from '$lib/components/ui/button.svelte';
  
  // Get project from URL parameter
  let projectId = $page.params.slug;
  let project = portfolioData.projects.find(p => p.id === projectId);
  
  // If project not found, find related projects
  let otherProjects = [];
  if (project) {
    otherProjects = portfolioData.projects
      .filter(p => p.id !== projectId)
      .slice(0, 3);
  }
  
  // Gallery state
  let galleryOpen = false;
  let galleryIndex = 0;
  
  function openGallery(index) {
    galleryIndex = index;
    galleryOpen = true;
  }
  
  function closeGallery() {
    galleryOpen = false;
  }
</script>

<svelte:head>
  {#if project}
    <title>{project.title} | {portfolioData.photographer.name}</title>
    <meta name="description" content="{project.description}">
  {:else}
    <title>Project Not Found | {portfolioData.photographer.name}</title>
    <meta name="description" content="The requested project could not be found.">
  {/if}
</svelte:head>

<div class="bg-primary text-secondary min-h-screen">
  {#if project}
    <!-- Project header -->
    <section class="pt-32 pb-16">
      <div class="container mx-auto px-6 md:px-8">
        <AnimationContainer animation="slide-up">
          <a href="/portfolio" class="inline-flex items-center text-muted hover:text-accent transition-colors duration-300 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Portfolio
          </a>
          
          <h1 class="text-4xl md:text-5xl font-serif font-bold mb-4">{project.title}</h1>
          
          <div class="flex flex-wrap gap-4 mb-6">
            <span class="text-accent">{project.category}</span>
            <span class="text-muted">·</span>
            <span class="text-muted">{project.year}</span>
          </div>
          
          <p class="text-muted max-w-2xl mb-8">{project.description}</p>
        </AnimationContainer>
      </div>
    </section>
    
    <!-- Project gallery -->
    <section class="pb-16">
      <div class="container mx-auto px-6 md:px-8">
        <AnimationContainer animation="fade-in" delay={300}>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            {#each project.images as image, index}
              <div 
                class="relative overflow-hidden rounded-lg cursor-pointer group"
                on:click={() => openGallery(index)}
                on:keydown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openGallery(index);
                  }
                }}
                tabindex="0"
                role="button"
                aria-label="View image in gallery"
              >
                <div class="aspect-[3/4] overflow-hidden">
                  <img 
                    src={`/images/${image}`} 
                    alt={`${project.title} - Image ${index + 1}`}
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div class="bg-primary/80 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </AnimationContainer>
      </div>
    </section>
    
    <!-- Related projects -->
    <section class="py-16">
      <div class="container mx-auto px-6 md:px-8">
        <AnimationContainer animation="slide-up">
          <h2 class="text-3xl font-serif font-bold mb-6">More Projects</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each otherProjects as otherProject}
              <a href={`/portfolio/${otherProject.id}`} class="block group">
                <div class="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={`/images/${otherProject.images[0]}`} 
                    alt={otherProject.title} 
                    class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span class="text-white text-sm">View Project</span>
                    </div>
                  </div>
                </div>
                <h3 class="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">{otherProject.title}</h3>
                <p class="text-sm text-accent mb-2">{otherProject.category} · {otherProject.year}</p>
              </a>
            {/each}
          </div>
        </AnimationContainer>
      </div>
    </section>
    
  {:else}
    <!-- Project not found -->
    <section class="pt-32 pb-20 flex flex-col items-center justify-center">
      <div class="container mx-auto px-6 md:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-serif font-bold mb-6">Project Not Found</h1>
        <p class="text-muted max-w-2xl mx-auto mb-8">
          The project you are looking for does not exist or has been removed.
        </p>
        <Button variant="outline" size="lg">
          <a href="/portfolio">Back to Portfolio</a>
        </Button>
      </div>
    </section>
  {/if}
</div>

<!-- Gallery modal -->
{#if galleryOpen && project}
  <FullscreenGallery 
    images={project.images}
    currentIndex={galleryIndex}
    basePath="/images/"
    on:close={closeGallery}
  />
{/if}