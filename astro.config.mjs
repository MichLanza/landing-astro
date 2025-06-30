// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	// Configuración para GitHub Pages
	site: 'https://TU_USUARIO.github.io',
	base: '/TU_REPOSITORIO',
});
