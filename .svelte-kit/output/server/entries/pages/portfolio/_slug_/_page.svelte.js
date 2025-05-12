import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape, h as each } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { p as portfolioData } from "../../../../chunks/photoData.js";
import { A as AnimationContainer } from "../../../../chunks/AnimationContainer.js";
import "clsx";
import { B as Button } from "../../../../chunks/button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let projectId = $page.params.slug;
  let project = portfolioData.projects.find((p) => p.id === projectId);
  let otherProjects = [];
  if (project) {
    otherProjects = portfolioData.projects.filter((p) => p.id !== projectId).slice(0, 3);
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-sottux_START -->${project ? `${$$result.title = `<title>${escape(project.title)} | ${escape(portfolioData.photographer.name)}</title>`, ""} <meta name="description"${add_attribute("content", project.description, 0)}>` : `${$$result.title = `<title>Project Not Found | ${escape(portfolioData.photographer.name)}</title>`, ""} <meta name="description" content="The requested project could not be found.">`}<!-- HEAD_svelte-sottux_END -->`, ""} <div class="bg-primary text-secondary min-h-screen">${project ? ` <section class="pt-32 pb-16"><div class="container mx-auto px-6 md:px-8">${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up" }, {}, {
    default: () => {
      return `<a href="/portfolio" class="inline-flex items-center text-muted hover:text-accent transition-colors duration-300 mb-6" data-svelte-h="svelte-brbxo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M19 12H5M12 19l-7-7 7-7"></path></svg>
            Back to Portfolio</a> <h1 class="text-4xl md:text-5xl font-serif font-bold mb-4">${escape(project.title)}</h1> <div class="flex flex-wrap gap-4 mb-6"><span class="text-accent">${escape(project.category)}</span> <span class="text-muted" data-svelte-h="svelte-qkpqcr">·</span> <span class="text-muted">${escape(project.year)}</span></div> <p class="text-muted max-w-2xl mb-8">${escape(project.description)}</p>`;
    }
  })}</div></section>  <section class="pb-16"><div class="container mx-auto px-6 md:px-8">${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "fade-in", delay: 300 }, {}, {
    default: () => {
      return `<div class="grid grid-cols-2 md:grid-cols-3 gap-6">${each(project.images, (image, index) => {
        return `<div class="relative overflow-hidden rounded-lg cursor-pointer group" tabindex="0" role="button" aria-label="View image in gallery"><div class="aspect-[3/4] overflow-hidden"><img${add_attribute("src", `/images/${image}`, 0)}${add_attribute("alt", `${project.title} - Image ${index + 1}`, 0)} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"></div> <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" data-svelte-h="svelte-1t5sxaj"><div class="bg-primary/80 p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg> </div></div> </div>`;
      })}</div>`;
    }
  })}</div></section>  <section class="py-16"><div class="container mx-auto px-6 md:px-8">${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up" }, {}, {
    default: () => {
      return `<h2 class="text-3xl font-serif font-bold mb-6" data-svelte-h="svelte-56ep6v">More Projects</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${each(otherProjects, (otherProject) => {
        return `<a${add_attribute("href", `/portfolio/${otherProject.id}`, 0)} class="block group"><div class="relative overflow-hidden rounded-lg mb-4"><img${add_attribute("src", `/images/${otherProject.images[0]}`, 0)}${add_attribute("alt", otherProject.title, 0)} class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" data-svelte-h="svelte-1wsgzj5"><div><span class="text-white text-sm">View Project</span></div> </div></div> <h3 class="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">${escape(otherProject.title)}</h3> <p class="text-sm text-accent mb-2">${escape(otherProject.category)} · ${escape(otherProject.year)}</p> </a>`;
      })}</div>`;
    }
  })}</div></section>` : ` <section class="pt-32 pb-20 flex flex-col items-center justify-center"><div class="container mx-auto px-6 md:px-8 text-center"><h1 class="text-4xl md:text-5xl font-serif font-bold mb-6" data-svelte-h="svelte-3ftwyv">Project Not Found</h1> <p class="text-muted max-w-2xl mx-auto mb-8" data-svelte-h="svelte-sdp6z7">The project you are looking for does not exist or has been removed.</p> ${validate_component(Button, "Button").$$render($$result, { variant: "outline", size: "lg" }, {}, {
    default: () => {
      return `<a href="/portfolio" data-svelte-h="svelte-7nwqkr">Back to Portfolio</a>`;
    }
  })}</div></section>`}</div>  ${``}`;
});
export {
  Page as default
};
