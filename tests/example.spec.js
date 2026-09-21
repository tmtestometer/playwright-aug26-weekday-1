import { test, expect } from '@playwright/test';
import  testdata  from '../data.json' with {"type":"json"}
import { LoginPage } from '../pages/login_page.js'

test.beforeEach(async({page})=>{
  await page.goto('https://www.saucedemo.com/');
})



for( let data of testdata){
  test(data.testname, async ({ page }) => {
    let lgObject = new LoginPage(page);
    await lgObject.login(data.username,data.password);
    await lgObject.validateErrorMsg(data.errorMsg)
  });
}








// test("verify user able to check errormsg for empty username", async ({ page }) => {
//   await login(page, '','ancd');
//   await validateErrorMsg(page, "Epic sadface: Username is required")
// });

// test("verify user able to check errormsg for empty password", async ({ page }) => {
//   await login(page, 'user1','');
//   await validateErrorMsg(page, "Epic sadface: Password is required")
// });

// test("verify user able to check errormsg for wrong credentials", async ({ page }) => {
//   await login(page, 'asdfasdf','adsfdsaf');
//   await validateErrorMsg(page, "Epic sadface: Username and password do not match any user in this service")
// });

