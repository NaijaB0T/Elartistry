import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.BpunDsap.js","_app/immutable/chunks/CkU7Y2dy.js","_app/immutable/chunks/ChW-gKZF.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/D6YF6ztN.js","_app/immutable/chunks/BtA5MIXY.js","_app/immutable/chunks/XhiDHVhU.js","_app/immutable/chunks/B6HjCayw.js"];
export const stylesheets = [];
export const fonts = [];
