import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { p as portfolioData } from "../../chunks/photoData.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { menuOpen: menuOpen2 = false } = $$props;
  if ($$props.menuOpen === void 0 && $$bindings.menuOpen && menuOpen2 !== void 0) $$bindings.menuOpen(menuOpen2);
  $$unsubscribe_page();
  return `<header class="${[
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-8 md:py-6 " + escape("", true),
    "  translate-y-0"
  ].join(" ").trim()}"><div class="container mx-auto flex justify-between items-center"><a href="/" class="text-xl md:text-2xl font-bold text-secondary flex items-center" data-svelte-h="svelte-1xf7342"><span class="font-serif font-bold">El.artistry</span></a> <nav class="hidden md:flex space-x-8"><a href="/" class="${[
    "text-secondary hover:text-accent transition-colors duration-300",
    $page.url.pathname === "/" ? "text-accent" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-16w8rpc">Home</a> <a href="/portfolio" class="${[
    "text-secondary hover:text-accent transition-colors duration-300",
    $page.url.pathname === "/portfolio" ? "text-accent" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1fvvhkj">Portfolio</a> <a href="/about" class="${[
    "text-secondary hover:text-accent transition-colors duration-300",
    $page.url.pathname === "/about" ? "text-accent" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1r1jj5e">About</a> <a href="/contact" class="${[
    "text-secondary hover:text-accent transition-colors duration-300",
    $page.url.pathname === "/contact" ? "text-accent" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-155259v">Contact</a></nav> <div class="flex items-center space-x-4"><a href="${"https://www.instagram.com/" + escape(portfolioData.photographer.instagram, true)}" target="_blank" rel="noopener noreferrer" class="text-secondary hover:text-accent transition-colors duration-300 hidden md:block" data-svelte-h="svelte-6fu6ho"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a> <button class="text-secondary hover:text-accent md:hidden flex flex-col space-y-1.5" aria-label="Toggle menu"><span class="${[
    "block w-6 h-0.5 bg-current transition-transform duration-300",
    (menuOpen2 ? "rotate-45" : "") + " " + (menuOpen2 ? "translate-y-2" : "")
  ].join(" ").trim()}"></span> <span class="${[
    "block w-6 h-0.5 bg-current transition-opacity duration-300",
    menuOpen2 ? "opacity-0" : ""
  ].join(" ").trim()}"></span> <span class="${[
    "block w-6 h-0.5 bg-current transition-transform duration-300",
    (menuOpen2 ? "-rotate-45" : "") + " " + (menuOpen2 ? "-translate-y-2" : "")
  ].join(" ").trim()}"></span></button></div></div></header>  ${menuOpen2 ? `<div class="fixed inset-0 bg-primary z-40 flex flex-col justify-center items-center"><nav class="flex flex-col space-y-6 text-center"><a href="/" class="${[
    "text-secondary hover:text-accent transition-colors duration-300 text-3xl",
    $page.url.pathname === "/" ? "text-accent" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-150nbbb">Home</a> <a href="/portfolio" class="${[
    "text-secondary hover:text-accent transition-colors duration-300 text-3xl",
    $page.url.pathname === "/portfolio" ? "text-accent" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-13k2o1c">Portfolio</a> <a href="/about" class="${[
    "text-secondary hover:text-accent transition-colors duration-300 text-3xl",
    $page.url.pathname === "/about" ? "text-accent" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1hgj7g1">About</a> <a href="/contact" class="${[
    "text-secondary hover:text-accent transition-colors duration-300 text-3xl",
    $page.url.pathname === "/contact" ? "text-accent" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-2fzsf8">Contact</a></nav> <div class="absolute bottom-12 flex justify-center" data-svelte-h="svelte-1e3uyi0"><a href="${"https://www.instagram.com/" + escape(portfolioData.photographer.instagram, true)}" target="_blank" rel="noopener noreferrer" class="text-secondary hover:text-accent transition-colors duration-300 text-2xl p-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></div></div>` : ``}`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer id="footer" class="bg-primary text-secondary py-12 mt-16"><div class="container mx-auto px-6 md:px-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-10"> <div${add_attribute("class", "opacity-0", 0)}><h3 class="text-2xl font-serif font-bold mb-4" data-svelte-h="svelte-ev5qvg">El.artistry</h3> <p class="text-muted mb-4">${escape(portfolioData.photographer.availability)}</p> <p class="text-muted">${escape(portfolioData.photographer.location)}</p></div>  <div${add_attribute("class", "opacity-0", 0)}><h4 class="text-lg font-semibold mb-4" data-svelte-h="svelte-1rs7sn3">Navigation</h4> <nav class="flex flex-col space-y-2" data-svelte-h="svelte-g0yozy"><a href="/" class="text-muted hover:text-accent transition-colors duration-300">Home</a> <a href="/portfolio" class="text-muted hover:text-accent transition-colors duration-300">Portfolio</a> <a href="/about" class="text-muted hover:text-accent transition-colors duration-300">About</a> <a href="/contact" class="text-muted hover:text-accent transition-colors duration-300">Contact</a></nav></div>  <div${add_attribute("class", "opacity-0", 0)}><h4 class="text-lg font-semibold mb-4" data-svelte-h="svelte-1e679lx">Contact</h4> <ul class="space-y-2 text-muted"><li><a href="${"mailto:" + escape(portfolioData.photographer.email, true)}" class="hover:text-accent transition-colors duration-300 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> ${escape(portfolioData.photographer.email)}</a></li> <li><a href="${"tel:" + escape(portfolioData.photographer.phone.replace(/\s/g, ""), true)}" class="hover:text-accent transition-colors duration-300 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> ${escape(portfolioData.photographer.phone)}</a></li> <li><a href="${"https://www.instagram.com/" + escape(portfolioData.photographer.instagram, true)}" target="_blank" rel="noopener noreferrer" class="hover:text-accent transition-colors duration-300 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              @${escape(portfolioData.photographer.instagram)}</a></li></ul></div></div>  <div class="border-t border-gray-800 my-8"></div>  <div class="flex flex-col sm:flex-row justify-between items-center"><p class="text-sm text-muted mb-4 sm:mb-0">© ${escape((/* @__PURE__ */ new Date()).getFullYear())} ${escape(portfolioData.photographer.name)}. All rights reserved.</p> <a href="#top" class="flex items-center text-sm text-muted hover:text-accent transition-colors duration-300" data-svelte-h="svelte-141nho2">Back to top
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"></path></svg></a></div></div></footer>`;
});
const CustomCursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { enabled = true } = $$props;
  if ($$props.enabled === void 0 && $$bindings.enabled && enabled !== void 0) $$bindings.enabled(enabled);
  return ``;
});
let menuOpen = false;
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` ${`<div class="fixed inset-0 z-50 bg-primary flex items-center justify-center" data-svelte-h="svelte-pxjqb1"><div class="text-center"><div class="inline-block relative"><p class="text-2xl md:text-3xl font-serif text-secondary mb-4">El.artistry</p> <div class="w-full h-1 bg-gray-800 rounded overflow-hidden"><div class="h-full bg-accent w-2/3 animate-pulse"></div></div></div></div></div>`}  ${validate_component(CustomCursor, "CustomCursor").$$render($$result, { enabled: true }, {}, {})}  <div class="flex flex-col min-h-screen bg-primary text-secondary">${validate_component(Header, "Header").$$render($$result, { menuOpen }, {}, {})} <main class="${["flex-1", ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
