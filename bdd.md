BDD - Behaviour driven developemnt 

    let lgObject = new LoginPage(page);
    await lgObject.login(data.username,data.password);
    await lgObject.validateErrorMsg(data.errorMsg)


user open chrome browser
user navigate to "https://www.saucedemo.com"
user enter "standard_user" in username
user enter "secret_sauce" in password
user click on login button 
user validate dashboard



Gherkin langauge
1 - extension of file  .feature

