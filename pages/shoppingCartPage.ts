import { Page, expect } from '@playwright/test'
import {shoppingCartLocators} from '../locators/shoppingCartLocators'

export class ShoppingCartPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async addProduct(product, iconValue, qtd, nameItem, descItem, priceItem) {

        switch (product) {
            case 1:
                await this.page.click(shoppingCartLocators.optBackpack)
                break;
            case 2:
                await this.page.click(shoppingCartLocators.optBikeLight)
                break;
        }
        await expect(this.page.locator(shoppingCartLocators.iconCart)).toContainText(iconValue)
        await this.page.click(shoppingCartLocators.btnShoppingCart)
        await expect(this.page.locator(shoppingCartLocators.qtdCart)).toContainText(qtd)
        await expect(this.page.locator(shoppingCartLocators.nameItem)).toContainText(nameItem)
        await expect(this.page.locator(shoppingCartLocators.descItem)).toContainText(descItem)
        await expect(this.page.locator(shoppingCartLocators.priceItem)).toContainText(priceItem)
        await expect(this.page.getByText(shoppingCartLocators.btnContinue)).toBeVisible()
        await expect(this.page.getByText(shoppingCartLocators.btnRemove)).toBeVisible()
        await expect(this.page.getByText(shoppingCartLocators.btnCheckout)).toBeVisible()
    }

    async removeProductOfCart() {
        await this.page.getByText(shoppingCartLocators.btnRemove).click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.page.getByText(shoppingCartLocators.btnContinue)).toBeVisible()
        await expect(this.page.getByText(shoppingCartLocators.btnRemove)).not.toBeVisible()
        await expect(this.page.getByText(shoppingCartLocators.btnCheckout)).toBeVisible()
        await expect(this.page.locator(shoppingCartLocators.iconCart)).not.toBeVisible()
        await expect(this.page.locator(shoppingCartLocators.qtdCart)).not.toBeVisible()
        await expect(this.page.locator(shoppingCartLocators.nameItem)).not.toBeVisible()
        await expect(this.page.locator(shoppingCartLocators.descItem)).not.toBeVisible()
        await expect(this.page.locator(shoppingCartLocators.priceItem)).not.toBeVisible()
    }

    async accessShoppinCart() {
        await this.page.waitForLoadState('networkidle')
        await this.page.click(shoppingCartLocators.btnShoppingCart)
    }

}