// Page object 
import {expect } from '@playwright/test';

export class LoginPage{

    constructor(page){
        this.page = page;
    }

    async login(username, password){
        await this.page.locator('[data-test="username"]').click();
        await this.page.locator('[data-test="username"]').fill(username);
        await this.page.locator('[data-test="password"]').click();
        await this.page.locator('[data-test="password"]').fill(password);
        await this.page.locator('[data-test="login-button"]').click();
    }

    async validateErrorMsg(expectedErrorMsg){
        let errorMsg = await this.page.locator('[data-test="error"]').textContent();
        expect(errorMsg).toBe(expectedErrorMsg);
    }
    
}

// CI-CD Implement 

