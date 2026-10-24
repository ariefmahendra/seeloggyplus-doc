import { expect, test } from '@playwright/test';

for (const locale of ['', '/id']) {
    for (const width of [390, 1440]) {
        for (const theme of ['light', 'dark']) {
            test(`privacy is readable and reachable ${locale || 'en'} ${width} ${theme}`, async ({ page }) => {
                await page.setViewportSize({ width, height: 900 });
                await page.addInitScript(value => localStorage.setItem('starlight-theme', value), theme);
                const response = await page.goto(`${locale}/privacy/`);
                expect(response?.status()).toBe(200);
                await expect(page.locator('h1')).toHaveText(locale ? 'Kebijakan Privasi' : 'Privacy Policy');
                await expect(page.locator('main')).toContainText('Arief Mahendra');
                await expect(page.locator('main')).toContainText('SSH');
                await expect(page.locator('main a[href="mailto:mahend.arief@gmail.com"]')).toBeVisible();
                expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
                await page.goto(`${locale}/getting-started/`);
                if (width === 390) await page.locator('.sl-menu-button').click();
                const link = page.locator(`#starlight__sidebar a[href="${locale}/privacy/"]`);
                await expect(link).toBeVisible();
                await link.click();
                await expect(page).toHaveURL(new RegExp(`${locale}/privacy/$`));
            });
        }
    }
}
