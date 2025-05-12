import * as universal from '../entries/pages/contact/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/4.yuwI0Gif.js","_app/immutable/chunks/CkU7Y2dy.js","_app/immutable/chunks/ChW-gKZF.js","_app/immutable/chunks/BtA5MIXY.js","_app/immutable/chunks/XhiDHVhU.js","_app/immutable/chunks/B6HjCayw.js"];
export const stylesheets = [];
export const fonts = [];
