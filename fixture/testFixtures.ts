import { test as fixture } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { CheckoutPage } from '../pages/checkoutPage'
import { ShoppingCartPage } from '../pages/shoppingCartPage'

export const test = fixture.extend<{
  loginPage: LoginPage;
  checkoutPage: CheckoutPage;
  shoppingCartPage: ShoppingCartPage;
}>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },

  shoppingCartPage: async ({ page }, use) => {
    const shoppingCartPage = new ShoppingCartPage(page);
    await use(shoppingCartPage);
  }
});

