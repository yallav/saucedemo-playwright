const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async launchHomePage(applicationUrl) {
    await this.page.goto(applicationUrl);
    await expect(this.page).toHaveTitle(/Swag Labs/);
  }

  async login() {
    await expect(this.page.locator('//*[@class="login_logo"]')).toHaveText(
      'Swag Labs'
    );
    await this.page.locator('//*[@name="user-name"]').click();
    await this.page
      .locator('//*[@name="user-name"]')
      .fill(process.env.USER_NAME);
    await this.page.locator('[data-test="password"]').click();
    await this.page
      .locator('[data-test="password"]')
      .fill(process.env.PASSWORD);
    await this.page.locator('[data-test="login-button"]').click();
  }

  async loginWithEmptyUsername() {
    await expect(this.page.locator('//*[@class="login_logo"]')).toHaveText(
      'Swag Labs'
    );
    await this.page.locator('//*[@name="user-name"]').click();
    await this.page.locator('[data-test="password"]').click();
    await this.page
      .locator('[data-test="password"]')
      .fill(process.env.PASSWORD);
    await this.page.locator('[data-test="login-button"]').click();
    expect(await this.page.locator('//*[@data-test="error"]')).toHaveText(
      'Epic sadface: Username is required'
    );
  }

  async loginWithEmptyPawword() {
    await expect(this.page.locator('//*[@class="login_logo"]')).toHaveText(
      'Swag Labs'
    );
    await this.page.locator('//*[@name="user-name"]').click();
    await this.page
      .locator('//*[@name="user-name"]')
      .fill(process.env.USER_NAME);
    await this.page.locator('[data-test="password"]').click();
    await this.page.locator('[data-test="login-button"]').click();
    expect(await this.page.locator('//*[@data-test="error"]')).toHaveText(
      'Epic sadface: Password is required'
    );
  }

  async loginWithWrongUserOrPawword() {
    await expect(this.page.locator('//*[@class="login_logo"]')).toHaveText(
      'Swag Labs'
    );
    await this.page.locator('//*[@name="user-name"]').click();
    await this.page
      .locator('//*[@name="user-name"]')
      .fill(process.env.USER_NAME);
    await this.page.locator('[data-test="password"]').click();
    await this.page
      .locator('[data-test="password"]')
      .fill(process.env.WRONG_PASSWORD);
    await this.page.locator('[data-test="login-button"]').click();
    expect(await this.page.locator('//*[@data-test="error"]')).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );
  }
};
