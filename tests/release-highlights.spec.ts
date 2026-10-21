import { expect, test } from '@playwright/test';

for (const locale of ['', '/id']) {
    for (const width of [390, 1440]) {
        for (const colorScheme of ['light', 'dark'] as const) {
            test(`release highlights ${locale || 'en'} ${width} ${colorScheme}`, async ({ page }) => {
                await page.setViewportSize({ width, height: 900 });
                await page.emulateMedia({ colorScheme });
                const response = await page.goto(`${locale}/release-highlights/`);
                expect(response?.status()).toBe(200);
                await expect(page.locator('main')).not.toContainText(locale ? 'Belum dirilis' : 'Unreleased');
                await expect(page.locator('main')).toContainText('0.9.0');
                await expect(page.locator('main')).toContainText('Raw');
                await expect(page.locator('main')).toContainText('Formatted');
                await expect(page.locator('main a[href="https://github.com/ariefmahendra/seeloggyplus/releases/tag/0.9.0"]')).toBeVisible();
                const image = page.locator('main img').first();
                await expect(image).toBeVisible();
                await image.evaluate((element: HTMLImageElement) => element.decode());
                expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
                await page.screenshot({ path: `test-results/preview-${locale ? 'id' : 'en'}-${width}-${colorScheme}.png`, fullPage: true });
                await page.goto(`${locale}/changelog/`);
                await expect(page.locator('main').getByRole('link', { name: locale ? 'Sorotan 0.9.0' : '0.9.0 highlights', exact: true })).toBeVisible();
            });
        }
    }
}
