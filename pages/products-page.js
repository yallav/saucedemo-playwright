const { expect } = require('@playwright/test');

exports.ProductsPage = class ProductsPage {
  constructor(page) {
    this.page = page;
  }

  async addItemsToCart() {
    await expect(
      this.page.locator(
        '[data-test="item-0-title-link"] [data-test="inventory-item-name"]'
      )
    ).toContainText('Sauce Labs Bike Light');
    await expect(
      this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
    ).toBeVisible();
    await this.page
      .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click();
  }

  async openCart() {
    await expect(
      this.page.locator('[data-test="shopping-cart-link"]')
    ).toBeVisible();
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }
};
