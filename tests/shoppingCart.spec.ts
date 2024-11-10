import { test, Page } from "@playwright/test"
import { LoginPage } from "../pages/loginPage"
import { ShoppingCartPage } from "../pages/shopping_cartPage"

test.describe("Funcionalidade: Tela de Carrinho de Compras", async () => {
    let page: Page
    let loginPage: LoginPage
    let shoppingCartPage: ShoppingCartPage

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        loginPage = new LoginPage(page)
        shoppingCartPage = new ShoppingCartPage(page)
    })

    test("Cenário 03: Adicionar backpack no carrinho", async () => {
        await loginPage.login(process.env.BASE_URL, process.env.USER, process.env.PASS)
        await shoppingCartPage.addProduct(1, "1", "1", "Sauce Labs Backpack", process.env.DESCRIPTION_ITEM01, "29.99")
    })

    test("Cenário 04: Remover produto do carrinho", async () => {
        await loginPage.login(process.env.BASE_URL, process.env.USER, process.env.PASS)
        await shoppingCartPage.addProduct(2, "1", "1", "Sauce Labs Bike Light", process.env.DESCRIPTION_ITEM02, "9.99")
        await shoppingCartPage.removeProductOfCart()
    })

    test.afterEach(async () => {
        await loginPage.resetApp()
    })

    test.afterAll(async () => {
        await page.close()
    })

})