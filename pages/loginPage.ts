import { Page, expect } from '@playwright/test'
import { loginLocators } from '../locators/loginLocators.ts';

export class LoginPage{
    readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async login(url, user, password) {
        await this.page.goto(url)
        await this.page.waitForLoadState()
        await this.page.fill(loginLocators.txtUsername, user)
        await this.page.fill(loginLocators.txtPassword, password)
        await this.page.click(loginLocators.btnLogin)
        await this.page.waitForLoadState()
    }

    async validateLoginSucesso(titulo: string) {
        await expect(this.page.locator(loginLocators.txtTitle)).toContainText(titulo)
    }
    
    async validateLoginFalha(errorMessage) {
        const text = await this.page.textContent('h3')
        await expect(text).toEqual(errorMessage)
    }

    async resetApp() {
        await this.page.click(loginLocators.btnMenu)
        await this.page.getByText(loginLocators.btnReset).click()
    }
}