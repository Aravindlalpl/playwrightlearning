import {expect, Page,Locator } from "@playwright/test";
export class LoginPage {

     page: Page;
     username: Locator;
     password: Locator;
     loginbutton: Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.locator('#user-name');
  this.password = page.locator('#password')
  this.loginbutton = page.locator('#login-button')
}

async gotoPage(url: string){//
  await this.page.goto(url)// to navigate to the website using the page object passed in the constructor
}

async validatelogin(username: string,password: string){
  await this.username.fill(username)
  await this.password.fill(password)
  await this.loginbutton.click()
}}