import { test, expect } from '@playwright/test';
import { HomePage } from 'pages/home/HomePage';


test('should search for "kek" and assert no results', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.openPage();
    await page.waitForTimeout(2000);
    await homePage.searchFor("kek")
    await page.waitForTimeout(2000);
    expect(await homePage.noResultsMessage()).toBe(true);
    await page.waitForTimeout(2000);
});


