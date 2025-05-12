<script>
  import { onMount } from 'svelte';
  import { portfolioData } from '$lib/photoData';
  import AnimationContainer from '../../components/AnimationContainer.svelte';
  import Button from '$lib/components/ui/button.svelte';
  
  let staggeredItems = [];
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const itemIndex = parseInt(entry.target.dataset.index);
            if (!staggeredItems.includes(itemIndex)) {
              staggeredItems = [...staggeredItems, itemIndex];
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe animated elements
    document.querySelectorAll('[data-animate]').forEach((el, index) => {
      el.dataset.index = index;
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  });
</script>

<svelte:head>
  <title>About | {portfolioData.photographer.name} | Photographer & Filmmaker</title>
  <meta name="description" content="Learn more about {portfolioData.photographer.name}, a photographer and filmmaker based in {portfolioData.photographer.location}.">
</svelte:head>

<!-- About header -->
<section class="pt-32 pb-16 bg-primary">
  <div class="container mx-auto px-6 md:px-8">
    <AnimationContainer animation="slide-up">
      <h1 class="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">About Me</h1>
      <p class="text-muted max-w-2xl mx-auto text-center mb-12">
        Learn more about my journey, process, and vision as a photographer and filmmaker.
      </p>
    </AnimationContainer>
  </div>
</section>

<!-- About content -->
<section class="py-16 bg-primary">
  <div class="container mx-auto px-6 md:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div data-animate>
        {#if staggeredItems.includes(0)}
          <AnimationContainer animation="slide-right">
            <div class="aspect-[4/5] relative">
              <img 
                src="/images/{portfolioData.featuredImages[2]}" 
                alt={portfolioData.photographer.name} 
                class="w-full h-full object-cover rounded-lg shadow-xl"
              />
              <div class="absolute -bottom-6 -right-6 bg-accent p-4 rounded-lg shadow-lg">
                <p class="text-primary font-serif text-xl font-bold">El.artistry</p>
              </div>
            </div>
          </AnimationContainer>
        {/if}
      </div>
      
      <div data-animate>
        {#if staggeredItems.includes(1)}
          <AnimationContainer animation="slide-left" delay={300}>
            <h2 class="text-3xl font-serif font-bold mb-6">My Story</h2>
            
            <div class="prose prose-invert max-w-none">
              <p class="text-muted mb-6">
                {portfolioData.photographer.bio}
              </p>
              
              <p class="text-muted mb-6">
                Based in the vibrant city of Accra, Ghana, my work is deeply influenced by the rich cultural heritage, diverse landscapes, and dynamic urban environment of West Africa. I aim to capture authentic moments and tell compelling visual stories that resonate with viewers.
              </p>
              
              <p class="text-muted mb-8">
                My journey in photography began with a passion for documenting everyday life and has evolved into a professional career spanning various genres and styles. I'm constantly exploring new techniques, perspectives, and approaches to visual storytelling.
              </p>
              
              <div class="mb-6">
                <h3 class="text-xl font-bold mb-3">Education & Experience</h3>
                <ul class="list-disc list-inside text-muted space-y-2">
                  <li>Bachelor of Fine Arts in Photography, University of Ghana (2017-2021)</li>
                  <li>Masterclass in Documentary Photography, World Press Photo Foundation (2022)</li>
                  <li>Workshop in Fashion Photography, Lagos Photo Festival (2023)</li>
                  <li>5+ years working with brands, publications, and individual clients</li>
                </ul>
              </div>
            </div>
          </AnimationContainer>
        {/if}
      </div>
    </div>
  </div>
</section>

<!-- Services section -->
<section class="py-16 bg-primary">
  <div class="container mx-auto px-6 md:px-8">
    <div data-animate>
      {#if staggeredItems.includes(2)}
        <AnimationContainer animation="slide-up">
          <h2 class="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">Services</h2>
          <p class="text-muted max-w-2xl mx-auto text-center mb-12">
            Professional photography and filmmaking services for a variety of needs
          </p>
        </AnimationContainer>
      {/if}
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each portfolioData.services as service, i}
        <div data-animate>
          {#if staggeredItems.includes(3 + i)}
            <AnimationContainer animation="slide-up" delay={i * 100}>
              <div class="bg-black/20 rounded-lg p-8 h-full">
                <div class="bg-accent/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    {#if service.icon === 'camera'}
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                      <circle cx="12" cy="13" r="4"></circle>
                    {:else if service.icon === 'user'}
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    {:else if service.icon === 'calendar'}
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    {:else if service.icon === 'video'}
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    {:else if service.icon === 'compass'}
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                    {:else}
                      <circle cx="12" cy="12" r="10"></circle>
                    {/if}
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-3">{service.title}</h3>
                <p class="text-muted mb-4">{service.description}</p>
              </div>
            </AnimationContainer>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Testimonials section -->
<section class="py-16 bg-primary">
  <div class="container mx-auto px-6 md:px-8">
    <div data-animate>
      {#if staggeredItems.includes(8)}
        <AnimationContainer animation="slide-up">
          <h2 class="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">Client Testimonials</h2>
          <p class="text-muted max-w-2xl mx-auto text-center mb-12">
            What clients have to say about working with me
          </p>
        </AnimationContainer>
      {/if}
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each portfolioData.testimonials as testimonial, i}
        <div data-animate>
          {#if staggeredItems.includes(9 + i)}
            <AnimationContainer animation="slide-up" delay={i * 100}>
              <div class="bg-black/20 rounded-lg p-8 h-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent mb-6 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5"></path>
                  <path d="M19 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5"></path>
                </svg>
                
                <p class="text-muted italic mb-6">"{testimonial.quote}"</p>
                
                <div class="flex items-center">
                  <div class="mr-4">
                    <img 
                      src={`/images/${testimonial.image}`} 
                      alt={testimonial.name} 
                      class="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p class="font-bold">{testimonial.name}</p>
                    <p class="text-sm text-muted">{testimonial.position}, {testimonial.company}</p>
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

<!-- CTA section -->
<section class="py-16 bg-primary">
  <div class="container mx-auto px-6 md:px-8">
    <div class="bg-black/20 rounded-xl p-8 md:p-12 text-center" data-animate>
      {#if staggeredItems.includes(12)}
        <AnimationContainer animation="slide-up">
          <h2 class="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Work Together?</h2>
          <p class="text-muted max-w-2xl mx-auto mb-8">
            I'm currently available for freelance photography and filmmaking projects. Let's create something amazing together.
          </p>
          <Button variant="outline" size="lg" class_="uppercase tracking-wider">
            <a href="/contact">Get in Touch</a>
          </Button>
        </AnimationContainer>
      {/if}
    </div>
  </div>
</section>