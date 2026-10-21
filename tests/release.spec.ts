import { expect, test } from '@playwright/test';

for (const locale of ['', '/id']) {
    test(`0.9.0 release and upgrade guidance are published ${locale || 'en'}`, async ({ page }) => {
        await page.goto(`${locale}/changelog/`);
        await expect(page.getByRole('heading', { name: '0.9.0', exact: true })).toBeVisible();
        await expect(page.locator('main')).toContainText('Raw');
        await page.goto(`${locale}/guides/detail-panel/`);
        await expect(page.locator('main')).toContainText('Formatted');
        await page.goto(`${locale}/reference/data-and-logs/`);
        await expect(page.locator('main')).toContainText('.keystore');
        await expect(page.locator('main')).toContainText('0.9.0');
        await page.goto(`${locale}/installation/`);
        await expect(page.locator('main a[href="https://seeloggyplus-doc.vercel.app/"]')).toBeVisible();
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://seeloggyplus-doc.vercel.app${locale}/installation/`);
    });
}
