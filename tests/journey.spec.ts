import { expect, test } from '@playwright/test';

test.describe('line journey alignment', () => {
	test.use({ reducedMotion: 'no-preference' });

	test('the four fields, cards and clauses line up', async ({ page }) => {
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto('/');
		await page.evaluate(() => {
			document.querySelectorAll('[data-reveal], [data-rise]').forEach((element) => {
				element.classList.add('is-in');
			});
		});
		await page.waitForTimeout(1000);

		const measured = await page.evaluate(() => {
			const fields = Array.from(document.querySelectorAll('.journey .field'));
			return fields.map((field) => {
				const fieldBox = field.getBoundingClientRect();
				const cardBox = field.querySelector('.card')!.getBoundingClientRect();
				const clauseBox = field.querySelector('.clause')!.getBoundingClientRect();
				return {
					fieldTop: Math.round(fieldBox.top + window.scrollY),
					fieldHeight: Math.round(fieldBox.height),
					fieldWidth: Math.round(fieldBox.width),
					fieldCenter: Math.round(fieldBox.left + fieldBox.width / 2),
					fieldLeft: Math.round(fieldBox.left),
					fieldRight: Math.round(fieldBox.right),
					cardTop: Math.round(cardBox.top + window.scrollY),
					cardHeight: Math.round(cardBox.height),
					cardOffset: (cardBox.top - fieldBox.top) / fieldBox.height,
					textGap: clauseBox.top - cardBox.bottom,
					cardCenter: Math.round(cardBox.left + cardBox.width / 2),
					cardRight: Math.round(cardBox.right),
					clauseBottom: Math.round(clauseBox.bottom + window.scrollY),
				};
			});
		});

		expect(measured).toHaveLength(4);
		const first = measured[0];
		for (const item of measured) {
			expect(Math.abs(item.fieldTop - first.fieldTop)).toBeLessThanOrEqual(1);
			expect(Math.abs(item.fieldHeight - first.fieldHeight)).toBeLessThanOrEqual(1);
			expect(Math.abs(item.fieldWidth - first.fieldWidth)).toBeLessThanOrEqual(1);
			expect(Math.abs(item.cardTop - first.cardTop)).toBeLessThanOrEqual(1);
			expect(Math.abs(item.cardHeight - first.cardHeight)).toBeLessThanOrEqual(1);
			expect(item.cardOffset).toBeLessThanOrEqual(.36);
			expect(item.textGap).toBeGreaterThanOrEqual(24);
			expect(Math.abs(item.cardCenter - item.fieldLeft)).toBeLessThanOrEqual(1);
			expect(item.cardRight).toBeLessThanOrEqual(item.fieldRight);
			expect(Math.abs(item.clauseBottom - first.clauseBottom)).toBeLessThanOrEqual(1);
		}
	});

	test('log previews start half hidden and slide fully into view on hover', async ({ page }) => {
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.goto('/');
		await page.locator('.journey').scrollIntoViewIfNeeded();
		await page.evaluate(() => document.querySelectorAll('.journey [data-reveal]').forEach(card => card.classList.add('is-in')));
		await page.waitForTimeout(1300);
		for (const field of await page.locator('.journey .field').all()) {
			const card = field.locator('.card');
			const hidden = await card.boundingBox();
			const panel = await field.boundingBox();
			expect(hidden!.x + hidden!.width / 2).toBeCloseTo(panel!.x, 0);
			await field.hover();
			await expect.poll(() => card.evaluate(el => new DOMMatrix(getComputedStyle(el).transform).m41)).toBe(0);
			const shown = await card.boundingBox();
			expect(shown!.x).toBeGreaterThan(panel!.x);
			expect(shown!.x + shown!.width).toBeLessThan(panel!.x + panel!.width);
			const duration = await card.evaluate(el => parseFloat(getComputedStyle(el).transitionDuration));
			expect(duration).toBeGreaterThanOrEqual(.4);
			await page.mouse.move(0, 0);
			await expect.poll(async () => {
				const box = await card.boundingBox();
				return Math.abs(box!.x + box!.width / 2 - panel!.x);
			}).toBeLessThan(1);
		}
	});

	test('touch devices show the full log preview without hover', async ({ browser }) => {
		const context = await browser.newContext({ baseURL: 'http://127.0.0.1:4373', viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
		const page = await context.newPage();
		await page.goto('/');
		await page.locator('.journey').scrollIntoViewIfNeeded();
		await expect.poll(() => page.locator('.journey .card').first().evaluate(el => getComputedStyle(el).opacity)).toBe('1');
		for (const card of await page.locator('.journey .card').all()) {
			const box = await card.boundingBox();
			expect(box!.x).toBeGreaterThanOrEqual(0);
			expect(box!.x + box!.width).toBeLessThanOrEqual(390);
		}
		await context.close();
	});
});
