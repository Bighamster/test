// import adapter from '@sveltejs/adapter-auto';
import adapter from 'sveltekit-adapter-chrome-extension';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		appDir: "app"
	},
};

export default config;

// build: {
// 	emptyOutDir: true,
// 	rollupOptions: {
// 		input: 'src/background.js',
//     output: {
//       entryFileNames: "[name].js"
//     }
// 	}
// }
