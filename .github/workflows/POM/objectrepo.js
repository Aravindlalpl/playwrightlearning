import { LoginPage } from './login.js';
import { ProductPage } from '../POM/productpage.js';
import { CheckoutPage } from './checkoutpage.js';
import { ConfirmationMsg } from './confirmationmsg.js';


export class pageobject{

    constructor(page){
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
