const { expect } = require('@playwright/test');
const {
  getRandomIndex,
  productPrice,
  returnSortedList,
} = require('../utilities/helper');

const { ProductModel } = require('../models/product-model');

exports.ProductsPage = class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productsMap = new Map();
  }

  async addItemsToCart(itemsCount) {
    await expect(
      this.page.locator('//*[@data-test="inventory-item"]')
    ).not.toHaveCount(0);

    const products = this.page.locator('//*[@data-test="inventory-item"]');
    const numOfOrders = await this.page
      .locator('//*[@data-test="inventory-item"]')
      .count();

    if (itemsCount <= 0) {
      itemsCount = 1;
    } else if (itemsCount > numOfOrders) {
      itemsCount = numOfOrders;
    }

    for (let index = 0; index < itemsCount; index++) {
      const randomIdx = getRandomIndex(0, numOfOrders);

      if (this.productsMap.has(randomIdx)) {
        continue;
      } else {
        const prodName = await products
          .locator('//*[contains(@class,"inventory_item_name ")]')
          .locator(`nth=${randomIdx}`)
          .innerText();

        const prodDesc = await products
          .locator('//*[@data-test="inventory-item-desc"]')
          .locator(`nth=${randomIdx}`)
          .innerText();

        const price = await products
          .locator('//*[@data-test="inventory-item-price"]')
          .locator(`nth=${randomIdx}`)
          .innerText();

        const selectedProduct = new ProductModel(
          prodName.trim(),
          prodDesc,
          productPrice(price)
        );

        await products
          .locator(`nth=${randomIdx}`)
          .locator('//*[contains(@name,"add-to-cart")]')
          .click();

        await expect(
          products
            .locator(`nth=${randomIdx}`)
            .locator('//*[contains(@id,"remove")]')
        ).toContainText('Remove');

        this.productsMap.set(randomIdx, selectedProduct);
      }
    }

    const addedItems = await this.page
      .locator('//*[@data-test="shopping-cart-badge"]')
      .innerText();

    expect(parseInt(addedItems)).not.toEqual(0);
    return returnSortedList(this.productsMap);
  }

  async openCart() {
    await expect(
      this.page.locator('[data-test="shopping-cart-link"]')
    ).toBeVisible();
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }
};
