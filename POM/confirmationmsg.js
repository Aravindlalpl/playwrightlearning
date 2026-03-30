import { expect } from '@playwright/test';
export class ConfirmationMsg {
    constructor(page) {
        this.page = page;
        this.completeHeader = this.page.locator('.complete-header');

    }
    async validateConfirmationMessage() {
        await expect(this.completeHeader).toHaveText('Thank you for your order!');
    }}