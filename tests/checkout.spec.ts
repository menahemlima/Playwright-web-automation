import { test } from '../fixture/testFixtures';
import { faker } from '@faker-js/faker'


test.describe("Funcionalidade: Tela de Checkout", async () => {

    test("Cenário 05: Validar campo Nome obrigatório", async ({loginPage, shoppingCartPage, checkoutPage}) =>{
        await loginPage.login(process.env.BASE_URL, process.env.USER, process.env.PASS)
        await shoppingCartPage.accessShoppinCart()
        await checkoutPage.validateFirstNameField("Error: First Name is required")     
    })

    test("Cenário 06: Validar campo Sobrenome obrigatório", async ({loginPage, shoppingCartPage, checkoutPage}) =>{
        await loginPage.login(process.env.BASE_URL, process.env.USER, process.env.PASS)
        await shoppingCartPage.accessShoppinCart()
        await checkoutPage.validateLastNameField(faker.person.firstName(), "Error: Last Name is required")
    })

    test("Cenário 07: Validar campo Código postal obrigatório", async ({loginPage, shoppingCartPage, checkoutPage}) =>{
        await loginPage.login(process.env.BASE_URL, process.env.USER, process.env.PASS)
        await shoppingCartPage.accessShoppinCart()
        await checkoutPage.validatePostalCodeField(faker.person.firstName(), faker.person.lastName(), "Error: Postal Code is required")
    })

    test.afterEach(async ({loginPage}) => {
        await loginPage.resetApp()
    })
})