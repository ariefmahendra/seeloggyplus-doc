import { expect, test } from '@playwright/test';
import type { Locator, Page } from '@playwright/test';

const LOCALES = ['/', '/id/'];

const revealAll = async (page: Page) => {
	await page.evaluate(() => {
		document.querySelectorAll('[data-reveal], [data-rise]').forEach((element) => {
			element.classList.add('is-in');
		});
	});
	await page.waitForTimeout(400);
};

const meanLuminance = async (locator: Locator): Promise<number> =>
	locator.evaluate(async (element) => {
		const img = element as HTMLImageElement;
		const response = await fetch(img.currentSrc);
		const bitmap = await createImageBitmap(await response.blob());
		const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
		const context = canvas.getContext('2d') as OffscreenCanvasRenderingContext2D;
		context.drawImage(bitmap, 0, 0);
		const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
		let sum = 0;
		let count = 0;
		for (let i = 0; i < data.length; i += 4 * 97) {
			sum += (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255;
			count += 1;
		}
		return sum / count;
	});

const sectionLuminance = async (locator: Locator): Promise<number> =>
	locator.evaluate((element) => {
		const color = getComputedStyle(element).backgroundColor;
		const match = color.match(/rgba?\(([^)]+)\)/);
		if (!match) return 1;
		const parts = match[1].split(',').map((value) => Number(value.trim()));
		const alpha = parts.length > 3 ? parts[3] : 1;
		if (alpha === 0) return 1;
		return (0.2126 * parts[0] + 0.7152 * parts[1] + 0.0722 * parts[2]) / 255;
	});

const textLuminance = async (locator: Locator): Promise<number> =>
	locator.evaluate((element) => {
		const color = getComputedStyle(element).color;
		const match = color.match(/rgba?\(([^)]+)\)/);
		if (!match) return 1;
		const parts = match[1].split(',').map((value) => Number(value.trim()));
		return (0.2126 * parts[0] + 0.7152 * parts[1] + 0.0722 * parts[2]) / 255;
	});

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

test.describe('proportional landing previews', () => {
	test.use({ deviceScaleFactor: 2 });

	for (const path of LOCALES) {
		for (const width of [1920, 1440, 1366, 390]) {
			test(`screenshots use the available width and stay sharp at ${width}px (${path})`, async ({ page }) => {
				const height = width === 1366 ? 768 : 900;
				await page.setViewportSize({ width, height });
				await page.goto(path);
				await revealAll(page);
				for (const selector of ['.hero-shot', '.panel img', '[data-slide] img']) {
					const images = page.locator(selector);
					const count = selector === '[data-slide] img' ? 1 : await images.count();
					for (let index = 0; index < count; index += 1) {
						const image = images.nth(index);
						await image.scrollIntoViewIfNeeded();
						await expect.poll(() => image.evaluate(element => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
						const metrics = await image.evaluate(async element => {
							const img = element as HTMLImageElement;
							const box = img.getBoundingClientRect();
							const bitmap = await createImageBitmap(await (await fetch(img.currentSrc)).blob());
							return { width: box.width, height: box.height, ratio: box.width / box.height,
								sourceWidth: bitmap.width, sourceRatio: bitmap.width / bitmap.height };
						});
						expect(metrics.width).toBeGreaterThanOrEqual(width >= 1000 ? (width === 1366 ? 950 : 1100) : 300);
						expect(metrics.height).toBeLessThanOrEqual(height * 0.83);
						expect(metrics.width).toBeLessThanOrEqual(width);
						expect(metrics.sourceWidth).toBeGreaterThanOrEqual(Math.floor(metrics.width * 2));
						expect(Math.abs(metrics.ratio - metrics.sourceRatio)).toBeLessThan(0.02);
					}
				}
				const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
				expect(overflow).toBe(false);
			});
		}
	}
});

test('desktop gallery and its controls fit together below the site header', async ({ page }) => {
	await page.setViewportSize({ width: 1366, height: 768 });
	await page.goto('/');
	await revealAll(page);
	const height = await page.locator('[data-gallery]').evaluate(gallery => {
		const heading = document.querySelector('.gallery-head')!;
		return gallery.getBoundingClientRect().bottom - heading.getBoundingClientRect().top;
	});
	expect(height).toBeLessThanOrEqual(768 - 80);
	const centers = await page.locator('[data-dot]').evaluateAll(dots => dots.map(dot => {
		const box = dot.getBoundingClientRect();
		return box.top + box.height / 2;
	}));
	expect(Math.max(...centers) - Math.min(...centers)).toBeLessThanOrEqual(1);
});

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

		expect(metrics.fileWidth).toBeGreaterThanOrEqual(Math.floor(metrics.displayedWidth * 2));
		expect(metrics.displayedWidth).toBeGreaterThanOrEqual(900);
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

	test('all slides share one size and a 16:9 ratio', async ({ page }) => {
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto('/');
		await revealAll(page);

		const boxes = await page.locator('[data-gallery] [data-slide] img').evaluateAll((images) =>
			images.map((image) => {
				const box = image.getBoundingClientRect();
				return {
					width: Math.round(box.width),
					height: Math.round(box.height),
					ratio: box.width / box.height,
				};
			})
		);

		expect(boxes).toHaveLength(8);
		const first = boxes[0];
		for (const box of boxes) {
			expect(Math.abs(box.width - first.width)).toBeLessThanOrEqual(1);
			expect(Math.abs(box.height - first.height)).toBeLessThanOrEqual(1);
			expect(Math.abs(box.ratio - 16 / 9)).toBeLessThan(0.02);
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

		const centered = () => page
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
		await expect.poll(centered).toBeLessThan(4);

		const endX = await track.evaluate((element) => element.scrollLeft);
		await page.locator('[data-gallery] [data-prev]').click();
		await expect.poll(() => current.getAttribute('data-index')).toBe('4');
		await expect.poll(() => track.evaluate((element) => element.scrollLeft)).toBeLessThan(endX);
	});
});

test('selected preview stays fully aligned when the viewport changes', async ({ page }) => {
	await page.setViewportSize({ width: 1440, height: 900 });
	await page.goto('/');
	await revealAll(page);
	await page.locator('[data-dot]').nth(3).click();
	await expect(page.locator('[data-track]')).not.toHaveAttribute('data-gliding', 'true');
	await page.setViewportSize({ width: 390, height: 844 });
	await expect.poll(() => page.locator('[data-slide]').nth(3).evaluate(slide => {
		return Math.abs(slide.getBoundingClientRect().left - slide.parentElement!.getBoundingClientRect().left);
	})).toBeLessThan(1);
	await expect(page.locator('[data-dot][aria-current="true"]')).toHaveAttribute('data-index', '3');
});

test.describe('dark chapters', () => {
	test('what-it-does sits on a dark field and shows only dark captures', async ({ page }) => {
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto('/');
		await revealAll(page);

		expect(await sectionLuminance(page.locator('.features'))).toBeLessThan(0.25);
		expect(await textLuminance(page.locator('.features-head'))).toBeGreaterThan(0.6);
		expect(await textLuminance(page.locator('.module-text h3').first())).toBeGreaterThan(0.6);

		const panels = page.locator('.panel img');
		await expect(panels).toHaveCount(5);
		for (let index = 0; index < 5; index += 1) {
			const image = panels.nth(index);
			await image.scrollIntoViewIfNeeded();
			await expect
				.poll(() => image.evaluate((element) => (element as HTMLImageElement).naturalWidth))
				.toBeGreaterThan(0);
			const current = await image.evaluate((element) => (element as HTMLImageElement).currentSrc);
			expect(current).toContain('-dark');
			expect(await meanLuminance(image)).toBeLessThan(0.35);
		}
	});

	test('gallery sits on a dark field and shows dark captures', async ({ page }) => {
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto('/');
		await revealAll(page);

		expect(await sectionLuminance(page.locator('.gallery'))).toBeLessThan(0.25);
		expect(await textLuminance(page.locator('.gallery-head h2'))).toBeGreaterThan(0.6);
		expect(await textLuminance(page.locator('.journey-heading'))).toBeGreaterThan(0.6);

		const slides = page.locator('[data-gallery] [data-slide] img');
		await expect(slides).toHaveCount(8);
		for (let index = 0; index < 8; index += 1) {
			const image = slides.nth(index);
			await image.scrollIntoViewIfNeeded();
			await expect
				.poll(() => image.evaluate((element) => (element as HTMLImageElement).naturalWidth))
				.toBeGreaterThan(0);
			const current = await image.evaluate((element) => (element as HTMLImageElement).currentSrc);
			expect(current).toContain('-dark');
			expect(await meanLuminance(image)).toBeLessThan(0.35);
		}
	});
});

test.describe('hero hover', () => {
	test.use({ reducedMotion: 'no-preference' });

	test('does not move or lift the application screenshot on hover', async ({ page }) => {
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto('/');
		await page.waitForTimeout(1800);

		const shot = page.locator('.hero-stage-shot');
		const translateY = () =>
			shot.evaluate((element) => {
				const transform = getComputedStyle(element).transform;
				if (transform === 'none') return 0;
				return Math.round(new DOMMatrixReadOnly(transform).m42);
			});

		const before = await translateY();
		await page.locator('.hero-stage').hover();
		await page.waitForTimeout(300);
		const during = await translateY();
		expect(during).toBe(before);
	});
});

test.describe('carousel motion', () => {
	test.use({ reducedMotion: 'no-preference' });

	test('glides to the next slide with the page easing instead of jumping', async ({ page }) => {
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto('/');
		await revealAll(page);

		const track = page.locator('[data-gallery] [data-track]');
		await expect(track).not.toHaveAttribute('data-gliding', 'true');

		const start = await track.evaluate((element) => element.scrollLeft);
		await page.locator('[data-gallery] [data-next]').click();

		await expect(track).toHaveAttribute('data-gliding', 'true');
		await page.waitForTimeout(120);
		const mid = await track.evaluate((element) => element.scrollLeft);

		await expect(track).not.toHaveAttribute('data-gliding', 'true', { timeout: 3000 });
		const settled = await track.evaluate((element) => element.scrollLeft);

		expect(settled).toBeGreaterThan(start + 100);
		expect(mid).toBeGreaterThan(start + 1);
		expect(mid).toBeLessThan(settled - 20);
	});
});

test.describe('carousel interruption', () => {
	test.use({ reducedMotion: 'no-preference' });

	test('rapid next clicks retain the intended destination without reversing', async ({ page }) => {
		await page.goto('/');
		await revealAll(page);
		await page.locator('[data-gallery]').scrollIntoViewIfNeeded();
		await page.locator('[data-next]').click();
		await page.waitForTimeout(200);
		await page.locator('[data-next]').click();
		await expect(page.locator('[data-counter]')).toHaveText('3 / 8');
		await expect(page.locator('[data-track]')).not.toHaveAttribute('data-gliding', 'true');
		await expect(page.locator('[data-dot][aria-current="true"]')).toHaveAttribute('data-index', '2');
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
