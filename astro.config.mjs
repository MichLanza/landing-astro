// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	
	// Configuración automática para GitHub Pages
	site: process.env.GITHUB_PAGES 
		? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
		: 'http://localhost:4321',
	base: process.env.GITHUB_PAGES 
		? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || 'app-react-test'}`
		: '/',
	
	// Configuración de build para producción
	build: {
		assets: '_astro'
	},
	
	// Configuración para desarrollo local
	server: {
		port: 4321,
		host: true
	}
});
