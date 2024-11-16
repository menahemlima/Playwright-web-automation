import { Page, expect } from '@playwright/test'
import { checkoutLocators } from '../locators/checkoutLocators.ts';

export class CheckoutPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async validateFirstNameField(errorMessage) {
        await this.page.waitForLoadState()
        await this.page.getByText(checkoutLocators.btnCheckout).click()
        await this.page.getByText(checkoutLocators.btnContinue).click()

        const errorFirstName = await this.page.textContent('h3')
        await expect(errorFirstName).toEqual(errorMessage)
    }

    async validateLastNameField(firstName, errorMessage) {
        await this.page.waitForLoadState()
        await this.page.getByText(checkoutLocators.btnCheckout).click()
        await this.page.getByText(checkoutLocators.btnContinue).click()
        await this.page.fill(checkoutLocators.txtFirstName, firstName)
        await this.page.getByText(checkoutLocators.btnContinue).click()

        const errorLastName = await this.page.textContent('h3')
        await expect(errorLastName).toEqual(errorMessage)
    }

    async validatePostalCodeField(firstName, lastName, errorMessage) {
        await this.page.waitForLoadState()
        await this.page.getByText(checkoutLocators.btnCheckout).click()
        await this.page.fill(checkoutLocators.txtFirstName, firstName)
        await this.page.fill(checkoutLocators.txtLastName, lastName)
        await this.page.getByText(checkoutLocators.btnContinue).click()

        const errorPostal = await this.page.textContent('h3')
        await expect(errorPostal).toEqual(errorMessage)
    }

}