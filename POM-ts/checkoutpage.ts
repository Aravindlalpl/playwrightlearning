
import {expect, Page,Locator } from "@playwright/test";
export class CheckoutPage {

     page: Page;
     firstname: Locator
     lastname: Locator
     postalcode: Locator
     continuebutton: Locator
     finishbutton: Locator

    constructor(page: Page){
    this.page= page
    this.page.locator('#checkout')
    this.firstname= page.locator('#first-name')
    this.lastname= page.locator('#last-name')
    this.postalcode= page.locator('#postal-code')
    this.continuebutton= page.locator('#continue')
    this.finishbutton= page.locator('#finish')




    }

async checkoutdetails(firstname: string,lastname: string,postalcode: string){
    await this.page.locator('#checkout').click()
    await this.firstname.fill('Roney')
    await this.lastname.fill('Coleman')
    await this.postalcode.fill('12345')
    await this.continuebutton.click()
    await this.page.waitForLoadState('networkidle')// to wait for the page to load completely before clicking on finish button
    await this.finishbutton.click();        


}}