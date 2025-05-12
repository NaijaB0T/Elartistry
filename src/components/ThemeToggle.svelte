<script>
  import { theme, toggleTheme } from '$lib/stores/theme';
  
  // Animation properties
  let isAnimating = false;
  
  function handleToggle() {
    if (isAnimating) return;
    
    isAnimating = true;
    toggleTheme();
    
    // Reset animation flag after animation completes
    setTimeout(() => {
      isAnimating = false;
    }, 600);
  }
</script>

<button
  type="button"
  class="relative inline-flex items-center justify-center p-1 h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200"
  class:bg-accent={$theme === 'dark'}
  class:bg-gray-800={$theme === 'light'}
  on:click={handleToggle}
  aria-label={$theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
>
  {#if $theme === 'dark'}
    <!-- Sun icon for dark mode -->
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class="h-5 w-5 text-white transition-transform duration-500 ease-out" 
      class:rotate-180={isAnimating}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  {:else}
    <!-- Moon icon for light mode -->
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class="h-5 w-5 text-white transition-transform duration-500 ease-out" 
      class:rotate-180={isAnimating}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  {/if}
</button>

<style>
  button {
    margin-left: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
</style>