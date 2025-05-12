import { c as create_ssr_component, v as validate_component, g as each, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { p as portfolioData } from "../../../chunks/photoData.js";
import { A as AnimationContainer } from "../../../chunks/AnimationContainer.js";
import { B as Button } from "../../../chunks/button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let staggeredItems = [];
  return `${$$result.head += `<!-- HEAD_svelte-1hpzpir_START -->${$$result.title = `<title>About | ${escape(portfolioData.photographer.name)} | Photographer &amp; Filmmaker</title>`, ""}<meta name="description" content="${"Learn more about " + escape(portfolioData.photographer.name, true) + ", a photographer and filmmaker based in " + escape(portfolioData.photographer.location, true) + "."}"><!-- HEAD_svelte-1hpzpir_END -->`, ""}  <section class="pt-32 pb-16 bg-primary"><div class="container mx-auto px-6 md:px-8">${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up" }, {}, {
    default: () => {
      return `<h1 class="text-4xl md:text-5xl font-serif font-bold mb-6 text-center" data-svelte-h="svelte-1intbm7">About Me</h1> <p class="text-muted max-w-2xl mx-auto text-center mb-12" data-svelte-h="svelte-i2c1h3">Learn more about my journey, process, and vision as a photographer and filmmaker.</p>`;
    }
  })}</div></section>  <section class="py-16 bg-primary"><div class="container mx-auto px-6 md:px-8"><div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"><div data-animate>${staggeredItems.includes(0) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-right" }, {}, {
    default: () => {
      return `<div class="aspect-[4/5] relative" data-svelte-h="svelte-1klh5en"><img src="${"/images/" + escape(portfolioData.featuredImages[2], true)}"${add_attribute("alt", portfolioData.photographer.name, 0)} class="w-full h-full object-cover rounded-lg shadow-xl"> <div class="absolute -bottom-6 -right-6 bg-accent p-4 rounded-lg shadow-lg"><p class="text-primary font-serif text-xl font-bold">El.artistry</p></div></div>`;
    }
  })}` : ``}</div> <div data-animate>${staggeredItems.includes(1) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-left", delay: 300 }, {}, {
    default: () => {
      return `<h2 class="text-3xl font-serif font-bold mb-6" data-svelte-h="svelte-11ykoq3">My Story</h2> <div class="prose prose-invert max-w-none"><p class="text-muted mb-6">${escape(portfolioData.photographer.bio)}</p> <p class="text-muted mb-6" data-svelte-h="svelte-6dg1p2">Based in the vibrant city of Accra, Ghana, my work is deeply influenced by the rich cultural heritage, diverse landscapes, and dynamic urban environment of West Africa. I aim to capture authentic moments and tell compelling visual stories that resonate with viewers.</p> <p class="text-muted mb-8" data-svelte-h="svelte-cnlsey">My journey in photography began with a passion for documenting everyday life and has evolved into a professional career spanning various genres and styles. I&#39;m constantly exploring new techniques, perspectives, and approaches to visual storytelling.</p> <div class="mb-6" data-svelte-h="svelte-ytjjnn"><h3 class="text-xl font-bold mb-3">Education &amp; Experience</h3> <ul class="list-disc list-inside text-muted space-y-2"><li>Bachelor of Fine Arts in Photography, University of Ghana (2017-2021)</li> <li>Masterclass in Documentary Photography, World Press Photo Foundation (2022)</li> <li>Workshop in Fashion Photography, Lagos Photo Festival (2023)</li> <li>5+ years working with brands, publications, and individual clients</li></ul></div></div>`;
    }
  })}` : ``}</div></div></div></section>  <section class="py-16 bg-primary"><div class="container mx-auto px-6 md:px-8"><div data-animate>${staggeredItems.includes(2) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up" }, {}, {
    default: () => {
      return `<h2 class="text-3xl md:text-4xl font-serif font-bold mb-6 text-center" data-svelte-h="svelte-reoyqq">Services</h2> <p class="text-muted max-w-2xl mx-auto text-center mb-12" data-svelte-h="svelte-u9u2e8">Professional photography and filmmaking services for a variety of needs</p>`;
    }
  })}` : ``}</div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${each(portfolioData.services, (service, i) => {
    return `<div data-animate>${staggeredItems.includes(3 + i) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up", delay: i * 100 }, {}, {
      default: () => {
        return `<div class="bg-black/20 rounded-lg p-8 h-full"><div class="bg-accent/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${service.icon === "camera" ? `<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path> <circle cx="12" cy="13" r="4"></circle>` : `${service.icon === "user" ? `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path> <circle cx="12" cy="7" r="4"></circle>` : `${service.icon === "calendar" ? `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect> <line x1="16" y1="2" x2="16" y2="6"></line> <line x1="8" y1="2" x2="8" y2="6"></line> <line x1="3" y1="10" x2="21" y2="10"></line>` : `${service.icon === "video" ? `<polygon points="23 7 16 12 23 17 23 7"></polygon> <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>` : `${service.icon === "compass" ? `<circle cx="12" cy="12" r="10"></circle> <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>` : `<circle cx="12" cy="12" r="10"></circle>`}`}`}`}`}</svg></div> <h3 class="text-xl font-bold mb-3">${escape(service.title)}</h3> <p class="text-muted mb-4">${escape(service.description)}</p></div> `;
      }
    })}` : ``} </div>`;
  })}</div></div></section>  <section class="py-16 bg-primary"><div class="container mx-auto px-6 md:px-8"><div data-animate>${staggeredItems.includes(8) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up" }, {}, {
    default: () => {
      return `<h2 class="text-3xl md:text-4xl font-serif font-bold mb-6 text-center" data-svelte-h="svelte-1ih1tfb">Client Testimonials</h2> <p class="text-muted max-w-2xl mx-auto text-center mb-12" data-svelte-h="svelte-1u36acq">What clients have to say about working with me</p>`;
    }
  })}` : ``}</div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${each(portfolioData.testimonials, (testimonial, i) => {
    return `<div data-animate>${staggeredItems.includes(9 + i) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up", delay: i * 100 }, {}, {
      default: () => {
        return `<div class="bg-black/20 rounded-lg p-8 h-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent mb-6 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5"></path><path d="M19 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5"></path></svg> <p class="text-muted italic mb-6">&quot;${escape(testimonial.quote)}&quot;</p> <div class="flex items-center"><div class="mr-4" data-svelte-h="svelte-we3sn0"><img${add_attribute("src", `/images/${testimonial.image}`, 0)}${add_attribute("alt", testimonial.name, 0)} class="w-12 h-12 rounded-full object-cover"></div> <div><p class="font-bold">${escape(testimonial.name)}</p> <p class="text-sm text-muted">${escape(testimonial.position)}, ${escape(testimonial.company)}</p></div> </div></div> `;
      }
    })}` : ``} </div>`;
  })}</div></div></section>  <section class="py-16 bg-primary"><div class="container mx-auto px-6 md:px-8"><div class="bg-black/20 rounded-xl p-8 md:p-12 text-center" data-animate>${staggeredItems.includes(12) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up" }, {}, {
    default: () => {
      return `<h2 class="text-3xl md:text-4xl font-serif font-bold mb-4" data-svelte-h="svelte-1oz0l93">Ready to Work Together?</h2> <p class="text-muted max-w-2xl mx-auto mb-8" data-svelte-h="svelte-15ocnfz">I&#39;m currently available for freelance photography and filmmaking projects. Let&#39;s create something amazing together.</p> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "outline",
          size: "lg",
          class_: "uppercase tracking-wider"
        },
        {},
        {
          default: () => {
            return `<a href="/contact" data-svelte-h="svelte-1u3ukop">Get in Touch</a>`;
          }
        }
      )}`;
    }
  })}` : ``}</div></div></section>`;
});
export {
  Page as default
};
