import { test, expect } from '@playwright/test';
import { HomePage } from 'pages/home/HomePage';


test('should search for "kek" and assert no results', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.openPage();
    await homePage.searchFor("kek")
    expect(await homePage.noResultsMessage()).toBe(true);
});
