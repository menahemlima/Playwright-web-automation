import {test, Page } from "@playwright/test"
import { LoginPage } from "../pages/loginPage"
import { ShoppingCartPage } from "../pages/shopping_cartPage"
import { CheckoutPage } from "../pages/checkoutPage"
import { faker } from '@faker-js/faker'

test.describe("Funcionalidade: Tela de Checkout", async () => {
    let page: Page
    let loginPage: LoginPage
    let shoppingCartPage: ShoppingCartPage
    let checkoutPage: CheckoutPage

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        loginPage = new LoginPage(page)
        shoppingCartPage = new ShoppingCartPage(page)
        checkoutPage = new CheckoutPage(page)
    })

    test("Cenário 05: Validar campo Nome obrigatório", async () =>{
        await loginPage.login(process.env.BASE_URL, process.env.USER, process.env.PASS)
        await shoppingCartPage.accessShoppinCart()
        await checkoutPage.validateFirstNameField("Error: First Name is required")     
    })

    test("Cenário 06: Validar campo Sobrenome obrigatório", async () =>{
        await loginPage.login(process.env.BASE_URL, process.env.USER, process.env.PASS)
        await shoppingCartPage.accessShoppinCart()
        await checkoutPage.validateLastNameField(faker.person.firstName(), "Error: Last Name is required")
    })

    test("Cenário 07: Validar campo Código postal obrigatório", async () =>{
        await loginPage.login(process.env.BASE_URL, process.env.USER, process.env.PASS)
        await shoppingCartPage.accessShoppinCart()
        await checkoutPage.validatePostalCodeField(faker.person.firstName(), faker.person.lastName(), "Error: Postal Code is required")
    })

    test.afterEach(async () => {
        await loginPage.resetApp()
    })

    test.afterAll(async () => {
        await page.close()
    })
})