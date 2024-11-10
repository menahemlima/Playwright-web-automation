import { test } from '../fixture/testFixtures';
import { item } from '../data/data.json'

test.describe("Funcionalidade: Tela de Carrinho de Compras", async () => {

    test("Cenário 03: Adicionar backpack no carrinho", async ({loginPage, shoppingCartPage}) => {
        await loginPage.login(process.env.BASE_URL, process.env.USER, process.env.PASS)
        await shoppingCartPage.addProduct(1, "1", "1", "Sauce Labs Backpack", item.description01, '29.99')
    })

    test("Cenário 04: Remover produto do carrinho", async ({loginPage, shoppingCartPage}) => {
        await loginPage.login(process.env.BASE_URL, process.env.USER, process.env.PASS)
        await shoppingCartPage.addProduct(2, "1", "1", "Sauce Labs Bike Light", item.description02, '9.99')
        await shoppingCartPage.removeProductOfCart()
    })

    test.afterEach(async ({loginPage}) => {
        await loginPage.resetApp()
    })

})