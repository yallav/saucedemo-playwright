const { expect } = require('@playwright/test');

exports.CheckoutCompletePage = class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
  }

  async validateThePage() {
    await expect(
      this.page.locator('[data-test="complete-header"]')
    ).toContainText('Thank you for your order!');
    await expect(this.page.locator('[data-test="title"]')).toContainText(
      'Checkout: Complete!'
    );
    await expect(
      this.page.locator('[data-test="complete-text"]')
    ).toContainText(
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
    );
  }

  async logout() {
    await expect(
      this.page.locator('[data-test="back-to-products"]')
    ).toBeVisible();
    await expect(
      this.page.getByRole('button', { name: 'Open Menu' })
    ).toBeVisible();
    await this.page.getByRole('button', { name: 'Open Menu' }).click();
    await expect(
      this.page.locator('[data-test="logout-sidebar-link"]')
    ).toContainText('Logout');
    await this.page.locator('[data-test="logout-sidebar-link"]').click();
  }
};
