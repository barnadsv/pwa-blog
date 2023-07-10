export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.ico","mask-icon.svg","pwa-192x192.png","pwa-512x512.png"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-b82a8ade.js","imports":["_app/immutable/start-b82a8ade.js","_app/immutable/chunks/index-b1cfdc8f.js","_app/immutable/chunks/singletons-3ad88a33.js","_app/immutable/chunks/index-ae2eb688.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
