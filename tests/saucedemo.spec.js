import { expect, test } from '@playwright/test';

test('first test', async ({ browser })=> {

   const context = await browser.newContext(); // create new context to isolate cookies and cache
    const page = await context.newPage();       // create new page to interact with the website 
await page.goto('https://www.saucedemo.com/')
const pagetitle= await page.title()
console.log (pagetitle)


await page.locator('#user-name').fill('standard_user')
await page.locator('#password').fill('secret_sauce')
await page.locator('#login-button').click()

const ProductTitle= page.locator('.inventory_item_name')

await ProductTitle.first().waitFor()
const title= await ProductTitle.allTextContents()
console.log(title)

const inventory_item =  page.locator('.inventory_item_description')//locator for the product description
const inventory_count= await inventory_item.count()// get the count of the products in the inventory
console.log('count' +inventory_count)//print the count of the products

const productname= 'Sauce Labs Backpack'

for(let i=0;i<inventory_count;i++)// loop through the products to find the desired product
{

    if(await inventory_item.nth(i).locator('.inventory_item_name').textContent() === productname  )// check if the product name matches the desired product name
        {

        console.log('product found')
        await inventory_item.nth(i).locator('text=Add to cart').click()

    }
}

await page.locator('.shopping_cart_link').click()// 

await page.locator('.cart_item').first().waitFor()// wait for the cart item to be visible
const isProductVisible = await page.locator('.inventory_item_name:has-text("Sauce Labs Backpack")').isVisible()// check if the desired product is visible in the cart
console.log('Is product visible in cart:', isProductVisible)

await page.locator ('#checkout').click()// click on the checkout button
await page.locator('#first-name').fill('John')// fill the first name field
await page.locator('#last-name').fill('Doe')// fill the last name field
await page.locator('#postal-code').fill('12345')// fill the postal code field
await page.locator('#continue').click()// click on the continue button
await page.waitForLoadState('networkidle')// wait for the page to load completely
 await page.pause()
})