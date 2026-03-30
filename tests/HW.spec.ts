import { expect, test } from '@playwright/test'
import { pageobject } from '../POM-ts/objectrepo.js'
const data= require('../utils/data.json')
//const datatest= JSON.parse(JSON.stringify(data))

for(const dataset of data) {

test(`first test${dataset.product}`, async ({page})=> { // create new page to interact with the website 

    const url=('https://www.saucedemo.com/') // navigate to website
    

const username= ('standard_user')
const password=('secret_sauce')

const objectrepo = new pageobject(page)

const lg= objectrepo.getLoginPage() 
const pdt = objectrepo.getProductPage()
const cp= objectrepo.getCheckoutPage()
const cm= objectrepo.getConfirmationMsg()

await lg.gotoPage(dataset.url)
await lg.validatelogin(dataset.username,dataset.password)
await pdt.searchproduct(dataset.product)
await pdt.gotocart()


 await page.locator('.cart_item').first().waitFor()
  const pro= await page.locator('.inventory_item_name:has-text("Sauce Labs Backpack")').isVisible()
    console.log(pro)




await cp.checkoutdetails(dataset.firstname,dataset.lastname,dataset.postalcode) 



const pageTitle = await page.title();
    console.log(pageTitle);

    /*await page.locator("#users-name").fill(username)
    await page.locator('#password').fill(password)
    await page.locator('#login-button').click()*/

   /*const pagetitle= await page.locator('.inventory_item_name')
   const title= await pagetitle.allTextContents()
    console.log(title)
  const inventoryItemLoc =  page.locator('.inventory_item_description') 

  const productName = 'Sauce Labs Backpack'

  

  const iventorycount= await inventoryItemLoc.count()//
  console.log("count"+iventorycount )
for(let i=0; i<iventorycount; i++)
    
    {
if(await inventoryItemLoc.nth(i).locator('.inventory_item_name').textContent() === productName)
{

    await inventoryItemLoc.nth(i).locator('text=Add to cart').click()
    break;
}}
const cart = await page.locator('.shopping_cart_link')
await cart.click()*/
 
//await expect(pro).toBeTruthy()// to check if the product is added to cart

/*await page.locator('#checkout').click()
await page.locator('#first-name').fill('Roney')
await page.locator('#last-name').fill('coleman')
await page.locator('#postal-code').fill('12345')
await page.locator('#continue').click()
await page.waitForLoadState('networkidle')// to wait for the page to load completely before clicking on finish button
await page.locator('#finish').click();*/



/*const confirmationmsg = page.locator('.complete-header');

await expect(confirmationmsg).toHaveText('Thank you for your order!');*/

await cm.validateConfirmationMessage();
    await page.pause()

}) 
}