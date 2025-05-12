<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  
  export let images = [];
  export let currentIndex = 0;
  export let basePath = '/images/';
  
  const dispatch = createEventDispatcher();
  
  let touchStartX = 0;
  let touchEndX = 0;
  let isLoading = true;
  
  onMount(() => {
    document.addEventListener('keydown', handleKeydown);
    
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });
  
  function handleKeydown(e) {
    if (e.key === 'Escape') {
      close();
    } else if (e.key === 'ArrowLeft') {
      prev();
    } else if (e.key === 'ArrowRight') {
      next();
    }
  }
  
  function close() {
    dispatch('close');
  }
  
  function next() {
    isLoading = true;
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  function prev() {
    isLoading = true;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
  
  function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
  }
  
  function handleTouchMove(e) {
    touchEndX = e.touches[0].clientX;
  }
  
  function handleTouchEnd() {
    if (touchStartX - touchEndX > 50) {
      // Swipe left
      next();
    } else if (touchEndX - touchStartX > 50) {
      // Swipe right
      prev();
    }
  }
  
  function handleImageLoad() {
    isLoading = false;
  }
</script>

<div 
  class="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
  transition:fade={{ duration: 300 }}
  on:click={close}
  on:keydown={handleKeydown}
  on:touchstart={handleTouchStart}
  on:touchmove={handleTouchMove}
  on:touchend={handleTouchEnd}
  role="dialog"
  aria-modal="true"
  aria-label="Image gallery"
>
  {#if isLoading}
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  {/if}
  
  <!-- Image -->
  <div 
    class="relative w-full h-full flex items-center justify-center p-4 sm:p-12"
    on:click|stopPropagation={() => {}}
    on:keydown|stopPropagation={() => {}}
    role="presentation"
  >
    {#key currentIndex}
      <img
        src={`${basePath}${images[currentIndex]}`}
        alt="Gallery image"
        class="max-w-full max-h-full object-contain"
        on:load={handleImageLoad}
        in:fly={{ y: 20, duration: 500, easing: cubicInOut }}
      />
    {/key}
  </div>
  
  <!-- Close button -->
  <button 
    class="absolute top-6 right-6 text-white hover:text-accent transition-colors duration-300 z-10" 
    on:click={close}
    aria-label="Close gallery"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </button>
  
  <!-- Navigation buttons -->
  <button 
    class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors duration-300 bg-black bg-opacity-50 rounded-full p-2 z-10" 
    on:click|stopPropagation={prev}
    aria-label="Previous image"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </button>
  
  <button 
    class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors duration-300 bg-black bg-opacity-50 rounded-full p-2 z-10" 
    on:click|stopPropagation={next}
    aria-label="Next image"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </button>
  
  <!-- Image counter -->
  <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full text-sm z-10">
    {currentIndex + 1} / {images.length}
  </div>
</div>