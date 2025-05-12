export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/image_10.jpg","images/image_100.jpg","images/image_101.jpg","images/image_102.jpg","images/image_108.jpg","images/image_109.jpg","images/image_110.jpg","images/image_111.jpg","images/image_112.jpg","images/image_118.jpg","images/image_119.jpg","images/image_120.jpg","images/image_121.jpg","images/image_122.jpg","images/image_129.jpg","images/image_130.jpg","images/image_131.jpg","images/image_132.jpg","images/image_133.jpg","images/image_134.jpg","images/image_135.jpg","images/image_136.jpg","images/image_137.jpg","images/image_14.jpg","images/image_144.jpg","images/image_145.jpg","images/image_146.jpg","images/image_15.jpg","images/image_156.jpg","images/image_157.jpg","images/image_158.jpg","images/image_159.jpg","images/image_16.jpg","images/image_160.jpg","images/image_161.jpg","images/image_162.jpg","images/image_163.jpg","images/image_166.jpg","images/image_167.jpg","images/image_168.jpg","images/image_175.jpg","images/image_176.jpg","images/image_177.jpg","images/image_178.jpg","images/image_24.jpg","images/image_25.jpg","images/image_26.jpg","images/image_27.jpg","images/image_28.jpg","images/image_29.jpg","images/image_30.jpg","images/image_34.jpg","images/image_35.jpg","images/image_36.jpg","images/image_4.jpg","images/image_40.jpg","images/image_41.jpg","images/image_42.jpg","images/image_48.jpg","images/image_49.jpg","images/image_5.jpg","images/image_50.jpg","images/image_51.jpg","images/image_52.jpg","images/image_55.jpg","images/image_56.jpg","images/image_6.jpg","images/image_62.jpg","images/image_63.jpg","images/image_64.jpg","images/image_65.jpg","images/image_66.jpg","images/image_69.jpg","images/image_70.jpg","images/image_74.jpg","images/image_75.jpg","images/image_76.jpg","images/image_82.jpg","images/image_83.jpg","images/image_84.jpg","images/image_85.jpg","images/image_86.jpg","images/image_89.jpg","images/image_9.jpg","images/image_90.jpg","images/image_97.jpg","images/image_98.jpg","images/image_99.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.S_eybe9e.js",app:"_app/immutable/entry/app.Cvk376v4.js",imports:["_app/immutable/entry/start.S_eybe9e.js","_app/immutable/chunks/DKPQNNpM.js","_app/immutable/chunks/CkU7Y2dy.js","_app/immutable/entry/app.Cvk376v4.js","_app/immutable/chunks/CkU7Y2dy.js","_app/immutable/chunks/ChW-gKZF.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
