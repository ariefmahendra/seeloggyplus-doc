// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
	site: 'https://seeloggyplus.vercel.app',
	integrations: [
		starlight({
			title: 'SeeLoggyPlus',
			logo: { src: './src/assets/logo.png', alt: 'SeeLoggyPlus' },
			favicon: '/favicon.png',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/ariefmahendra/seeloggyplus',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/ariefmahendra/seeloggyplus-doc/edit/main/',
			},
			lastUpdated: true,
			customCss: ['./src/styles/custom.css'],
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				id: { label: 'Indonesia', lang: 'id' },
			},
			plugins: [starlightLinksValidator({ errorOnInconsistentLocale: true }), starlightImageZoom()],
			sidebar: [
				{
					label: 'Getting Started',
					translations: { id: 'Memulai' },
					items: ['getting-started', 'installation', 'interface'],
				},
				{
					label: 'Features',
					translations: { id: 'Fitur' },
					items: [
						'guides/opening-files',
						'guides/file-manager',
						'guides/find-in-files',
						'guides/tail',
						'guides/search',
						'guides/selection',
						'guides/detail-panel',
						'guides/recent-files',
					],
				},
				{
					label: 'Reference',
					translations: { id: 'Referensi' },
					items: [
						'reference/keyboard-shortcuts',
						'reference/preferences',
						'reference/server-management',
						'reference/ssh-security',
						'reference/updates',
						'reference/data-and-logs',
						'reference/troubleshooting',
					],
				},
				{
					label: 'Project',
					translations: { id: 'Proyek' },
					items: ['changelog'],
				},
			],
		}),
	],
});
