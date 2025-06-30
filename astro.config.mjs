// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	// Configuración para GitHub Pages
	// Descomenta las siguientes líneas si vas a usar GitHub Pages:
	// site: 'https://tu-usuario.github.io',
	// base: '/nombre-de-tu-repo',
});
