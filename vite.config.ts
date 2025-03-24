import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: './src/lib/components/index.ts',
      formats: ['es'],
      fileName: (format) => `components/index.js`
    },
    rollupOptions: {
      external: ['svelte', '@iconify/svelte'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src/lib'
      }
    }
  }
});
