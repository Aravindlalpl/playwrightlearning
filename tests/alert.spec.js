import {test,expect} from '@playwright/test'//

test('alert test',async ({page})=>{//   test function with page object as parameter

 await page.goto('https://selenium.qabible.in/index.php')// navigate to the website
 await page.locator('#alert-modal').click()// click on the alert modal button
await page.locator(" a[href='javascript-alert.php']").click()// click on the link to navigate to the alert page
page.on('dialog', dialog=> dialog.accept())//
await page.locator('.btn.btn-warning').click()


await page.getByText('others').hover()// hover over the others menu to reveal the dropdown


await page.pause()// pause the test to inspect the alert modal
})


test('frame test',async ({page})=>{
await page.goto('https://demoqa.com/frames')// navigate to the website

const frame= await page.frameLocator('#frame1')// locate the frame element using its name or id
const content= await frame.locator('#sampleHeading').textContent()// get the text content of the frame element
console.log('frame text:' +content)

await expect(content).toBe('This is a sample page')// assert that the text content of the frame element is as expected

await page.pause()// pause the test to inspect the frame

})

test('visual test',async ({page})=>{

    await page.goto('https://selenium.qabible.in/index.php')
    expect(await page.screenshot()).toMatchSnapshot('homepage.png')// take a screenshot of the homepage and compare it with the baseline image  

    await page.pause()// pause the test to inspect the screenshot
await page.goBack()// navigate back to the previous page
})