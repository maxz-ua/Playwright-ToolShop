import { Page } from 'playwright';
import { HomeLocators } from './HomeLocators';

export class HomePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openPage() {
        await this.page.goto('/');
    }

    async clickSubscribeButton() {
        await this.page.click(HomeLocators.subscribeButton);
    }

    async getHeaderText() {
        return await this.page.innerText(HomeLocators.header);
    }

    async searchFor( text: string)  {
        await this.page.fill(HomeLocators.searchBar, text);
        await this.page.locator(HomeLocators.searchButton).waitFor({ state: 'visible' });
        await this.page.click(HomeLocators.searchButton);
    }

    async noResultsMessage(): Promise<Boolean> {
        return  await this.page.locator(HomeLocators.searchResultNotFound).isVisible(); // Update with actual locator for "no results" message
    }
}