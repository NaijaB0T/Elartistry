export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CiyXIobH.js",app:"_app/immutable/entry/app.BDtdnM3M.js",imports:["_app/immutable/entry/start.CiyXIobH.js","_app/immutable/chunks/DzWxCr5R.js","_app/immutable/chunks/CkU7Y2dy.js","_app/immutable/entry/app.BDtdnM3M.js","_app/immutable/chunks/CkU7Y2dy.js","_app/immutable/chunks/ChW-gKZF.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			{
				id: "/images/[...file]",
				pattern: /^\/images(?:\/(.*))?\/?$/,
				params: [{"name":"file","optional":false,"rest":true,"chained":true}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/images/_...file_/_server.js'))
			}
		],
		prerendered_routes: new Set(["/","/about","/contact","/portfolio","/portfolio/accra-streets","/portfolio/modern-ghana","/portfolio/coastal-stories","/portfolio/portraits-of-africa","/portfolio/urban-youth"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
