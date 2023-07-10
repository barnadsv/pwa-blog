import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.ico","mask-icon.svg","pwa-192x192.png","pwa-512x512.png"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-b82a8ade.js","imports":["_app/immutable/start-b82a8ade.js","_app/immutable/chunks/index-b1cfdc8f.js","_app/immutable/chunks/singletons-3ad88a33.js","_app/immutable/chunks/index-ae2eb688.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
