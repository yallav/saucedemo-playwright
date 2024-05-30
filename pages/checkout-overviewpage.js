const { expect } = require('@playwright/test');

exports.CheckoutOverviewPage = class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
  }

  async validateTheOverviewPage() {
    await expect(this.page.locator('[data-test="title"]')).toContainText(
      'Checkout: Overview'
    );
    await expect(
      this.page.locator('[data-test="payment-info-label"]')
    ).toContainText('Payment Information:');
    await expect(
      this.page.locator('[data-test="shipping-info-label"]')
    ).toContainText('Shipping Information:');
    await expect(
      this.page.locator('[data-test="total-info-label"]')
    ).toContainText('Price Total');
    await expect(this.page.locator('[data-test="total-label"]')).toContainText(
      'Total: $10.79'
    );
    await this.page.getByText('CancelFinish').click();
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
