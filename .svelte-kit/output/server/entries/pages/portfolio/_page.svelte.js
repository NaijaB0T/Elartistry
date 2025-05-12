import { c as create_ssr_component, v as validate_component, g as each, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { p as portfolioData } from "../../../chunks/photoData.js";
import "clsx";
import { A as AnimationContainer } from "../../../chunks/AnimationContainer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeCategory = "all";
  let filteredImages = [];
  let categories = [{ id: "all", name: "All Work" }, ...portfolioData.categories];
  portfolioData.categories.flatMap((category) => category.images.map((image) => ({ image, category: category.id })));
  return `${$$result.head += `<!-- HEAD_svelte-d18y4t_START -->${$$result.title = `<title>Portfolio | ${escape(portfolioData.photographer.name)} | Photographer &amp; Filmmaker</title>`, ""}<meta name="description" content="${"Explore the portfolio of " + escape(portfolioData.photographer.name, true) + ", a photographer and filmmaker based in " + escape(portfolioData.photographer.location, true) + "."}"><!-- HEAD_svelte-d18y4t_END -->`, ""}  <section class="pt-32 pb-16 bg-primary"><div class="container mx-auto px-6 md:px-8">${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up" }, {}, {
    default: () => {
      return `<h1 class="text-4xl md:text-5xl font-serif font-bold mb-6 text-center" data-svelte-h="svelte-ds6rve">Portfolio</h1> <p class="text-muted max-w-2xl mx-auto text-center mb-12" data-svelte-h="svelte-1wfyf0c">A curated collection of my work across various projects and styles.</p>`;
    }
  })}  <div class="flex flex-wrap justify-center gap-4 mb-12">${each(categories, (category) => {
    return `<button class="${[
      "px-4 py-2 rounded-full transition-colors duration-300 text-sm",
      (activeCategory === category.id ? "bg-accent" : "") + " " + (activeCategory === category.id ? "text-primary" : "") + " " + (activeCategory !== category.id ? "bg-gray-800" : "") + " " + (activeCategory !== category.id ? "text-secondary" : "")
    ].join(" ").trim()}">${escape(category.name)} </button>`;
  })}</div></div></section>  <section class="pb-20 bg-primary"><div class="container mx-auto px-6 md:px-8">${`<div class="h-96 flex items-center justify-center" data-svelte-h="svelte-bo36m"><div class="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin"></div></div>`} ${filteredImages.length === 0 ? `<div class="text-center py-16" data-svelte-h="svelte-utvicm"><p class="text-muted">No images found in this category.</p></div>` : ``}</div></section>  <section class="py-20 bg-primary"><div class="container mx-auto px-6 md:px-8">${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up" }, {}, {
    default: () => {
      return `<h2 class="text-3xl md:text-4xl font-serif font-bold mb-6 text-center" data-svelte-h="svelte-w00gps">Projects</h2> <p class="text-muted max-w-2xl mx-auto text-center mb-12" data-svelte-h="svelte-xqb2yz">Explore my featured projects and series</p>`;
    }
  })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${each(portfolioData.projects, (project, i) => {
    return `${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up", delay: i * 100 }, {}, {
      default: () => {
        return `<a${add_attribute("href", `/portfolio/${project.id}`, 0)} class="block group"><div class="relative overflow-hidden rounded-lg mb-4" data-svelte-h="svelte-vj32mt"><img${add_attribute("src", `/images/${project.images[0]}`, 0)}${add_attribute("alt", project.title, 0)} class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"><div><span class="text-white text-sm">View Project</span></div> </div></div> <h3 class="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">${escape(project.title)}</h3> <p class="text-sm text-accent mb-2">${escape(project.category)} · ${escape(project.year)}</p> <p class="text-muted text-sm line-clamp-2">${escape(project.description)}</p></a> `;
      }
    })}`;
  })}</div></div></section>  ${``}`;
});
export {
  Page as default
};
