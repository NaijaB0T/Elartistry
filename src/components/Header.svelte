<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { portfolioData } from '$lib/photoData';
  import { fade } from 'svelte/transition';
  import ThemeToggle from './ThemeToggle.svelte';
  import { theme } from '$lib/stores/theme';
  
  export let menuOpen = false;
  
  let scrolled = false;
  let prevScrollPos = 0;
  let visible = true;
  
  onMount(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determine if scrolled beyond threshold
      scrolled = currentScrollPos > 10;
      
      // Hide/show header based on scroll direction
      visible = prevScrollPos > currentScrollPos || currentScrollPos < 50;
      
      prevScrollPos = currentScrollPos;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
  function toggleMenu() {
    menuOpen = !menuOpen;
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
</script>

<header 
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-8 md:py-6 {!visible ? '-translate-y-full' : ''}"
  class:bg-primary={scrolled && $theme === 'dark'}
  class:bg-white={scrolled && $theme === 'light'}
  class:shadow-md={scrolled}
  class:translate-y-0={visible}
>
  <div class="container mx-auto flex justify-between items-center">
    <a href="/" class="text-xl md:text-2xl font-bold flex items-center">
      <span class="font-serif font-bold {$theme === 'dark' ? 'text-white' : 'text-black'}">El.artistry</span>
    </a>
    
    <nav class="hidden md:flex space-x-8">
      <a 
        href="/" 
        class="hover:text-accent transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-black'}"
        class:text-accent={$page.url.pathname === '/'}
      >
        Home
      </a>
      <a 
        href="/portfolio" 
        class="hover:text-accent transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-black'}"
        class:text-accent={$page.url.pathname === '/portfolio'}
      >
        Portfolio
      </a>
      <a 
        href="/about" 
        class="hover:text-accent transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-black'}"
        class:text-accent={$page.url.pathname === '/about'}
      >
        About
      </a>
      <a 
        href="/contact" 
        class="hover:text-accent transition-colors duration-300 {$theme === 'dark' ? 'text-white' : 'text-black'}"
        class:text-accent={$page.url.pathname === '/contact'}
      >
        Contact
      </a>
    </nav>
    
    <div class="flex items-center space-x-4">
      <ThemeToggle />
      
      <a href="https://www.instagram.com/{portfolioData.photographer.instagram}" 
         target="_blank" 
         rel="noopener noreferrer"
         class="hover:text-accent transition-colors duration-300 hidden md:block {$theme === 'dark' ? 'text-white' : 'text-black'}">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
      
      <button 
        class="hover:text-accent md:hidden flex flex-col space-y-1.5 {$theme === 'dark' ? 'text-white' : 'text-black'}"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        <span class="block w-6 h-0.5 bg-current transition-transform duration-300" class:rotate-45={menuOpen} class:translate-y-2={menuOpen}></span>
        <span class="block w-6 h-0.5 bg-current transition-opacity duration-300" class:opacity-0={menuOpen}></span>
        <span class="block w-6 h-0.5 bg-current transition-transform duration-300" class:-rotate-45={menuOpen} class:-translate-y-2={menuOpen}></span>
      </button>
    </div>
  </div>
</header>

<!-- Mobile menu overlay -->
{#if menuOpen}
  <div 
    class="fixed inset-0 z-40 flex flex-col justify-center items-center {$theme === 'dark' ? 'bg-primary' : 'bg-white'}"
    transition:fade={{ duration: 300 }}
  >
    <nav class="flex flex-col space-y-6 text-center">
      <a 
        href="/" 
        class="hover:text-accent transition-colors duration-300 text-3xl {$theme === 'dark' ? 'text-white' : 'text-black'}"
        class:text-accent={$page.url.pathname === '/'}
        on:click={() => (menuOpen = false)}
      >
        Home
      </a>
      <a 
        href="/portfolio" 
        class="hover:text-accent transition-colors duration-300 text-3xl {$theme === 'dark' ? 'text-white' : 'text-black'}"
        class:text-accent={$page.url.pathname === '/portfolio'}
        on:click={() => (menuOpen = false)}
      >
        Portfolio
      </a>
      <a 
        href="/about" 
        class="hover:text-accent transition-colors duration-300 text-3xl {$theme === 'dark' ? 'text-white' : 'text-black'}"
        class:text-accent={$page.url.pathname === '/about'}
        on:click={() => (menuOpen = false)}
      >
        About
      </a>
      <a 
        href="/contact" 
        class="hover:text-accent transition-colors duration-300 text-3xl {$theme === 'dark' ? 'text-white' : 'text-black'}"
        class:text-accent={$page.url.pathname === '/contact'}
        on:click={() => (menuOpen = false)}
      >
        Contact
      </a>
    </nav>
    
    <div class="absolute bottom-12 flex flex-col items-center space-y-4">
      <ThemeToggle />
      
      <a href="https://www.instagram.com/{portfolioData.photographer.instagram}" 
         target="_blank" 
         rel="noopener noreferrer"
         class="hover:text-accent transition-colors duration-300 text-2xl p-4 {$theme === 'dark' ? 'text-white' : 'text-black'}">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
    </div>
  </div>
{/if}