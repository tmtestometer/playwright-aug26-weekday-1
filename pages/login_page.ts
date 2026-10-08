// Page object 
import {expect, Page } from '@playwright/test';

export class LoginPage{
    page:Page;
    constructor(page:Page){
        this.page = page;
    }

    async login(username:string, password:string){
        await this.page.locator('[data-test="username"]').click();
        await this.page.locator('[data-test="username"]').fill(username);
        await this.page.locator('[data-test="password"]').click();
        await this.page.locator('[data-test="password"]').fill(password);
        await this.page.locator('[data-test="login-button"]').click();
    }

    async validateErrorMsg(expectedErrorMsg:string){
        let errorMsg = await this.page.locator('[data-test="error"]').textContent();
        expect(errorMsg).toBe(expectedErrorMsg);
    }
    
}

// CI-CD Implement 

