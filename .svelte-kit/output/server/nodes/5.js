import * as universal from '../entries/pages/portfolio/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/portfolio/+page.js";
export const imports = ["_app/immutable/nodes/5.D3AuN6pd.js","_app/immutable/chunks/CkU7Y2dy.js","_app/immutable/chunks/ChW-gKZF.js","_app/immutable/chunks/D6YF6ztN.js","_app/immutable/chunks/DKPQNNpM.js","_app/immutable/chunks/BtA5MIXY.js","_app/immutable/chunks/Do1VKjlh.js","_app/immutable/chunks/XhiDHVhU.js","_app/immutable/chunks/Bu4iz2nu.js"];
export const stylesheets = [];
export const fonts = [];
