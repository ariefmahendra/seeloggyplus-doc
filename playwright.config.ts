import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	timeout: 30_000,
	use: {
		baseURL: 'http://127.0.0.1:4373',
		channel: 'msedge',
		reducedMotion: 'reduce',
	},
	webServer: {
		command: 'node scripts/serve-dist.mjs 4373',
		url: 'http://127.0.0.1:4373/',
		reuseExistingServer: true,
		timeout: 30_000,
	},
	reporter: [['list']],
});
