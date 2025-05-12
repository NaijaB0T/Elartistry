import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      // Allow access to the images folder
      allow: [resolve('images')]
    }
  },
  resolve: {
    alias: {
      $images: resolve('./images')
    }
  }
});