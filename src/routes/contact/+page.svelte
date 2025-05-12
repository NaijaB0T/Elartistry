<script>
  import { onMount } from 'svelte';
  import { portfolioData } from '$lib/photoData';
  import AnimationContainer from '../../components/AnimationContainer.svelte';
  import Button from '$lib/components/ui/button.svelte';
  
  let formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  let formStatus = {
    submitting: false,
    success: false,
    error: false,
    message: ''
  };
  
  function handleSubmit() {
    formStatus.submitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      formStatus.submitting = false;
      formStatus.success = true;
      formStatus.message = 'Your message has been sent! I will get back to you soon.';
      
      // Reset form
      formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      // Reset status after 5 seconds
      setTimeout(() => {
        formStatus.success = false;
        formStatus.message = '';
      }, 5000);
    }, 1500);
  }
</script>

<svelte:head>
  <title>Contact | {portfolioData.photographer.name} | Photographer & Filmmaker</title>
  <meta name="description" content="Get in touch with {portfolioData.photographer.name}, a photographer and filmmaker based in {portfolioData.photographer.location}.">
</svelte:head>

<!-- Contact header -->
<section class="pt-32 pb-16 bg-primary">
  <div class="container mx-auto px-6 md:px-8">
    <AnimationContainer animation="slide-up">
      <h1 class="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">Get in Touch</h1>
      <p class="text-muted max-w-2xl mx-auto text-center mb-12">
        Interested in working together? Send me a message and let's create something amazing.
      </p>
    </AnimationContainer>
  </div>
</section>

<!-- Contact content -->
<section class="pb-20 bg-primary">
  <div class="container mx-auto px-6 md:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact form -->
      <AnimationContainer animation="slide-right">
        <div class="bg-black/20 rounded-lg p-8">
          <h2 class="text-2xl font-serif font-bold mb-6">Send a Message</h2>
          
          {#if formStatus.success}
            <div class="bg-green-500/20 text-green-300 p-4 rounded-lg mb-6">
              {formStatus.message}
            </div>
          {/if}
          
          {#if formStatus.error}
            <div class="bg-red-500/20 text-red-300 p-4 rounded-lg mb-6">
              {formStatus.message}
            </div>
          {/if}
          
          <form on:submit|preventDefault={handleSubmit} class="space-y-6">
            <div class="space-y-2">
              <label for="name" class="block text-sm font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                bind:value={formData.name}
                required
                class="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-accent focus:outline-none text-secondary placeholder-gray-500"
                placeholder="Your name"
              />
            </div>
            
            <div class="space-y-2">
              <label for="email" class="block text-sm font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                bind:value={formData.email}
                required
                class="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-accent focus:outline-none text-secondary placeholder-gray-500"
                placeholder="Your email address"
              />
            </div>
            
            <div class="space-y-2">
              <label for="subject" class="block text-sm font-medium">Subject</label>
              <input 
                type="text" 
                id="subject" 
                bind:value={formData.subject}
                required
                class="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-accent focus:outline-none text-secondary placeholder-gray-500"
                placeholder="Subject of your message"
              />
            </div>
            
            <div class="space-y-2">
              <label for="message" class="block text-sm font-medium">Message</label>
              <textarea 
                id="message" 
                bind:value={formData.message}
                required
                rows="5"
                class="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-accent focus:outline-none text-secondary placeholder-gray-500"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <div>
              <Button 
                type="submit" 
                variant="outline" 
                class_="w-full"
                disabled={formStatus.submitting}
              >
                {#if formStatus.submitting}
                  <span class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                {:else}
                  Send Message
                {/if}
              </Button>
            </div>
          </form>
        </div>
      </AnimationContainer>
      
      <!-- Contact information -->
      <AnimationContainer animation="slide-left" delay={300}>
        <div class="lg:pl-8">
          <h2 class="text-2xl font-serif font-bold mb-6">Contact Information</h2>
          
          <div class="space-y-8">
            <div>
              <h3 class="text-lg font-bold mb-2">Location</h3>
              <p class="text-muted flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 mt-0.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {portfolioData.photographer.location}
              </p>
            </div>
            
            <div>
              <h3 class="text-lg font-bold mb-2">Email</h3>
              <p class="text-muted flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 mt-0.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:{portfolioData.photographer.email}" class="hover:text-accent transition-colors duration-300">
                  {portfolioData.photographer.email}
                </a>
              </p>
            </div>
            
            <div>
              <h3 class="text-lg font-bold mb-2">Phone</h3>
              <p class="text-muted flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 mt-0.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:{portfolioData.photographer.phone.replace(/\s/g, '')}" class="hover:text-accent transition-colors duration-300">
                  {portfolioData.photographer.phone}
                </a>
              </p>
            </div>
            
            <div>
              <h3 class="text-lg font-bold mb-2">Instagram</h3>
              <p class="text-muted flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 mt-0.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <a href="https://www.instagram.com/{portfolioData.photographer.instagram}" target="_blank" rel="noopener noreferrer" class="hover:text-accent transition-colors duration-300">
                  @{portfolioData.photographer.instagram}
                </a>
              </p>
            </div>
          </div>
          
          <div class="mt-12">
            <h3 class="text-lg font-bold mb-4">Available For</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Commercial Photography
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Portrait Sessions
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Event Coverage
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Filmmaking & Videography
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Creative Direction
              </li>
            </ul>
          </div>
        </div>
      </AnimationContainer>
    </div>
  </div>
</section>

<!-- Map or location image -->
<section class="pb-20 bg-primary">
  <div class="container mx-auto px-6 md:px-8">
    <AnimationContainer animation="slide-up">
      <div class="relative h-80 rounded-lg overflow-hidden">
        <img 
          src="/images/{portfolioData.featuredImages[3]}" 
          alt="Accra, Ghana" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
          <div class="p-8 w-full">
            <h3 class="text-xl font-bold mb-2">Based in Accra, Ghana</h3>
            <p class="text-muted">Available for projects worldwide</p>
          </div>
        </div>
      </div>
    </AnimationContainer>
  </div>
</section>