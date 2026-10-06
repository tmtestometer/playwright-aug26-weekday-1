import  { Given, When, Then } from "@cucumber/cucumber";

Given("user open {string} browser", function(browser){
    
})

Given("user navigate to {string}", function(url){
    this.page.goto(url);
})

When("user enter {string} in username", async function(username){
    await this.page.locator('[data-test="username"]').click();
    await this.page.locator('[data-test="username"]').fill(username);
})

When("user enter {string} in password", async function(password){
    await this.page.locator('[data-test="password"]').click();
    await this.page.locator('[data-test="password"]').fill(password);
})

When("user click on login button", async function(){
    await this.page.locator('[data-test="login-button"]').click();
})

Then("user validate error msg {string}", function(errormsg){
    console.log("Step6 " + errormsg)
})

Then("user validate {string}", function(url){
    console.log("Step7 " + url)
})