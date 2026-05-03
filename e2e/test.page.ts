import {test, expect, Page, Locator} from '@playwright/test'

export class examplePage {
    readonly page: Page
    readonly exampleLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.exampleLocator = this.page.getByText('This is an example')

    }

    async goto() {
        await this.page.goto('https://playwright.dev');
    }

    async openTextFilters(filter: string, argument: string) {
        expect(this.exampleLocator).toBeVisible()
        this.page.locator(`${filter}`).fill(argument)

    }
    
}