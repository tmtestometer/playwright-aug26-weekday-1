import { test, expect } from '@playwright/test';

test("handling alert", async ({page}) => {
    await page.goto("file:///Users/vaibhavsingh/Desktop/teche-apps/playwright-aug26-weekday-1/alert.html");
    let popupPromise = page.waitForEvent("dialog");
    
    await page.getByText("Click me").click();

    let popupObject = await popupPromise;
    let msg = await popupObject.message();
    console.log(msg);
    await popupObject.accept();
    
    //await page.waitForTimeout(5000);
})


test("handling windows", async ({page}) => {
    await page.goto("file:///Users/vaibhavsingh/Desktop/teche-apps/playwright-aug26-weekday-1/alert.html");
    let popupPromise = page.waitForEvent("popup");
    
    await page.getByText("Google").click();

    let googlePage = await popupPromise;
    googlePage.locator("[name='q']").fill("Javascript");

    await page.waitForTimeout(5000);
})

