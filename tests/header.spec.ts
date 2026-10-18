import { expect, test } from '@playwright/test';

for (const path of ['/', '/id/', '/getting-started/', '/id/getting-started/']) {
	for (const width of [1440, 390]) {
		for (const colorScheme of ['light', 'dark'] as const) {
			test(`header matches the page theme at ${width}px in ${colorScheme} (${path})`, async ({ page }) => {
				await page.emulateMedia({ colorScheme });
				await page.setViewportSize({ width, height: 900 });
				await page.goto(path);
				const metrics = await page.locator('header.header').evaluate(header => {
					const title = header.querySelector('.site-title')!;
					const image = title.querySelector('img')!;
					const titleStyle = getComputedStyle(title);
					const contrast = (first: string, second: string) => {
						const luminance = (color: string) => {
							const channels = color.match(/[\d.]+/g)!.slice(0, 3).map(Number).map(value => {
								const channel = value / 255;
								return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
							});
							return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
						};
						const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
						return (values[0] + 0.05) / (values[1] + 0.05);
					};
					const background = getComputedStyle(header).backgroundColor;
					return { background, pageBackground: getComputedStyle(document.body).backgroundColor,
						fontSize: parseFloat(titleStyle.fontSize), logoHeight: image.getBoundingClientRect().height,
						contrast: contrast(titleStyle.color, background), overflow: header.scrollWidth > header.clientWidth,
						height: header.getBoundingClientRect().height };
				});
				expect(metrics.background).toBe(metrics.pageBackground);
				expect(metrics.fontSize).toBeLessThanOrEqual(20);
				expect(metrics.logoHeight).toBeLessThanOrEqual(32);
				expect(metrics.contrast).toBeGreaterThanOrEqual(4.5);
				expect(metrics.overflow).toBe(false);
				expect(metrics.height).toBeLessThanOrEqual(64);
				if (path === '/' || path === '/id/') {
					await expect(page.locator('.landing-header')).toBeVisible();
					await expect(page.locator('site-search')).toHaveCount(0);
				} else {
					await expect(page.locator('.documentation-header')).toBeVisible();
					await expect(page.locator('site-search [data-open-modal]')).toBeVisible();
				}
			});
		}
	}
}

for (const width of [320, 390]) {
	test(`landing header keeps theme and language controls reachable at ${width}px`, async ({ page }) => {
		await page.setViewportSize({ width, height: 844 });
		await page.goto('/');
		for (const selector of ['starlight-theme-select summary', 'starlight-lang-select summary']) {
			const control = page.locator('header').locator(selector);
			await expect(control).toBeVisible();
			const box = await control.boundingBox();
			expect(box!.width).toBeGreaterThanOrEqual(40);
			expect(box!.x).toBeGreaterThanOrEqual(0);
			expect(box!.x + box!.width).toBeLessThanOrEqual(width);
		}
		await page.locator('header starlight-theme-select summary').click();
		await page.locator('header starlight-theme-select button[data-theme-val="light"]').click();
		await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
		await page.locator('header starlight-lang-select summary').click();
		await page.locator('header starlight-lang-select a[href*="/id"]').click();
		await expect(page).toHaveURL(/\/id\/$/);
	});
}

test('header search has visible hover and keyboard focus and still opens', async ({ page }) => {
	await page.setViewportSize({ width: 1440, height: 900 });
	await page.goto('/getting-started/');
	const search = page.locator('site-search [data-open-modal]');
	const rest = await search.evaluate(element => getComputedStyle(element).backgroundColor);
	await search.hover();
	await expect.poll(() => search.evaluate(element => getComputedStyle(element).backgroundColor)).not.toBe(rest);
	await page.keyboard.press('Tab');
	await search.focus();
	const focus = await search.evaluate(element => getComputedStyle(element).outlineWidth);
	expect(parseFloat(focus)).toBeGreaterThanOrEqual(2);
	await page.keyboard.press('Control+k');
	await expect(page.locator('site-search dialog')).toBeVisible();
	await page.keyboard.press('Escape');
	await expect(page.locator('site-search dialog')).not.toBeVisible();
});

for (const locale of ['', '/id']) {
	test(`landing has product navigation and a localized documentation link (${locale || 'en'})`, async ({ page }) => {
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto(`${locale}/`);
		const nav = page.locator('.landing-header .product-nav');
		await expect(nav).toBeVisible();
		await expect(nav.locator('a[href="#features"]')).toBeVisible();
		await expect(nav.locator('a[href="#screenshots"]')).toBeVisible();
		await nav.locator(`a[href="${locale}/getting-started/"]`).click();
		await expect(page.locator('.documentation-header site-search')).toHaveCount(1);
		await expect(page.locator('.landing-header')).toHaveCount(0);
	});

	test(`mobile product menu supports navigation and Escape (${locale || 'en'})`, async ({ page }) => {
		await page.setViewportSize({ width: 320, height: 844 });
		await page.goto(`${locale}/`);
		const menu = page.locator('.landing-menu');
		await menu.locator('summary').click();
		const links = menu.locator('nav');
		await expect(links).toBeVisible();
		const box = await links.boundingBox();
		expect(box!.x).toBeGreaterThanOrEqual(0);
		expect(box!.x + box!.width).toBeLessThanOrEqual(320);
		await expect(links.locator('a[href*="releases/latest"]')).toBeVisible();
		await page.keyboard.press('Escape');
		await expect(menu).not.toHaveAttribute('open', '');
		await menu.locator('summary').click();
		await links.locator('a[href="#features"]').click();
		await expect(menu).not.toHaveAttribute('open', '');
		await expect(page).toHaveURL(/#features$/);
		await expect(page.locator('#features')).toBeInViewport();
	});
}
