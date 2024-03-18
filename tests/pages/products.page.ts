import {Page, expect, Locator} from '@playwright/test'

export class ProductPage {
    readonly page: Page
    readonly optBackpack: Locator
    readonly btnShoppingCart: Locator
    readonly iconCart: Locator
    readonly qtdCart: Locator
    readonly nameItem: Locator
    readonly descItem: Locator
    readonly priceItem: Locator
    readonly btnContinue: Locator
    readonly btnRemove: Locator

    constructor (page: Page) {
        this.page = page
        this.optBackpack = page.locator('#add-to-cart-sauce-labs-backpack')
        this.btnShoppingCart = page.locator('.shopping_cart_link')
        this.iconCart = page.locator('.shopping_cart_badge')
        this.qtdCart = page.locator('.cart_quantity')
        this.nameItem = page.locator('.inventory_item_name')
        this.descItem = page.locator('.inventory_item_desc')
        this.priceItem = page.locator('.inventory_item_price')
        this.btnContinue = page.locator('#continue-shopping')
        this.btnRemove = page.locator('#remove-sauce-labs-backpack')
    }

    
    async addProduct(iconValue, qtd, nameItem, descItem, priceItem){
        await this.optBackpack.click()
        await expect(this.iconCart).toContainText(iconValue) 
        await this.btnShoppingCart.click() 
        await expect(this.qtdCart).toContainText(qtd)     
        await expect(this.nameItem).toContainText(nameItem)
        await expect(this.descItem).toContainText(descItem)
        await expect(this.priceItem).toContainText(priceItem)
        await expect(this.btnContinue).toBeVisible()
        await expect(this.btnRemove).toBeVisible()
    }
}