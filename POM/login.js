export class LoginPage {

constructor(page){
  this.page = page
  this.username = page.locator('#user-name')
  this.password = page.locator('#password')
  this.loginbutton = page.locator('#login-button')
}

async gotoPage(url){//
  await this.page.goto(url)// to navigate to the website using the page object passed in the constructor
}

async validatelogin(username,password){
  await this.username.fill(username)
  await this.password.fill(password)
  await this.loginbutton.click()
}}