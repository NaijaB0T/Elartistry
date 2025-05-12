import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from "../../../chunks/ssr.js";
import { p as portfolioData } from "../../../chunks/photoData.js";
import { A as AnimationContainer } from "../../../chunks/AnimationContainer.js";
import { B as Button } from "../../../chunks/button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formData = {
    name: "",
    email: "",
    subject: ""
  };
  let formStatus = {
    submitting: false
  };
  return `${$$result.head += `<!-- HEAD_svelte-1f62igw_START -->${$$result.title = `<title>Contact | ${escape(portfolioData.photographer.name)} | Photographer &amp; Filmmaker</title>`, ""}<meta name="description" content="${"Get in touch with " + escape(portfolioData.photographer.name, true) + ", a photographer and filmmaker based in " + escape(portfolioData.photographer.location, true) + "."}"><!-- HEAD_svelte-1f62igw_END -->`, ""}  <section class="pt-32 pb-16 bg-primary"><div class="container mx-auto px-6 md:px-8">${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up" }, {}, {
    default: () => {
      return `<h1 class="text-4xl md:text-5xl font-serif font-bold mb-6 text-center" data-svelte-h="svelte-16pr0vc">Get in Touch</h1> <p class="text-muted max-w-2xl mx-auto text-center mb-12" data-svelte-h="svelte-439uuf">Interested in working together? Send me a message and let&#39;s create something amazing.</p>`;
    }
  })}</div></section>  <section class="pb-20 bg-primary"><div class="container mx-auto px-6 md:px-8"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> ${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-right" }, {}, {
    default: () => {
      return `<div class="bg-black/20 rounded-lg p-8"><h2 class="text-2xl font-serif font-bold mb-6" data-svelte-h="svelte-7o9i2h">Send a Message</h2> ${``} ${``} <form class="space-y-6"><div class="space-y-2"><label for="name" class="block text-sm font-medium" data-svelte-h="svelte-fruco5">Name</label> <input type="text" id="name" required class="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-accent focus:outline-none text-secondary placeholder-gray-500" placeholder="Your name"${add_attribute("value", formData.name, 0)}></div> <div class="space-y-2"><label for="email" class="block text-sm font-medium" data-svelte-h="svelte-1bloncf">Email</label> <input type="email" id="email" required class="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-accent focus:outline-none text-secondary placeholder-gray-500" placeholder="Your email address"${add_attribute("value", formData.email, 0)}></div> <div class="space-y-2"><label for="subject" class="block text-sm font-medium" data-svelte-h="svelte-kpuklr">Subject</label> <input type="text" id="subject" required class="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-accent focus:outline-none text-secondary placeholder-gray-500" placeholder="Subject of your message"${add_attribute("value", formData.subject, 0)}></div> <div class="space-y-2"><label for="message" class="block text-sm font-medium" data-svelte-h="svelte-13xp5m5">Message</label> <textarea id="message" required rows="5" class="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-accent focus:outline-none text-secondary placeholder-gray-500" placeholder="Your message">${escape("")}</textarea></div> <div>${validate_component(Button, "Button").$$render(
        $$result,
        {
          type: "submit",
          variant: "outline",
          class_: "w-full",
          disabled: formStatus.submitting
        },
        {},
        {
          default: () => {
            return `${`Send Message`}`;
          }
        }
      )}</div></form></div>`;
    }
  })}  ${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-left", delay: 300 }, {}, {
    default: () => {
      return `<div class="lg:pl-8"><h2 class="text-2xl font-serif font-bold mb-6" data-svelte-h="svelte-ducqb1">Contact Information</h2> <div class="space-y-8"><div><h3 class="text-lg font-bold mb-2" data-svelte-h="svelte-1oqqjwg">Location</h3> <p class="text-muted flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 mt-0.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> ${escape(portfolioData.photographer.location)}</p></div> <div><h3 class="text-lg font-bold mb-2" data-svelte-h="svelte-kfch6r">Email</h3> <p class="text-muted flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 mt-0.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> <a href="${"mailto:" + escape(portfolioData.photographer.email, true)}" class="hover:text-accent transition-colors duration-300">${escape(portfolioData.photographer.email)}</a></p></div> <div><h3 class="text-lg font-bold mb-2" data-svelte-h="svelte-1u6rbqz">Phone</h3> <p class="text-muted flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 mt-0.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> <a href="${"tel:" + escape(portfolioData.photographer.phone.replace(/\s/g, ""), true)}" class="hover:text-accent transition-colors duration-300">${escape(portfolioData.photographer.phone)}</a></p></div> <div><h3 class="text-lg font-bold mb-2" data-svelte-h="svelte-eljqh3">Instagram</h3> <p class="text-muted flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 mt-0.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> <a href="${"https://www.instagram.com/" + escape(portfolioData.photographer.instagram, true)}" target="_blank" rel="noopener noreferrer" class="hover:text-accent transition-colors duration-300">@${escape(portfolioData.photographer.instagram)}</a></p></div></div> <div class="mt-12" data-svelte-h="svelte-nshe4z"><h3 class="text-lg font-bold mb-4">Available For</h3> <ul class="space-y-2"><li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Commercial Photography</li> <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Portrait Sessions</li> <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Event Coverage</li> <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Filmmaking &amp; Videography</li> <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Creative Direction</li></ul></div></div>`;
    }
  })}</div></div></section>  <section class="pb-20 bg-primary"><div class="container mx-auto px-6 md:px-8">${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up" }, {}, {
    default: () => {
      return `<div class="relative h-80 rounded-lg overflow-hidden" data-svelte-h="svelte-61d0hn"><img src="${"/images/" + escape(portfolioData.featuredImages[3], true)}" alt="Accra, Ghana" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end"><div class="p-8 w-full"><h3 class="text-xl font-bold mb-2">Based in Accra, Ghana</h3> <p class="text-muted">Available for projects worldwide</p></div></div></div>`;
    }
  })}</div></section>`;
});
export {
  Page as default
};
