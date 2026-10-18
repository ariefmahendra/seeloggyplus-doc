import { expect, test } from '@playwright/test';

test.use({ reducedMotion: 'no-preference' });

for (const path of ['/', '/id/']) {
	for (const width of [390, 1440]) {
		for (const theme of ['light', 'dark']) {
			test(`streamed logs retain formatting ${path} ${width} ${theme}`, async ({ page }) => {
				await page.setViewportSize({ width, height: 900 });
				await page.addInitScript(value => localStorage.setItem('starlight-theme', value), theme);
				await page.goto(path);
				await page.locator('[data-switch]').click();
				await expect(page.locator('[data-stream] li')).toHaveCount(11);
				const styles = await page.locator('[data-stream]').evaluate(stream => {
					const sample = (row: Element) => [row, ...row.children].map(element => {
						const style = getComputedStyle(element);
						return { fontSize: style.fontSize, fontFamily: style.fontFamily, fontWeight: style.fontWeight,
							lineHeight: style.lineHeight, marginInlineEnd: style.marginInlineEnd, padding: style.padding };
					});
					const first = stream.firstElementChild!;
					const last = stream.lastElementChild!;
					return { original: sample(first), appended: sample(last),
						timestampColor: getComputedStyle(last.querySelector('.t')!).color,
						messageColor: getComputedStyle(last.querySelector('.m')!).color };
				});
				expect(styles.appended).toEqual(styles.original);
				expect(styles.timestampColor).not.toBe(styles.messageColor);
				await page.locator('[data-switch]').click();
				await expect(page.locator('[data-switch]')).toHaveAttribute('aria-checked', 'false');
			});
		}
	}
}
