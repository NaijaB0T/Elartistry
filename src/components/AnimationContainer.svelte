<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  
  export let animation = "fade-in"; // fade-in, slide-up, slide-down, slide-left, slide-right
  export let delay = 0;
  export let duration = 800;
  export let threshold = 0.1;
  export let once = true;
  
  let element;
  let visible = false;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          visible = true;
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          visible = false;
        }
      },
      { threshold }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  });
</script>

<div bind:this={element}>
  {#if visible}
    <div
      in:fly={{
        y: animation === "slide-up" ? 40 : animation === "slide-down" ? -40 : 0,
        x: animation === "slide-left" ? 40 : animation === "slide-right" ? -40 : 0,
        duration,
        delay
      }}
    >
      <slot />
    </div>
  {:else}
    <div class="opacity-0">
      <slot />
    </div>
  {/if}
</div>