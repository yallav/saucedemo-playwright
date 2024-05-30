const { expect } = require('@playwright/test');

exports.CartItemsPage = class CartItemsPage {
  constructor(page) {
    this.page = page;
  }

  async validateCart() {
    await expect(
      this.page.locator('[data-test="inventory-item-name"]')
    ).toContainText('Sauce Labs Bike Light');
    await expect(
      this.page.locator('[data-test="continue-shopping"]')
    ).toBeVisible();
    await expect(
      this.page.locator('[data-test="remove-sauce-labs-bike-light"]')
    ).toBeVisible();
    await expect(this.page.locator('[data-test="checkout"]')).toBeVisible();
    await expect(this.page.locator('[data-test="title"]')).toContainText(
      'Your Cart'
    );
  }

  async openCheckout() {
    await expect(
      this.page.locator('[data-test="shopping-cart-link"]')
    ).toBeVisible();
    await this.page.locator('[data-test="checkout"]').click();
    await expect(this.page.locator('[data-test="title"]')).toContainText(
      'Checkout: Your Information'
    );
    await expect(this.page.locator('[data-test="cancel"]')).toBeVisible();
  }
};
