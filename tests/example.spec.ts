import { test, expect } from '@playwright/test';

test('Check Example Domain Title', async ({ page }) => {
    // Navigate to example.com
    await page.goto('https://example.com');

    // Verify that the page title is correct
    await expect(page).toHaveTitle('Example Domain');

    // Verify that the heading exists
    await expect(page.locator('h1')).toHaveText('Example Domain');
});
