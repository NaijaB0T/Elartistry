import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Bfz8Ui_A.js","_app/immutable/chunks/CkU7Y2dy.js","_app/immutable/chunks/ChW-gKZF.js","_app/immutable/chunks/BtA5MIXY.js","_app/immutable/chunks/DFgvoASr.js","_app/immutable/chunks/DKPQNNpM.js"];
export const stylesheets = ["_app/immutable/assets/0.q-TTBMKk.css"];
export const fonts = [];
