import { expect, test } from '@playwright/test';

for (const path of ['/getting-started/', '/id/getting-started/']) {
	for (const width of [390, 1440]) {
		for (const theme of ['light', 'dark']) {
			test(`sidebar is subdued and readable ${path} ${width} ${theme}`, async ({ page }) => {
				await page.setViewportSize({ width, height: 900 });
				await page.addInitScript(value => localStorage.setItem('starlight-theme', value), theme);
				await page.goto(path);
				if (width === 390) await page.locator('.sl-menu-button').click();
				const sidebar = page.locator('#starlight__sidebar');
				await expect(sidebar).toBeVisible();
				const gaps = await sidebar.evaluate(element =>
					Array.from(element.querySelectorAll('.top-level li > a')).flatMap(link => {
						const next = link.parentElement?.nextElementSibling?.querySelector(':scope > a');
						return next ? [next.getBoundingClientRect().top - link.getBoundingClientRect().bottom] : [];
					})
				);
				expect(gaps.length).toBeGreaterThan(0);
				for (const gap of gaps) expect(gap).toBeGreaterThanOrEqual(4);
				const colors = await sidebar.evaluate(element => {
					const active = element.querySelector('a[aria-current="page"]')!;
					const canvas = document.createElement('canvas');
					canvas.width = canvas.height = 1;
					const context = canvas.getContext('2d')!;
					const luminance = (color: string) => {
						context.fillStyle = color;
						context.fillRect(0, 0, 1, 1);
						const channels = Array.from(context.getImageData(0, 0, 1, 1).data).slice(0, 3).map(value => {
							const v = value / 255;
							return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
						});
						return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
					};
					const style = getComputedStyle(active);
					const bg = luminance(style.backgroundColor);
					const fg = luminance(style.color);
					return { background: getComputedStyle(element).backgroundColor,
						page: getComputedStyle(document.body).backgroundColor, active: bg,
						contrast: (Math.max(bg, fg) + 0.05) / (Math.min(bg, fg) + 0.05) };
				});
				expect(colors.background).toBe(colors.page);
				expect(colors.contrast).toBeGreaterThanOrEqual(4.5);
				if (theme === 'dark') expect(colors.active).toBeLessThan(0.1);
				else expect(colors.active).toBeGreaterThan(0.8);
				const link = sidebar.locator('a[href$="/installation/"]');
				const rest = await link.evaluate(element => getComputedStyle(element).backgroundColor);
				await link.hover();
				await expect.poll(() => link.evaluate(element => getComputedStyle(element).backgroundColor)).not.toBe(rest);
				await page.keyboard.press('Tab');
				await link.focus();
				await expect(link).toHaveCSS('outline-style', 'solid');
				await page.keyboard.press('Enter');
				await expect(page).toHaveURL(path.replace('getting-started', 'installation'));
			});
		}
	}
}
