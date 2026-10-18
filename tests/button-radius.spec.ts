import { expect, test } from '@playwright/test';

for (const path of ['/', '/id/', '/getting-started/', '/id/getting-started/']) {
	for (const width of [390, 1440]) {
		test(`buttons use one corner radius ${path} ${width}`, async ({ page }) => {
			await page.setViewportSize({ width, height: 900 });
			await page.goto(path);
			const controls = page.locator('.lp-btn, .arrow, .faq-q, .desktop-download, .header-dropdown summary, .dropdown-item, .landing-menu summary, site-search button, .sl-menu-button, mobile-starlight-toc summary, .starlight-image-zoom-control');
			for (const control of await controls.all()) {
				await expect(control).toHaveCSS('border-top-left-radius', '6px');
				await expect(control).toHaveCSS('border-bottom-right-radius', '6px');
			}
		});
	}
}
