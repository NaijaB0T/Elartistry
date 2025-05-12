import { c as create_ssr_component, g as createEventDispatcher, b as add_attribute, h as each, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { p as portfolioData } from "../../chunks/photoData.js";
import { s as shuffleArray, B as Button } from "../../chunks/button.js";
import "clsx";
import { A as AnimationContainer } from "../../chunks/AnimationContainer.js";
const ImageGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let columnClass;
  let { images = [] } = $$props;
  let { basePath = "/images/" } = $$props;
  let { columns = 3 } = $$props;
  let { gap = "gap-4" } = $$props;
  let { showCaption = false } = $$props;
  let { aspectRatio = "aspect-[3/4]" } = $$props;
  let { onClick = null } = $$props;
  createEventDispatcher();
  let visibleImages = [];
  if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
  if ($$props.basePath === void 0 && $$bindings.basePath && basePath !== void 0) $$bindings.basePath(basePath);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0) $$bindings.columns(columns);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0) $$bindings.gap(gap);
  if ($$props.showCaption === void 0 && $$bindings.showCaption && showCaption !== void 0) $$bindings.showCaption(showCaption);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0) $$bindings.aspectRatio(aspectRatio);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  columnClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
  }[columns] || "grid-cols-1 md:grid-cols-3";
  return `<div${add_attribute("class", `grid ${columnClass} ${gap}`, 0)}>${each(images, (image, index) => {
    return `<div class="image-container overflow-hidden relative cursor-pointer"${add_attribute("data-index", index, 0)} tabindex="0" role="button" aria-label="View image">${visibleImages.includes(index) ? `<div${add_attribute("class", `${aspectRatio} overflow-hidden`, 0)}><img${add_attribute("src", `${basePath}${image}`, 0)} alt="Photography work" class="image-hover w-full h-full object-cover transition-transform duration-700 ease-in-out" loading="lazy"></div> ${showCaption ? `<div class="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"><p class="text-white text-sm">${escape(image.replace(/\.\w+$/, "").replace(/_/g, " "))}</p> </div>` : ``}` : `<div${add_attribute("class", `${aspectRatio} bg-gray-900`, 0)}></div>`} </div>`;
  })}</div>`;
});
const FullscreenGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images = [] } = $$props;
  let { currentIndex = 0 } = $$props;
  let { basePath = "/images/" } = $$props;
  createEventDispatcher();
  if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
  if ($$props.currentIndex === void 0 && $$bindings.currentIndex && currentIndex !== void 0) $$bindings.currentIndex(currentIndex);
  if ($$props.basePath === void 0 && $$bindings.basePath && basePath !== void 0) $$bindings.basePath(basePath);
  return `<div class="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Image gallery">${`<div class="absolute inset-0 flex items-center justify-center" data-svelte-h="svelte-1wgxds7"><div class="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin"></div></div>`}  <div class="relative w-full h-full flex items-center justify-center p-4 sm:p-12" role="presentation"><img${add_attribute("src", `${basePath}${images[currentIndex]}`, 0)} alt="Gallery image" class="max-w-full max-h-full object-contain"></div>  <button class="absolute top-6 right-6 text-white hover:text-accent transition-colors duration-300 z-10" aria-label="Close gallery" data-svelte-h="svelte-98er5h"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>  <button class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors duration-300 bg-black bg-opacity-50 rounded-full p-2 z-10" aria-label="Previous image" data-svelte-h="svelte-1grcdh1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button> <button class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors duration-300 bg-black bg-opacity-50 rounded-full p-2 z-10" aria-label="Next image" data-svelte-h="svelte-oyoazh"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>  <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full text-sm z-10">${escape(currentIndex + 1)} / ${escape(images.length)}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let featuredProjects = portfolioData.projects.slice(0, 3);
  let featuredCategories = portfolioData.categories.filter((c) => c.featured);
  let galleryOpen = false;
  let galleryImages = [];
  let galleryIndex = 0;
  let staggeredItems = [];
  let randomizedFeaturedImages = shuffleArray(portfolioData.featuredImages).slice(0, 9);
  function openGallery(image, index, collection) {
    galleryImages = collection || [image];
    galleryIndex = index || 0;
    galleryOpen = true;
  }
  return `${$$result.head += `<!-- HEAD_svelte-1lxs7yt_START -->${$$result.title = `<title>${escape(portfolioData.photographer.name)} | Photographer &amp; Filmmaker | ${escape(portfolioData.photographer.location)}</title>`, ""}<meta name="description" content="${"Portfolio of " + escape(portfolioData.photographer.name, true) + ", a photographer and filmmaker based in " + escape(portfolioData.photographer.location, true) + "."}"><!-- HEAD_svelte-1lxs7yt_END -->`, ""}  <section class="relative h-screen flex items-center justify-center overflow-hidden"><div class="absolute inset-0 z-0" data-svelte-h="svelte-1kor5s4"><img src="${"/images/" + escape(portfolioData.featuredImages[0], true)}" alt="Featured photography work" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black bg-opacity-50"></div></div> <div class="container mx-auto px-6 md:px-8 relative z-10 text-center">${``}</div> <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"><a href="#about" class="flex flex-col items-center text-white hover:text-accent transition-colors duration-300" data-svelte-h="svelte-h3buqv"><span class="mb-2 text-sm">Scroll</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-bounce"><path d="M12 5v14M19 12l-7 7-7-7"></path></svg></a></div></section>  <section id="about" class="py-20 md:py-28 bg-primary"><div class="container mx-auto px-6 md:px-8"><div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"><div data-animate>${staggeredItems.includes(0) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-right" }, {}, {
    default: () => {
      return `<div class="relative" data-svelte-h="svelte-1vr27z8"><img src="${"/images/" + escape(portfolioData.featuredImages[1], true)}" alt="Photographer portrait" class="w-full h-auto rounded-lg shadow-xl"> <div class="absolute -bottom-6 -right-6 bg-accent p-3 rounded-lg shadow-lg"><p class="text-primary font-serif text-xl">El.artistry</p></div></div>`;
    }
  })}` : ``}</div> <div data-animate>${staggeredItems.includes(1) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-left", delay: 300 }, {}, {
    default: () => {
      return `<h2 class="text-3xl md:text-4xl font-serif font-bold mb-6" data-svelte-h="svelte-1q7p7zg">About Me</h2> <p class="text-lg text-muted mb-6">${escape(portfolioData.photographer.bio)}</p> <p class="text-muted mb-8">Based in ${escape(portfolioData.photographer.location)}</p> ${validate_component(Button, "Button").$$render($$result, { variant: "outline" }, {}, {
        default: () => {
          return `<a href="/about" data-svelte-h="svelte-1ax0g9r">Learn More</a>`;
        }
      })}`;
    }
  })}` : ``}</div></div></div></section>  <section class="py-20 md:py-28 bg-primary"><div class="container mx-auto px-6 md:px-8"><div data-animate>${staggeredItems.includes(2) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up" }, {}, {
    default: () => {
      return `<h2 class="text-3xl md:text-4xl font-serif font-bold mb-2 text-center" data-svelte-h="svelte-1crc5gd">Featured Work</h2> <p class="text-muted mb-12 text-center" data-svelte-h="svelte-gnwlg8">A selection of recent projects and collaborations</p>`;
    }
  })}` : ``}</div> <div data-animate>${staggeredItems.includes(3) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "fade-in", delay: 300 }, {}, {
    default: () => {
      return `${validate_component(ImageGrid, "ImageGrid").$$render(
        $$result,
        {
          images: randomizedFeaturedImages,
          columns: 3,
          basePath: "/images/",
          onClick: (image, index) => openGallery(image, index, randomizedFeaturedImages)
        },
        {},
        {}
      )}`;
    }
  })}` : ``}</div> <div class="text-center mt-12" data-animate>${staggeredItems.includes(4) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up", delay: 400 }, {}, {
    default: () => {
      return `${validate_component(Button, "Button").$$render($$result, { variant: "outline" }, {}, {
        default: () => {
          return `<a href="/portfolio" data-svelte-h="svelte-1604gg4">View All Work</a>`;
        }
      })}`;
    }
  })}` : ``}</div></div></section>  <section class="py-20 md:py-28 bg-primary"><div class="container mx-auto px-6 md:px-8"><div data-animate>${staggeredItems.includes(5) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up" }, {}, {
    default: () => {
      return `<h2 class="text-3xl md:text-4xl font-serif font-bold mb-2 text-center" data-svelte-h="svelte-h7ahz6">Categories</h2> <p class="text-muted mb-12 text-center" data-svelte-h="svelte-19nz8ar">Explore my work by specialty</p>`;
    }
  })}` : ``}</div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${each(featuredCategories, (category, i) => {
    return `<div data-animate>${staggeredItems.includes(6 + i) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render(
      $$result,
      {
        animation: "slide-up",
        delay: 200 + i * 100
      },
      {},
      {
        default: () => {
          return `<div class="group relative overflow-hidden rounded-lg"><img${add_attribute("src", `/images/${category.images[0]}`, 0)}${add_attribute("alt", category.name, 0)} class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"><div><h3 class="text-xl font-bold text-white mb-2">${escape(category.name)}</h3> <p class="text-white/80 text-sm mb-4">${escape(category.description)}</p> <a${add_attribute("href", `/portfolio?category=${category.id}`, 0)} class="text-accent hover:text-white transition-colors duration-300 text-sm flex items-center">View Collection
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M5 12h14M12 5l7 7-7 7"></path></svg> </a></div> </div></div> `;
        }
      }
    )}` : ``} </div>`;
  })}</div></div></section>  <section class="py-20 md:py-28 bg-primary"><div class="container mx-auto px-6 md:px-8"><div data-animate>${staggeredItems.includes(9) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up" }, {}, {
    default: () => {
      return `<h2 class="text-3xl md:text-4xl font-serif font-bold mb-2 text-center" data-svelte-h="svelte-nj58wp">Recent Projects</h2> <p class="text-muted mb-12 text-center" data-svelte-h="svelte-1kc9i49">A collection of my latest creative endeavors</p>`;
    }
  })}` : ``}</div> ${each(featuredProjects, (project, i) => {
    return `<div class="mb-20 md:mb-28 last:mb-0" data-animate>${staggeredItems.includes(10 + i) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render(
      $$result,
      {
        animation: "slide-up",
        delay: 200 + i * 100
      },
      {},
      {
        default: () => {
          return `<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"><div${add_attribute("class", i % 2 === 0 ? "md:order-1" : "md:order-2", 0)}><h3 class="text-2xl md:text-3xl font-serif font-bold mb-4">${escape(project.title)}</h3> <p class="text-sm text-accent mb-4">${escape(project.category)} · ${escape(project.year)}</p> <p class="text-muted mb-6">${escape(project.description)}</p> ${validate_component(Button, "Button").$$render($$result, { variant: "outline" }, {}, {
            default: () => {
              return `<a${add_attribute("href", `/portfolio/${project.id}`, 0)}>View Project</a> `;
            }
          })}</div> <div${add_attribute("class", i % 2 === 0 ? "md:order-2" : "md:order-1", 0)}><div class="relative overflow-hidden rounded-lg group cursor-pointer" tabindex="0" role="button" aria-label="View project gallery"><img${add_attribute("src", `/images/${project.images[0]}`, 0)}${add_attribute("alt", project.title, 0)} class="w-full h-auto transition-transform duration-700 group-hover:scale-105"> <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" data-svelte-h="svelte-1yr8jgz"><div class="bg-primary/80 px-4 py-2 rounded-full"><span class="text-white text-sm">View Gallery</span></div> </div></div> </div></div> `;
        }
      }
    )}` : ``} </div>`;
  })}</div></section>  <section class="py-20 md:py-28 bg-primary"><div class="container mx-auto px-6 md:px-8"><div class="bg-black/20 rounded-xl p-8 md:p-12 text-center" data-animate>${staggeredItems.includes(13) ? `${validate_component(AnimationContainer, "AnimationContainer").$$render($$result, { animation: "slide-up" }, {}, {
    default: () => {
      return `<h2 class="text-3xl md:text-4xl font-serif font-bold mb-4" data-svelte-h="svelte-jxpmsr">Let&#39;s Work Together</h2> <p class="text-muted max-w-2xl mx-auto mb-8" data-svelte-h="svelte-nctnax">Interested in collaborating on a project? I&#39;m available for freelance work and open to new opportunities.</p> ${validate_component(Button, "Button").$$render(
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
  })}` : ``}</div></div></section>  ${galleryOpen ? `${validate_component(FullscreenGallery, "FullscreenGallery").$$render(
    $$result,
    {
      images: galleryImages,
      currentIndex: galleryIndex,
      basePath: "/images/"
    },
    {},
    {}
  )}` : ``}`;
});
export {
  Page as default
};
