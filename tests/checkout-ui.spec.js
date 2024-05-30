import { test } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ProductsPage } from '../pages/products-page';
import { CartItemsPage } from '../pages/cart-items-page';
import { CheckoutPage } from '../pages/checkout-page';
import { CheckoutOverviewPage } from '../pages/checkout-overviewpage';
import { CheckoutCompletePage } from '../pages/checkout-completepage';

let homePage = null;
let productsPage = null;
let cartItemsPage = null;
let checkoutPage = null;
let checkoutOverviewPage = null;
let checkoutCompletePage = null;

let applicationUrl = '';

test.beforeEach('Before Each', ({ page }) => {
  homePage = new HomePage(page);
  productsPage = new ProductsPage(page);
  cartItemsPage = new CartItemsPage(page);
  checkoutPage = new CheckoutPage(page);
  checkoutOverviewPage = new CheckoutOverviewPage(page);
  checkoutCompletePage = new CheckoutCompletePage(page);
});

test('placing the order test', async () => {
  let cartItems = null;

  await homePage.launchHomePage(process.env.URL);
  await homePage.login();
  cartItems = await productsPage.addItemsToCart(2);
  await productsPage.openCart();
  await cartItemsPage.validateCart(cartItems);
  await cartItemsPage.openCheckout();
  await checkoutPage.submitTheForm();
  await checkoutOverviewPage.validateTheOverviewPage(cartItems);
  await checkoutOverviewPage.submitUserForm();
  await checkoutCompletePage.validateThePage();
  await checkoutCompletePage.logout();
});

test('login empty username test', async () => {
  await homePage.launchHomePage(process.env.URL);
  await homePage.loginWithEmptyUsername();
});

test('login empty password test', async () => {
  await homePage.launchHomePage(process.env.URL);
  await homePage.loginWithEmptyPawword();
});

test('login wrong credentials test', async () => {
  await homePage.launchHomePage(process.env.URL);
  await homePage.loginWithWrongUserOrPawword();
});
