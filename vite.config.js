import { defineConfig } from "vite";
import { sveltekit } from '@sveltejs/kit/vite';
// import { resolve } from 'path';

export default defineConfig({
	build: {
		treeshake: false,
		emptyOutDir: true,
		// rollupOptions: {
		// 	input: '/home/bighamster/projects/test/src/background.js',
		// 	output: {
		// 		entryFileNames: "[name].js"
		// 	}
		// }
	},
  plugins: [
		sveltekit()
	]
});

// build: {
	// emptyOutDir: true,
	// rollupOptions: {
	// 	input: 'src/background.js',
  //   output: {
  //     entryFileNames: "[name].js"
  //   }
	// }
// }
