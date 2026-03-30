export class ProductPage {

constructor(page){
  
  this.page = page
  this.pagetitle= page.locator('.inventory_item_name')
  this.inventoryItemLoc =  page.locator('.inventory_item_description')
  this.cart = page.locator('.shopping_cart_link')


}
async searchproduct(productName){//productName is the parameter passed to the function to search for a specific product

    await this.pagetitle.first().waitFor()// to wait for the page to load completely before accessing the product titles
   const title= await this. pagetitle.allTextContents()
    console.log(title)

  

  const iventorycount= await this.inventoryItemLoc.count()//
  console.log("count"+iventorycount )
for(let i=0; i<iventorycount; i++)
    
    {
if(await this.inventoryItemLoc.nth(i).locator('.inventory_item_name').textContent() === productName)
{

    await this.inventoryItemLoc.nth(i).locator('text=Add to cart').click()
    break;
}}
}


async gotocart(){
    
await this.cart.click()
}
}
