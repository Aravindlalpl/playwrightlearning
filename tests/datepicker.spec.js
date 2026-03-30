import {expect,test} from '@playwright/test'

test ('datepicker test', async ({page})=> {

    const year= 2012
const month= "Dec"
const date= 12

    await page.goto('https://selenium.qabible.in/')
    await page.locator(".nav-link[href='date-picker.php']").click()
    await page.locator('#single-input-field').click()
    await page.locator("div[class='datepicker-days'] th[class='datepicker-switch']").click()
    await page.locator("div[class='datepicker-months'] th[class='datepicker-switch']").click()
while(true)
{
    const yearrange= await page.locator("div[class='datepicker-years'] th[class='datepicker-switch']").textContent()//
    const startyear= parseInt(yearrange.split('-')[0])// get the start year from the displayed range
    const endyear= parseInt(yearrange.split('-')[1])// get the end year from the displayed range
    console.log('start year:', startyear)
    
    console.log('end year:', endyear)

    if(year>= startyear && year <= endyear) // check if the desired year is within the displayed range
    {
        break
    }
    await page.locator("div[class='datepicker-years'] th[class='prev']").click()
    

}

//await page.getByText(year.toString(),{exact: true}).click()// select the desired year

//await page.getByText(year.toString(),{ exact: true }).click( )

// select the desired year
await page.getByText(year.toString(),{ exact: true }).click()
await page.locator(".datepicker-months span.month", { hasText: month }).click()// select the desired month
await page.getByText(date.toString(), { exact: true }).click()// select the desired date

   await page.pause()
})