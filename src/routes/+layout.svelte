<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import '../app.css';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import CustomCursor from '../components/CustomCursor.svelte';
  import { theme } from '$lib/stores/theme';
  
  let menuOpen = false;
  let loaded = false;
  
  onMount(() => {
    // Simulate loading delay
    setTimeout(() => {
      loaded = true;
    }, 1000);
    
    // Initialize theme from localStorage if available
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'dark';
      theme.set(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    }
  });
</script>

<!-- Loading screen -->
{#if !loaded}
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center"
    class:bg-primary={$theme === 'dark'}
    class:bg-white={$theme === 'light'}
    out:fade={{ duration: 800 }}
  >
    <div class="text-center">
      <div class="inline-block relative">
        <p class="text-2xl md:text-3xl font-serif mb-4" class:text-white={$theme === 'dark'} class:text-black={$theme === 'light'}>
          El.artistry
        </p>
        <div class="w-full h-1 rounded overflow-hidden" class:bg-gray-800={$theme === 'dark'} class:bg-gray-200={$theme === 'light'}>
          <div class="h-full bg-accent w-2/3 animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- Custom cursor for desktop devices -->
<CustomCursor enabled={true} />

<!-- Layout structure -->
<div class="flex flex-col min-h-screen">
  <!-- Set the background and text colors based on theme -->
  <div class="absolute inset-0 -z-10" class:bg-primary={$theme === 'dark'} class:bg-white={$theme === 'light'}></div>
  
  <Header {menuOpen} />
  
  <main class="flex-1 relative" class:overflow-hidden={menuOpen}>
    <slot />
  </main>
  
  <Footer />
</div>