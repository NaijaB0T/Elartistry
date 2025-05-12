<script>
  import { portfolioData } from '$lib/photoData';
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';
  
  let animate = false;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate = true;
        }
      },
      { threshold: 0.1 }
    );
    
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }
    
    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  });
</script>

<footer id="footer" class="py-12 mt-16" class:bg-primary={$theme === 'dark'} class:bg-gray-100={$theme === 'light'}>
  <div class="container mx-auto px-6 md:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Branding -->
      <div class={animate ? 'fade-in' : 'opacity-0'}>
        <h3 class="text-2xl font-serif font-bold mb-4" class:text-white={$theme === 'dark'} class:text-black={$theme === 'light'}>El.artistry</h3>
        <p class="mb-4" class:text-gray-400={$theme === 'dark'} class:text-gray-600={$theme === 'light'}>{portfolioData.photographer.availability}</p>
        <p class:text-gray-400={$theme === 'dark'} class:text-gray-600={$theme === 'light'}>{portfolioData.photographer.location}</p>
      </div>
      
      <!-- Navigation -->
      <div class={animate ? 'slide-up stagger-delay-1' : 'opacity-0'}>
        <h4 class="text-lg font-semibold mb-4" class:text-white={$theme === 'dark'} class:text-black={$theme === 'light'}>Navigation</h4>
        <nav class="flex flex-col space-y-2">
          <a href="/" class="transition-colors duration-300 hover:text-accent" class:text-gray-400={$theme === 'dark'} class:text-gray-600={$theme === 'light'}>Home</a>
          <a href="/portfolio" class="transition-colors duration-300 hover:text-accent" class:text-gray-400={$theme === 'dark'} class:text-gray-600={$theme === 'light'}>Portfolio</a>
          <a href="/about" class="transition-colors duration-300 hover:text-accent" class:text-gray-400={$theme === 'dark'} class:text-gray-600={$theme === 'light'}>About</a>
          <a href="/contact" class="transition-colors duration-300 hover:text-accent" class:text-gray-400={$theme === 'dark'} class:text-gray-600={$theme === 'light'}>Contact</a>
        </nav>
      </div>
      
      <!-- Contact -->
      <div class={animate ? 'slide-up stagger-delay-2' : 'opacity-0'}>
        <h4 class="text-lg font-semibold mb-4" class:text-white={$theme === 'dark'} class:text-black={$theme === 'light'}>Contact</h4>
        <ul class="space-y-2">
          <li>
            <a 
              href="mailto:{portfolioData.photographer.email}" 
              class="hover:text-accent transition-colors duration-300 flex items-center"
              class:text-gray-400={$theme === 'dark'} 
              class:text-gray-600={$theme === 'light'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              {portfolioData.photographer.email}
            </a>
          </li>
          <li>
            <a 
              href="tel:{portfolioData.photographer.phone.replace(/\s/g, '')}" 
              class="hover:text-accent transition-colors duration-300 flex items-center"
              class:text-gray-400={$theme === 'dark'} 
              class:text-gray-600={$theme === 'light'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              {portfolioData.photographer.phone}
            </a>
          </li>
          <li>
            <a 
              href="https://www.instagram.com/{portfolioData.photographer.instagram}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="hover:text-accent transition-colors duration-300 flex items-center"
              class:text-gray-400={$theme === 'dark'} 
              class:text-gray-600={$theme === 'light'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              @{portfolioData.photographer.instagram}
            </a>
          </li>
        </ul>
      </div>
    </div>
    
    <!-- Separator -->
    <div class="my-8" class:border-t={true} class:border-gray-800={$theme === 'dark'} class:border-gray-300={$theme === 'light'}></div>
    
    <!-- Copyright -->
    <div class="flex flex-col sm:flex-row justify-between items-center">
      <p class="text-sm mb-4 sm:mb-0" class:text-gray-400={$theme === 'dark'} class:text-gray-600={$theme === 'light'}>
        © {new Date().getFullYear()} {portfolioData.photographer.name}. All rights reserved.
      </p>
      
      <a 
        href="#top" 
        class="flex items-center text-sm hover:text-accent transition-colors duration-300"
        class:text-gray-400={$theme === 'dark'} 
        class:text-gray-600={$theme === 'light'}
      >
        Back to top
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </a>
    </div>
  </div>
</footer>