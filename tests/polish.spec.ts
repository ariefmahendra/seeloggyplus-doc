import { expect, test } from '@playwright/test';

test('landing download stays flat at rest and on hover', async ({ page }) => {
	await page.setViewportSize({ width: 1440, height: 900 });
	await page.goto('/');
	const download = page.locator('.desktop-download');
	await expect(download).toHaveCSS('box-shadow', 'none');
	await download.hover();
	await expect(download).toHaveCSS('box-shadow', 'none');
});

test('closed header menus have no rendered boxes', async ({ page }) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto('/');
	await page.evaluate(() => document.fonts.ready);
	for (const selector of ['starlight-theme-select summary', 'starlight-lang-select summary', '.landing-menu summary']) {
		await page.locator(selector).click();
		await page.keyboard.press('Escape');
	}
	await page.screenshot();
	const menus = page.locator('.header-dropdown:not([open]) .dropdown-menu, .landing-menu:not([open]) nav');
	for (const menu of await menus.all()) {
		expect(await menu.evaluate(element => element.getBoundingClientRect().width)).toBe(0);
	}
});

for (const locale of ['', '/id']) {
	for (const theme of ['light', 'dark']) {
		for (const width of [390, 1440]) {
			test(`tail control fits its section ${locale || 'en'} ${theme} ${width}`, async ({ page }) => {
				await page.setViewportSize({ width, height: 900 });
				await page.addInitScript(value => localStorage.setItem('starlight-theme', value), theme);
				await page.goto(`${locale}/`);
				const section = page.locator('[data-showcase]');
				await section.scrollIntoViewIfNeeded();
				await section.locator('[data-reveal]').evaluateAll(elements => elements.forEach(element => element.classList.add('is-in')));
				const clipped = await section.evaluate(element => {
					const field = element.querySelector('.show-field')!.getBoundingClientRect();
					return ['[data-switch]', '.switch-label', '[data-status]'].filter(selector => {
						const box = element.querySelector(selector)!.getBoundingClientRect();
						return box.width === 0 || box.height === 0 || box.left < field.left || box.right > field.right || box.top < field.top || box.bottom > field.bottom;
					});
				});
				expect(clipped).toEqual([]);
				const control = section.getByRole('switch');
				await control.focus();
				await page.keyboard.press('Space');
				await expect(control).toHaveAttribute('aria-checked', 'true');
				await page.keyboard.press('Enter');
				await expect(control).toHaveAttribute('aria-checked', 'false');
			});
		}
	}

	test(`feature chapters have compact spacing ${locale || 'en'}`, async ({ page }) => {
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto(`${locale}/`);
		const gap = await page.locator('.modules').evaluate(element => parseFloat(getComputedStyle(element).rowGap));
		expect(gap).toBeLessThanOrEqual(64);
	});

	test(`new readers can install before opening logs ${locale || 'en'}`, async ({ page }) => {
		await page.goto(`${locale}/getting-started/`);
		const steps = page.locator('.sl-steps');
		await expect(steps).toBeVisible();
		await expect(steps.locator('li').first().getByRole('link')).toHaveAttribute('href', /github.com\/ariefmahendra\/seeloggyplus\/releases\/latest/);
		await expect(steps.getByRole('link', { name: locale ? 'Instalasi' : 'Installation', exact: true })).toHaveAttribute('href', `${locale}/installation/`);
	});

	test(`search tutorial and screenshot zoom ${locale || 'en'}`, async ({ page }) => {
		await page.setViewportSize({ width: 390, height: 844 });
		await page.goto(`${locale}/guides/search/`);
		await expect(page.locator('.sl-steps')).toContainText('ERROR AND timeout');
		await page.locator('starlight-image-zoom-zoomable img').first().click();
		await expect(page.locator('dialog[open]')).toBeVisible();
		await page.keyboard.press('Escape');
		await expect(page.locator('dialog[open]')).toHaveCount(0);
		const zoom = page.getByRole('button', { name: /Zoom image:/ }).first();
		await zoom.focus();
		await page.keyboard.press('Enter');
		await expect(page.locator('dialog[open]')).toBeVisible();
		await page.keyboard.press('Escape');
		await expect(page.locator('dialog[open]')).toHaveCount(0);
	});
}
