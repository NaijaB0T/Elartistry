import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component, e as escape, d as add_classes } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { p as portfolioData } from "../../chunks/photoData.js";
import { w as writable } from "../../chunks/index2.js";
const storedTheme = "dark";
const theme = writable(storedTheme);
const css$1 = {
  code: "button.svelte-9ipa3d{margin-left:8px;box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}",
  map: `{"version":3,"file":"ThemeToggle.svelte","sources":["ThemeToggle.svelte"],"sourcesContent":["<script>\\n  import { theme, toggleTheme } from '$lib/stores/theme';\\n  \\n  // Animation properties\\n  let isAnimating = false;\\n  \\n  function handleToggle() {\\n    if (isAnimating) return;\\n    \\n    isAnimating = true;\\n    toggleTheme();\\n    \\n    // Reset animation flag after animation completes\\n    setTimeout(() => {\\n      isAnimating = false;\\n    }, 600);\\n  }\\n<\/script>\\n\\n<button\\n  type=\\"button\\"\\n  class=\\"relative inline-flex items-center justify-center p-1 h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200\\"\\n  class:bg-accent={$theme === 'dark'}\\n  class:bg-gray-800={$theme === 'light'}\\n  on:click={handleToggle}\\n  aria-label={$theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}\\n>\\n  {#if $theme === 'dark'}\\n    <!-- Sun icon for dark mode -->\\n    <svg \\n      xmlns=\\"http://www.w3.org/2000/svg\\" \\n      class=\\"h-5 w-5 text-white transition-transform duration-500 ease-out\\" \\n      class:rotate-180={isAnimating}\\n      viewBox=\\"0 0 24 24\\" \\n      fill=\\"none\\" \\n      stroke=\\"currentColor\\" \\n      stroke-width=\\"2\\" \\n      stroke-linecap=\\"round\\" \\n      stroke-linejoin=\\"round\\"\\n    >\\n      <circle cx=\\"12\\" cy=\\"12\\" r=\\"5\\"></circle>\\n      <line x1=\\"12\\" y1=\\"1\\" x2=\\"12\\" y2=\\"3\\"></line>\\n      <line x1=\\"12\\" y1=\\"21\\" x2=\\"12\\" y2=\\"23\\"></line>\\n      <line x1=\\"4.22\\" y1=\\"4.22\\" x2=\\"5.64\\" y2=\\"5.64\\"></line>\\n      <line x1=\\"18.36\\" y1=\\"18.36\\" x2=\\"19.78\\" y2=\\"19.78\\"></line>\\n      <line x1=\\"1\\" y1=\\"12\\" x2=\\"3\\" y2=\\"12\\"></line>\\n      <line x1=\\"21\\" y1=\\"12\\" x2=\\"23\\" y2=\\"12\\"></line>\\n      <line x1=\\"4.22\\" y1=\\"19.78\\" x2=\\"5.64\\" y2=\\"18.36\\"></line>\\n      <line x1=\\"18.36\\" y1=\\"5.64\\" x2=\\"19.78\\" y2=\\"4.22\\"></line>\\n    </svg>\\n  {:else}\\n    <!-- Moon icon for light mode -->\\n    <svg \\n      xmlns=\\"http://www.w3.org/2000/svg\\" \\n      class=\\"h-5 w-5 text-white transition-transform duration-500 ease-out\\" \\n      class:rotate-180={isAnimating}\\n      viewBox=\\"0 0 24 24\\" \\n      fill=\\"none\\" \\n      stroke=\\"currentColor\\" \\n      stroke-width=\\"2\\" \\n      stroke-linecap=\\"round\\" \\n      stroke-linejoin=\\"round\\"\\n    >\\n      <path d=\\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\\"></path>\\n    </svg>\\n  {/if}\\n</button>\\n\\n<style>\\n  button {\\n    margin-left: 8px;\\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\\n  }\\n</style>"],"names":[],"mappings":"AAqEE,oBAAO,CACL,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CACvC"}`
};
const ThemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$1);
  $$unsubscribe_theme();
  return `<button type="button" class="${[
    "relative inline-flex items-center justify-center p-1 h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200 svelte-9ipa3d",
    ($theme === "dark" ? "bg-accent" : "") + " " + ($theme === "light" ? "bg-gray-800" : "")
  ].join(" ").trim()}"${add_attribute(
    "aria-label",
    $theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
    0
  )}>${$theme === "dark" ? ` <svg xmlns="http://www.w3.org/2000/svg" class="${[
    "h-5 w-5 text-white transition-transform duration-500 ease-out",
    ""
  ].join(" ").trim()}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>` : ` <svg xmlns="http://www.w3.org/2000/svg" class="${[
    "h-5 w-5 text-white transition-transform duration-500 ease-out",
    ""
  ].join(" ").trim()}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`} </button>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  let $page, $$unsubscribe_page;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { menuOpen: menuOpen2 = false } = $$props;
  if ($$props.menuOpen === void 0 && $$bindings.menuOpen && menuOpen2 !== void 0) $$bindings.menuOpen(menuOpen2);
  $$unsubscribe_theme();
  $$unsubscribe_page();
  return `<header class="${[
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-8 md:py-6 " + escape("", true),
    "   translate-y-0"
  ].join(" ").trim()}"><div class="container mx-auto flex justify-between items-center"><a href="/" class="text-xl md:text-2xl font-bold flex items-center"><span class="${"font-serif font-bold " + escape($theme === "dark" ? "text-white" : "text-black", true)}">El.artistry</span></a> <nav class="hidden md:flex space-x-8"><a href="/" class="${[
    "hover:text-accent transition-colors duration-300 " + escape($theme === "dark" ? "text-white" : "text-black", true),
    $page.url.pathname === "/" ? "text-accent" : ""
  ].join(" ").trim()}">Home</a> <a href="/portfolio" class="${[
    "hover:text-accent transition-colors duration-300 " + escape($theme === "dark" ? "text-white" : "text-black", true),
    $page.url.pathname === "/portfolio" ? "text-accent" : ""
  ].join(" ").trim()}">Portfolio</a> <a href="/about" class="${[
    "hover:text-accent transition-colors duration-300 " + escape($theme === "dark" ? "text-white" : "text-black", true),
    $page.url.pathname === "/about" ? "text-accent" : ""
  ].join(" ").trim()}">About</a> <a href="/contact" class="${[
    "hover:text-accent transition-colors duration-300 " + escape($theme === "dark" ? "text-white" : "text-black", true),
    $page.url.pathname === "/contact" ? "text-accent" : ""
  ].join(" ").trim()}">Contact</a></nav> <div class="flex items-center space-x-4">${validate_component(ThemeToggle, "ThemeToggle").$$render($$result, {}, {}, {})} <a href="${"https://www.instagram.com/" + escape(portfolioData.photographer.instagram, true)}" target="_blank" rel="noopener noreferrer" class="${"hover:text-accent transition-colors duration-300 hidden md:block " + escape($theme === "dark" ? "text-white" : "text-black", true)}"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a> <button class="${"hover:text-accent md:hidden flex flex-col space-y-1.5 " + escape($theme === "dark" ? "text-white" : "text-black", true)}" aria-label="Toggle menu"><span class="${[
    "block w-6 h-0.5 bg-current transition-transform duration-300",
    (menuOpen2 ? "rotate-45" : "") + " " + (menuOpen2 ? "translate-y-2" : "")
  ].join(" ").trim()}"></span> <span class="${[
    "block w-6 h-0.5 bg-current transition-opacity duration-300",
    menuOpen2 ? "opacity-0" : ""
  ].join(" ").trim()}"></span> <span class="${[
    "block w-6 h-0.5 bg-current transition-transform duration-300",
    (menuOpen2 ? "-rotate-45" : "") + " " + (menuOpen2 ? "-translate-y-2" : "")
  ].join(" ").trim()}"></span></button></div></div></header>  ${menuOpen2 ? `<div class="${"fixed inset-0 z-40 flex flex-col justify-center items-center " + escape($theme === "dark" ? "bg-primary" : "bg-white", true)}"><nav class="flex flex-col space-y-6 text-center"><a href="/" class="${[
    "hover:text-accent transition-colors duration-300 text-3xl " + escape($theme === "dark" ? "text-white" : "text-black", true),
    $page.url.pathname === "/" ? "text-accent" : ""
  ].join(" ").trim()}">Home</a> <a href="/portfolio" class="${[
    "hover:text-accent transition-colors duration-300 text-3xl " + escape($theme === "dark" ? "text-white" : "text-black", true),
    $page.url.pathname === "/portfolio" ? "text-accent" : ""
  ].join(" ").trim()}">Portfolio</a> <a href="/about" class="${[
    "hover:text-accent transition-colors duration-300 text-3xl " + escape($theme === "dark" ? "text-white" : "text-black", true),
    $page.url.pathname === "/about" ? "text-accent" : ""
  ].join(" ").trim()}">About</a> <a href="/contact" class="${[
    "hover:text-accent transition-colors duration-300 text-3xl " + escape($theme === "dark" ? "text-white" : "text-black", true),
    $page.url.pathname === "/contact" ? "text-accent" : ""
  ].join(" ").trim()}">Contact</a></nav> <div class="absolute bottom-12 flex flex-col items-center space-y-4">${validate_component(ThemeToggle, "ThemeToggle").$$render($$result, {}, {}, {})} <a href="${"https://www.instagram.com/" + escape(portfolioData.photographer.instagram, true)}" target="_blank" rel="noopener noreferrer" class="${"hover:text-accent transition-colors duration-300 text-2xl p-4 " + escape($theme === "dark" ? "text-white" : "text-black", true)}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></div></div>` : ``}`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  return `<footer id="footer" class="${[
    "py-12 mt-16",
    ($theme === "dark" ? "bg-primary" : "") + " " + ($theme === "light" ? "bg-gray-100" : "")
  ].join(" ").trim()}"><div class="container mx-auto px-6 md:px-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-10"> <div${add_attribute("class", "opacity-0", 0)}><h3 class="${[
    "text-2xl font-serif font-bold mb-4",
    ($theme === "dark" ? "text-white" : "") + " " + ($theme === "light" ? "text-black" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-umxspy">El.artistry</h3> <p class="${[
    "mb-4",
    ($theme === "dark" ? "text-gray-400" : "") + " " + ($theme === "light" ? "text-gray-600" : "")
  ].join(" ").trim()}">${escape(portfolioData.photographer.availability)}</p> <p${add_classes((($theme === "dark" ? "text-gray-400" : "") + " " + ($theme === "light" ? "text-gray-600" : "")).trim())}>${escape(portfolioData.photographer.location)}</p></div>  <div${add_attribute("class", "opacity-0", 0)}><h4 class="${[
    "text-lg font-semibold mb-4",
    ($theme === "dark" ? "text-white" : "") + " " + ($theme === "light" ? "text-black" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-1llk6mh">Navigation</h4> <nav class="flex flex-col space-y-2"><a href="/" class="${[
    "transition-colors duration-300 hover:text-accent",
    ($theme === "dark" ? "text-gray-400" : "") + " " + ($theme === "light" ? "text-gray-600" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-1rqz4bf">Home</a> <a href="/portfolio" class="${[
    "transition-colors duration-300 hover:text-accent",
    ($theme === "dark" ? "text-gray-400" : "") + " " + ($theme === "light" ? "text-gray-600" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-h6kon6">Portfolio</a> <a href="/about" class="${[
    "transition-colors duration-300 hover:text-accent",
    ($theme === "dark" ? "text-gray-400" : "") + " " + ($theme === "light" ? "text-gray-600" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-1crzi88">About</a> <a href="/contact" class="${[
    "transition-colors duration-300 hover:text-accent",
    ($theme === "dark" ? "text-gray-400" : "") + " " + ($theme === "light" ? "text-gray-600" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-1k2mvei">Contact</a></nav></div>  <div${add_attribute("class", "opacity-0", 0)}><h4 class="${[
    "text-lg font-semibold mb-4",
    ($theme === "dark" ? "text-white" : "") + " " + ($theme === "light" ? "text-black" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-cn5jy7">Contact</h4> <ul class="space-y-2"><li><a href="${"mailto:" + escape(portfolioData.photographer.email, true)}" class="${[
    "hover:text-accent transition-colors duration-300 flex items-center",
    ($theme === "dark" ? "text-gray-400" : "") + " " + ($theme === "light" ? "text-gray-600" : "")
  ].join(" ").trim()}"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> ${escape(portfolioData.photographer.email)}</a></li> <li><a href="${"tel:" + escape(portfolioData.photographer.phone.replace(/\s/g, ""), true)}" class="${[
    "hover:text-accent transition-colors duration-300 flex items-center",
    ($theme === "dark" ? "text-gray-400" : "") + " " + ($theme === "light" ? "text-gray-600" : "")
  ].join(" ").trim()}"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> ${escape(portfolioData.photographer.phone)}</a></li> <li><a href="${"https://www.instagram.com/" + escape(portfolioData.photographer.instagram, true)}" target="_blank" rel="noopener noreferrer" class="${[
    "hover:text-accent transition-colors duration-300 flex items-center",
    ($theme === "dark" ? "text-gray-400" : "") + " " + ($theme === "light" ? "text-gray-600" : "")
  ].join(" ").trim()}"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              @${escape(portfolioData.photographer.instagram)}</a></li></ul></div></div>  <div class="${[
    "my-8",
    "border-t " + ($theme === "dark" ? "border-gray-800" : "") + " " + ($theme === "light" ? "border-gray-300" : "")
  ].join(" ").trim()}"></div>  <div class="flex flex-col sm:flex-row justify-between items-center"><p class="${[
    "text-sm mb-4 sm:mb-0",
    ($theme === "dark" ? "text-gray-400" : "") + " " + ($theme === "light" ? "text-gray-600" : "")
  ].join(" ").trim()}">© ${escape((/* @__PURE__ */ new Date()).getFullYear())} ${escape(portfolioData.photographer.name)}. All rights reserved.</p> <a href="#top" class="${[
    "flex items-center text-sm hover:text-accent transition-colors duration-300",
    ($theme === "dark" ? "text-gray-400" : "") + " " + ($theme === "light" ? "text-gray-600" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-1otplxb">Back to top
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"></path></svg></a></div></div></footer>`;
});
const css = {
  code: `.camera-cursor{position:fixed;width:36px;height:28px;pointer-events:none;z-index:9999;opacity:0.75;transition:width 0.3s, height 0.3s, opacity 0.3s, transform 0.1s;margin-left:-18px;margin-top:-14px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='28' height='28' stroke='%23D4AF37' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z'%3E%3C/path%3E%3Ccircle cx='12' cy='13' r='3'%3E%3C/circle%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center;will-change:transform}.cursor-dot{position:fixed;width:6px;height:6px;background-color:#D4AF37;border-radius:50%;pointer-events:none;z-index:9999;opacity:0.9;transform:translate(-50%, -50%);margin-left:0;margin-top:0;will-change:transform;transition:transform 0.1s, width 0.3s, height 0.3s, opacity 0.3s}.camera-cursor.hover{transform:scale(1.5);opacity:1}.cursor-dot.hover{width:0;height:0;opacity:0}`,
  map: `{"version":3,"file":"CustomCursor.svelte","sources":["CustomCursor.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte';\\n  import { browser } from '$app/environment';\\n  import { theme } from '$lib/stores/theme';\\n  \\n  export let enabled = true;\\n  \\n  let cursor;\\n  let cursorDot;\\n  let position = { x: 0, y: 0 };\\n  let visible = false;\\n  let hover = false;\\n  \\n  onMount(() => {\\n    if (!browser || !enabled) return;\\n    \\n    // Create camera cursor\\n    cursor = document.createElement('div');\\n    cursor.classList.add('camera-cursor');\\n    document.body.appendChild(cursor);\\n\\n    // Create small dot cursor\\n    cursorDot = document.createElement('div');\\n    cursorDot.classList.add('cursor-dot');\\n    document.body.appendChild(cursorDot);\\n    \\n    // Don't hide default cursor anymore\\n    // document.documentElement.style.cursor = 'none';\\n    \\n    // Track mouse movement\\n    const handleMouseMove = (e) => {\\n      position.x = e.clientX;\\n      position.y = e.clientY;\\n      \\n      cursor.style.transform = \`translate(\${position.x}px, \${position.y}px)\`;\\n      cursorDot.style.transform = \`translate(\${position.x}px, \${position.y}px)\`;\\n      \\n      if (!visible) {\\n        visible = true;\\n        cursor.style.opacity = '1';\\n        cursorDot.style.opacity = '1';\\n      }\\n    };\\n    \\n    // Track mouse enter/leave\\n    const handleMouseLeave = () => {\\n      visible = false;\\n      cursor.style.opacity = '0';\\n      cursorDot.style.opacity = '0';\\n    };\\n    \\n    const handleMouseEnter = () => {\\n      visible = true;\\n      cursor.style.opacity = '1';\\n      cursorDot.style.opacity = '1';\\n    };\\n    \\n    // Track hover elements\\n    const handleElementHover = () => {\\n      hover = true;\\n      cursor.classList.add('hover');\\n      cursorDot.classList.add('hover');\\n    };\\n    \\n    const handleElementLeave = () => {\\n      hover = false;\\n      cursor.classList.remove('hover');\\n      cursorDot.classList.remove('hover');\\n    };\\n    \\n    // Add event listeners\\n    document.addEventListener('mousemove', handleMouseMove);\\n    document.addEventListener('mouseleave', handleMouseLeave);\\n    document.addEventListener('mouseenter', handleMouseEnter);\\n    \\n    // Add hover effect to interactive elements\\n    const interactiveElements = document.querySelectorAll('a, button, [role=\\"button\\"], input, select, textarea, [tabindex]:not([tabindex=\\"-1\\"])');\\n    \\n    interactiveElements.forEach(el => {\\n      el.addEventListener('mouseenter', handleElementHover);\\n      el.addEventListener('mouseleave', handleElementLeave);\\n      // Don't hide the default cursor anymore\\n      // el.style.cursor = 'none';\\n    });\\n    \\n    // Clean up\\n    return () => {\\n      if (cursor && cursor.parentNode) {\\n        document.body.removeChild(cursor);\\n      }\\n      \\n      if (cursorDot && cursorDot.parentNode) {\\n        document.body.removeChild(cursorDot);\\n      }\\n      \\n      // document.documentElement.style.cursor = '';\\n      \\n      document.removeEventListener('mousemove', handleMouseMove);\\n      document.removeEventListener('mouseleave', handleMouseLeave);\\n      document.removeEventListener('mouseenter', handleMouseEnter);\\n      \\n      interactiveElements.forEach(el => {\\n        el.removeEventListener('mouseenter', handleElementHover);\\n        el.removeEventListener('mouseleave', handleElementLeave);\\n        // el.style.cursor = '';\\n      });\\n    };\\n  });\\n<\/script>\\n\\n<style>\\n  :global(.camera-cursor) {\\n    position: fixed;\\n    width: 36px;\\n    height: 28px;\\n    pointer-events: none;\\n    z-index: 9999;\\n    opacity: 0.75;\\n    transition: width 0.3s, height 0.3s, opacity 0.3s, transform 0.1s;\\n    margin-left: -18px;\\n    margin-top: -14px;\\n    background-image: url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='28' height='28' stroke='%23D4AF37' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z'%3E%3C/path%3E%3Ccircle cx='12' cy='13' r='3'%3E%3C/circle%3E%3C/svg%3E\\");\\n    background-repeat: no-repeat;\\n    background-position: center;\\n    will-change: transform;\\n  }\\n\\n  :global(.cursor-dot) {\\n    position: fixed;\\n    width: 6px;\\n    height: 6px;\\n    background-color: #D4AF37;\\n    border-radius: 50%;\\n    pointer-events: none;\\n    z-index: 9999;\\n    opacity: 0.9;\\n    transform: translate(-50%, -50%);\\n    margin-left: 0;\\n    margin-top: 0;\\n    will-change: transform;\\n    transition: transform 0.1s, width 0.3s, height 0.3s, opacity 0.3s;\\n  }\\n\\n  :global(.camera-cursor.hover) {\\n    transform: scale(1.5);\\n    opacity: 1;\\n  }\\n\\n  :global(.cursor-dot.hover) {\\n    width: 0;\\n    height: 0;\\n    opacity: 0;\\n  }\\n</style>"],"names":[],"mappings":"AA+GU,cAAgB,CACtB,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,CAAC,MAAM,CAAC,IAAI,CAAC,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,IAAI,CACjE,WAAW,CAAE,KAAK,CAClB,UAAU,CAAE,KAAK,CACjB,gBAAgB,CAAE,+XAA+X,CACjZ,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MAAM,CAC3B,WAAW,CAAE,SACf,CAEQ,WAAa,CACnB,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,GAAG,CAClB,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,WAAW,CAAE,CAAC,CACd,UAAU,CAAE,CAAC,CACb,WAAW,CAAE,SAAS,CACtB,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC,MAAM,CAAC,IAAI,CAAC,CAAC,OAAO,CAAC,IAC/D,CAEQ,oBAAsB,CAC5B,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,CACX,CAEQ,iBAAmB,CACzB,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CACX"}`
};
const CustomCursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { enabled = true } = $$props;
  if ($$props.enabled === void 0 && $$bindings.enabled && enabled !== void 0) $$bindings.enabled(enabled);
  $$result.css.add(css);
  return ``;
});
let menuOpen = false;
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  return ` ${`<div class="${[
    "fixed inset-0 z-50 flex items-center justify-center",
    ($theme === "dark" ? "bg-primary" : "") + " " + ($theme === "light" ? "bg-white" : "")
  ].join(" ").trim()}"><div class="text-center"><div class="inline-block relative"><p class="${[
    "text-2xl md:text-3xl font-serif mb-4",
    ($theme === "dark" ? "text-white" : "") + " " + ($theme === "light" ? "text-black" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-8lyi19">El.artistry</p> <div class="${[
    "w-full h-1 rounded overflow-hidden",
    ($theme === "dark" ? "bg-gray-800" : "") + " " + ($theme === "light" ? "bg-gray-200" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-1rfsa5v"><div class="h-full bg-accent w-2/3 animate-pulse"></div></div></div></div></div>`}  ${validate_component(CustomCursor, "CustomCursor").$$render($$result, { enabled: true }, {}, {})}  <div class="flex flex-col min-h-screen"> <div class="${[
    "absolute inset-0 -z-10",
    ($theme === "dark" ? "bg-primary" : "") + " " + ($theme === "light" ? "bg-white" : "")
  ].join(" ").trim()}"></div> ${validate_component(Header, "Header").$$render($$result, { menuOpen }, {}, {})} <main class="${["flex-1 relative", ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
