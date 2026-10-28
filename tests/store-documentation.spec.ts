import { expect, test } from '@playwright/test';

for (const locale of ['', '/id']) {
    test(`Microsoft Store installation and update guidance ${locale || 'en'}`, async ({ page }) => {
        for (const route of ['/installation/', '/getting-started/']) {
            await page.goto(`${locale}${route}`);
            await expect(page.locator('main a[href="https://apps.microsoft.com/detail/9PDJ4N28SNT7"]').first()).toBeVisible();
        }
        await page.goto(`${locale}/reference/updates/`);
        await expect(page.locator('main')).toContainText('Help → Open Microsoft Store');
        await expect(page.locator('main')).not.toContainText('Help → Check for Updates');
        await page.goto(`${locale}/reference/data-and-logs/`);
        await expect(page.locator('main')).toContainText('%LOCALAPPDATA%');
    });
}
