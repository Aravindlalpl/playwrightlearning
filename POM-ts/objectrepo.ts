import { LoginPage } from './login.ts';
import { ProductPage } from './productpage.ts';
import { CheckoutPage } from './checkoutpage.ts';
import { ConfirmationMsg } from './confirmationmsg.ts';
import {expect, Page,Locator } from "@playwright/test";


export class pageobject{

lg: LoginPage
pdt: ProductPage
cp: CheckoutPage
cm: ConfirmationMsg
page: Page

    constructor(page: Page){
        this.page= page

        this. lg= new LoginPage(page)
        this. pdt = new ProductPage(page)
        this. cp= new CheckoutPage(page)  
        this. cm= new ConfirmationMsg(page)
    }

    getLoginPage(){
        return this.lg
    }
    getProductPage(){
        return this.pdt
    }               
    getCheckoutPage(){
        return this.cp
    }
    getConfirmationMsg(){
        return this.cm
    }
}
