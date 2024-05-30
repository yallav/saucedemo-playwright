const { expect } = require('@playwright/test');

exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async submitTheForm() {
    await expect(this.page).toHaveTitle(/Swag Labs/);
    await this.page.locator('[data-test="firstName"]').fill('Vijay');
    await this.page.locator('[data-test="lastName"]').click();
    await this.page.locator('[data-test="lastName"]').fill('Yalla');
    await this.page.locator('[data-test="postalCode"]').click();
    await this.page.locator('[data-test="postalCode"]').fill('LU11RT');
    await this.page.locator('[data-test="firstName"]').click();
    await expect(this.page.locator('[data-test="cancel"]')).toBeVisible();
    await expect(this.page.locator('[data-test="continue"]')).toBeVisible();
    await this.page.locator('[data-test="continue"]').click();
  }
};
