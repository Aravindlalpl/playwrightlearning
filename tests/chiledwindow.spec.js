import { expect,test } from "@playwright/test";


    test('child window test', async ({ browser }) => {



        const context = await browser.newContext()// create a new browser context
        const page = await browser.newPage()// create a new page in the browser context
        

        await page.goto('https://selenium.qabible.in/index.php')// navigate to the website
        await page.locator('#alert-modal').click()// click on the alert modal button
        await page.locator("a[href='window-popup.php']").click()// click on the link to navigate to the window popup page
        const link = await page.getByText('Like us On Facebook')// locate the link that opens the child window
        Promise.all(await link.click())// click on the link to open the child window
        await link.click()// click on the link to open the child window
        
         







await page.pause()// pause the test to inspect the child window

})