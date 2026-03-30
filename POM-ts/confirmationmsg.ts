import { expect, Locator, Page } from '@playwright/test';
export class ConfirmationMsg {
    page: Page
    completeHeader: Locator

    constructor(page: Page) {
        this.page = page;
        this.completeHeader = this.page.locator('.complete-header');

    }
    async validateConfirmationMessage() {
        await expect(this.completeHeader).toHaveText('Thank you for your order!');
    }}