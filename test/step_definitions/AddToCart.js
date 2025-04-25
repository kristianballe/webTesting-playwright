const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

  
When('the user add to cart an item', async function () {

    const badgeLocator = this.page.locator('span.shopping_cart_badge');
    const isVisible = await badgeLocator.isVisible();

    currentItem = isVisible
    ? parseInt(await badgeLocator.textContent(), 10)
    : 0;

    const addToCart = "//div[text()='Sauce Labs Fleece Jacket']/ancestor::div[@class='inventory_item']//button[text()='Add to cart']";

    await this.page.locator(addToCart).click();
    await this.page.waitForTimeout(2000);
})


Then('the app should add an item to the cart', async function () {
    const newItem = parseInt(await this.page.locator('span.shopping_cart_badge').textContent(), 10) || 0;
    expect(newItem).to.have.equal(currentItem + 1);
});