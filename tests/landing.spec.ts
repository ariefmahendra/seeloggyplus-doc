import { expect, test } from '@playwright/test';

const LOCALES = ['/', '/id/'];

const revealAll = async (page: import('@playwright/test').Page) => {
	await page.evaluate(() => {
		document.querySelectorAll('[data-reveal], [data-rise]').forEach((element) => {
			element.classList.add('is-in');
		});
	});
	await page.waitForTimeout(400);
};

for (const path of LOCALES) {
	for (const width of [1440, 390]) {
		test(`no visible text overflow at ${width}px (${path})`, async ({ page }) => {
			await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
			await page.goto(path);
			await revealAll(page);

			const offenders = await page.evaluate(() => {
				const found: string[] = [];
				document.querySelectorAll('.lp *').forEach((element) => {
					if (!(element instanceof HTMLElement)) return;
					const style = getComputedStyle(element);
					const clips = style.overflowX === 'hidden' || style.overflowX === 'clip' || style.overflowX === 'auto' || style.overflowX === 'scroll';
					if (clips) return;
					if (element.scrollWidth > element.clientWidth + 1) {
						found.push(`${element.tagName}.${String(element.className).slice(0, 80)}`);
					}
				});
				return found;
			});

			expect(offenders).toEqual([]);
		});
	}
}

test.describe('hero screenshot', () => {
	test.use({ deviceScaleFactor: 2 });

	test('hero shows the real application screenshot, large, HD and uncropped', async ({ page }) => {
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto('/');
		await revealAll(page);

		const shot = page.locator('.hero-shot:visible').first();
		await expect(shot).toBeVisible();
		await expect(shot).toHaveClass(/hero-shot-dark/);

		const metrics = await shot.evaluate(async (element) => {
			const img = element as HTMLImageElement;
			const box = img.getBoundingClientRect();
			const response = await fetch(img.currentSrc);
			const bitmap = await createImageBitmap(await response.blob());
			return {
				fileWidth: bitmap.width,
				fileHeight: bitmap.height,
				displayedWidth: box.width,
				displayedRatio: box.width / box.height,
			};
		});

		expect(metrics.fileWidth).toBeGreaterThanOrEqual(2240);
		expect(metrics.displayedWidth).toBeGreaterThanOrEqual(1000);
		expect(Math.abs(metrics.fileWidth / metrics.fileHeight - metrics.displayedRatio)).toBeLessThan(0.05);
	});
});

test.describe('feature screenshots', () => {
	test.use({ deviceScaleFactor: 2 });

	test('are large, HD and uncropped', async ({ page }) => {
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto('/');
		await revealAll(page);

		const panels = page.locator('.panel img');
		await expect(panels).toHaveCount(5);

		for (let index = 0; index < 5; index += 1) {
			const image = panels.nth(index);
			await image.scrollIntoViewIfNeeded();
			await expect
				.poll(() => image.evaluate((element) => (element as HTMLImageElement).naturalWidth), {
					timeout: 10_000,
				})
				.toBeGreaterThan(0);

			const metrics = await image.evaluate(async (element) => {
				const img = element as HTMLImageElement;
				const box = img.getBoundingClientRect();
				const response = await fetch(img.currentSrc);
				const bitmap = await createImageBitmap(await response.blob());
				return {
					fileWidth: bitmap.width,
					fileHeight: bitmap.height,
					displayedWidth: box.width,
					displayedRatio: box.width / box.height,
				};
			});

			expect(metrics.displayedWidth).toBeGreaterThanOrEqual(560);
			expect(metrics.fileWidth).toBeGreaterThanOrEqual(1216);
			expect(Math.abs(metrics.fileWidth / metrics.fileHeight - metrics.displayedRatio)).toBeLessThan(0.05);
		}
	});
});

test.describe('screenshot gallery', () => {
	test.use({ deviceScaleFactor: 2 });

	test('renders every app screen, HD and uncropped', async ({ page }) => {
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto('/');
		await revealAll(page);

		const slides = page.locator('[data-gallery] [data-slide]');
		await expect(slides).toHaveCount(8);

		for (const index of [0, 7]) {
			const image = slides.nth(index).locator('img');
			await image.scrollIntoViewIfNeeded();
			await expect
				.poll(() => image.evaluate((element) => (element as HTMLImageElement).naturalWidth), {
					timeout: 10_000,
				})
				.toBeGreaterThan(0);

			const metrics = await image.evaluate(async (element) => {
				const img = element as HTMLImageElement;
				const box = img.getBoundingClientRect();
				const response = await fetch(img.currentSrc);
				const bitmap = await createImageBitmap(await response.blob());
				return {
					fileWidth: bitmap.width,
					fileHeight: bitmap.height,
					displayedRatio: box.width / box.height,
				};
			});

			expect(metrics.fileWidth).toBeGreaterThanOrEqual(1216);
			expect(Math.abs(metrics.fileWidth / metrics.fileHeight - metrics.displayedRatio)).toBeLessThan(0.05);
		}
	});

	test('arrows and dots navigate the gallery', async ({ page }) => {
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto('/');
		await revealAll(page);

		const track = page.locator('[data-gallery] [data-track]');
		const dots = page.locator('[data-gallery] [data-dot]');
		const current = page.locator('[data-gallery] [data-dot][aria-current="true"]');
		await expect(dots).toHaveCount(8);
		await expect(current).toHaveCount(1);

		const startX = await track.evaluate((element) => element.scrollLeft);
		await page.locator('[data-gallery] [data-next]').click();
		await expect.poll(() => track.evaluate((element) => element.scrollLeft)).toBeGreaterThan(startX);
		await expect.poll(() => current.getAttribute('data-index')).toBe('1');
		await expect(page.locator('[data-gallery] [data-counter]')).toHaveText('2 / 8');

		await dots.nth(5).click();
		await expect.poll(() => current.getAttribute('data-index')).toBe('5');
		await expect(page.locator('[data-gallery] [data-counter]')).toHaveText('6 / 8');

		const centered = await page
			.locator('[data-gallery] [data-slide]')
			.nth(5)
			.evaluate((slide) => {
				const track = slide.closest('[data-track]') as HTMLElement;
				const slideRect = slide.getBoundingClientRect();
				const trackRect = track.getBoundingClientRect();
				return Math.abs(
					slideRect.left + slideRect.width / 2 - (trackRect.left + trackRect.width / 2)
				);
			});
		expect(centered).toBeLessThan(4);

		const endX = await track.evaluate((element) => element.scrollLeft);
		await page.locator('[data-gallery] [data-prev]').click();
		await expect.poll(() => current.getAttribute('data-index')).toBe('4');
		await expect.poll(() => track.evaluate((element) => element.scrollLeft)).toBeLessThan(endX);
	});
});

test.describe('live tail', () => {
	test.use({ reducedMotion: 'no-preference' });

	test('tail switch streams new log lines', async ({ page }) => {
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto('/');
		await revealAll(page);

		const switchButton = page.locator('[data-switch]');
		await expect(switchButton).toHaveAttribute('aria-checked', 'false');
		await switchButton.click();
		await expect(switchButton).toHaveAttribute('aria-checked', 'true');
		await expect(page.locator('.show-heading')).toContainText('motion');

		const before = await page.locator('[data-stream] li').count();
		await page.waitForTimeout(2400);
		const after = await page.locator('[data-stream] li').count();
		expect(after).toBeGreaterThan(before + 1);
		expect(after).toBeLessThanOrEqual(11);
	});
});

test('faq answers follow the selected question', async ({ page }) => {
	await page.setViewportSize({ width: 1440, height: 900 });
	await page.goto('/');
	await revealAll(page);

	await expect(page.locator('.faq-a[data-index="0"]')).toBeVisible();
	await page.locator('[data-q]').nth(2).click();
	await expect(page.locator('.faq-a[data-index="2"]')).toBeVisible();
	await expect(page.locator('.faq-a[data-index="0"]')).toBeHidden();
});

test('no console errors on the landing page', async ({ page }) => {
	const errors: string[] = [];
	page.on('console', (message) => {
		if (message.type() === 'error') errors.push(message.text());
	});
	page.on('pageerror', (error) => errors.push(String(error)));

	await page.setViewportSize({ width: 1440, height: 900 });
	await page.goto('/');
	await revealAll(page);
	await page.waitForTimeout(500);

	expect(errors).toEqual([]);
});
