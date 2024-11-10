import { Page, expect, Locator } from '@playwright/test'
import {shoppingCartLocators} from '../locators/shoppingCartLocators'

export class ShoppingCartPage {
    readonly page: Page
    readonly optBackpack: Locator
    readonly optBikeLight: Locator
    readonly btnShoppingCart: Locator
    readonly iconCart: Locator
    readonly qtdCart: Locator
    readonly nameItem: Locator
    readonly descItem: Locator
    readonly priceItem: Locator
    readonly btnContinue: Locator
    readonly btnRemove: Locator
    readonly btnCheckout: Locator

    constructor(page: Page) {
        this.page = page
        this.optBackpack = page.locator(shoppingCartLocators.optBackpack)
        this.optBikeLight = page.locator(shoppingCartLocators.optBikeLight)
        this.btnShoppingCart = page.locator(shoppingCartLocators.btnShoppingCart)
        this.iconCart = page.locator(shoppingCartLocators.iconCart)
        this.qtdCart = page.locator(shoppingCartLocators.qtdCart)
        this.nameItem = page.locator(shoppingCartLocators.nameItem)
        this.descItem = page.locator(shoppingCartLocators.descItem)
        this.priceItem = page.locator(shoppingCartLocators.priceItem)
        this.btnContinue = page.getByText(shoppingCartLocators.btnContinue)
        this.btnCheckout = page.getByText(shoppingCartLocators.btnCheckout)
        this.btnRemove = page.getByText(shoppingCartLocators.btnRemove)
    }

    async addProduct(product, iconValue, qtd, nameItem, descItem, priceItem) {

        switch (product) {
            case 1:
                await this.optBackpack.click()
                break;
            case 2:
                await this.optBikeLight.click()
                break;
        }
        await expect(this.iconCart).toContainText(iconValue)
        await this.btnShoppingCart.click()
        await expect(this.qtdCart).toContainText(qtd)
        await expect(this.nameItem).toContainText(nameItem)
        await expect(this.descItem).toContainText(descItem)
        await expect(this.priceItem).toContainText(priceItem)
        await expect(this.btnContinue).toBeVisible()
        await expect(this.btnRemove).toBeVisible()
        await expect(this.btnCheckout).toBeVisible()
    }

    async removeProductOfCart() {
        await this.btnRemove.click()
        await this.page.waitForLoadState()
        await expect(this.btnContinue).toBeVisible()
        await expect(this.btnRemove).not.toBeVisible()
        await expect(this.btnCheckout).toBeVisible()
        await expect(this.iconCart).not.toBeVisible()
        await expect(this.qtdCart).not.toBeVisible()
        await expect(this.nameItem).not.toBeVisible()
        await expect(this.descItem).not.toBeVisible()
        await expect(this.priceItem).not.toBeVisible()
    }

    async accessShoppinCart() {
        await this.page.waitForLoadState()
        await this.btnShoppingCart.click()
    }

}