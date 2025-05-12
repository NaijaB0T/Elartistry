<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { createIntersectionObserver } from '$lib/utils';
  
  export let images = [];
  export let basePath = '/images/';
  export let columns = 3;
  export let gap = 'gap-4';
  export let showCaption = false;
  export let aspectRatio = 'aspect-[3/4]';
  export let onClick = null;
  
  const dispatch = createEventDispatcher();
  
  let visibleImages = [];
  let observer;
  
  onMount(() => {
    observer = createIntersectionObserver((entry) => {
      if (entry.isIntersecting) {
        const imageIndex = parseInt(entry.target.dataset.index);
        if (!visibleImages.includes(imageIndex)) {
          visibleImages = [...visibleImages, imageIndex];
        }
      }
    });
    
    // Observe each image container
    document.querySelectorAll('.image-container').forEach(img => {
      observer.observe(img);
    });
    
    return () => {
      if (observer) {
        document.querySelectorAll('.image-container').forEach(img => {
          observer.unobserve(img);
        });
      }
    };
  });
  
  function handleClick(image, index) {
    if (onClick) {
      onClick(image, index);
    }
    dispatch('click', { image, index });
  }
  
  // Calculate the layout columns
  $: columnClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 md:grid-cols-3';
</script>

<div class={`grid ${columnClass} ${gap}`}>
  {#each images as image, index}
    <div 
      class="image-container overflow-hidden relative cursor-pointer" 
      data-index={index}
      on:click={() => handleClick(image, index)}
      on:keydown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick(image, index);
        }
      }}
      tabindex="0"
      role="button"
      aria-label="View image"
    >
      {#if visibleImages.includes(index)}
        <div
          in:fly={{ y: 20, duration: 700, delay: index % 3 * 100 }}
          class={`${aspectRatio} overflow-hidden`}
        >
          <img
            src={`${basePath}${image}`}
            alt="Photography work"
            class="image-hover w-full h-full object-cover transition-transform duration-700 ease-in-out"
            loading="lazy"
          />
        </div>
        
        {#if showCaption}
          <div 
            class="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
            in:fade={{ duration: 300, delay: 300 + index % 3 * 100 }}
          >
            <p class="text-white text-sm">{image.replace(/\.\w+$/, '').replace(/_/g, ' ')}</p>
          </div>
        {/if}
      {:else}
        <div class={`${aspectRatio} bg-gray-900`}></div>
      {/if}
    </div>
  {/each}
</div>