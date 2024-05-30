const { expect } = require('@playwright/test');
const { productPrice } = require('../utilities/helper');
const { ProductModel } = require('../models/product-model');

exports.CheckoutOverviewPage = class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
    this.lineItems = new Array();
  }

  async validateTheOverviewPage(cartItems) {
    let lineItemName = '';
    let lineItemDesc = '';
    let lineItemPrice = 0;

    await expect(this.page.locator('[data-test="title"]')).toContainText(
      'Checkout: Overview'
    );

    await expect(
      this.page.locator('//*[@data-test="inventory-item"]')
    ).not.toHaveCount(0);

    const orderLines = await this.page.locator(
      '//*[@data-test="inventory-item"]'
    );

    const numOfLineItems = await this.page
      .locator('//*[@data-test="inventory-item"]')
      .count();

    for (let index = 0; index < numOfLineItems; index++) {
      lineItemName = await orderLines
        .locator('//*[contains(@class,"inventory_item_name")]')
        .locator(`nth=${index}`)
        .innerText();

      lineItemDesc = await orderLines
        .locator('//*[contains(@class,"inventory_item_desc")]')
        .locator(`nth=${index}`)
        .innerText();

      lineItemPrice = await orderLines
        .locator('//*[contains(@class,"inventory_item_price")]')
        .locator(`nth=${index}`)
        .innerText();

      let productModel = new ProductModel(
        lineItemName.trim(),
        lineItemDesc,
        productPrice(lineItemPrice)
      );

      this.lineItems.push(productModel);
    }

    let sortedListOfItems = this.lineItems.sort();

    expect(this.lineItems.length).toEqual(cartItems.length);
    expect(this.lineItems).toEqual(cartItems);
  }

  async submitUserForm() {
    await this.page.locator('body').press('ArrowDown');
    await this.page.locator('body').press('ArrowDown');
    await this.page.locator('body').press('ArrowDown');
    await expect(this.page.locator('[data-test="cancel"]')).toBeVisible();
    await expect(this.page.locator('[data-test="finish"]')).toBeVisible();
    await this.page.locator('[data-test="finish"]').click();
  }
};
