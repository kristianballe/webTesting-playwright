const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('I open the Playwright homepage', async function () {
    // Use this.page, as it's initialized in the Before hook
    await this.page.goto('https://playwright.dev');
});

Then('the title should be {string}', async function (expectedTitle) {
    const title = await this.page.title();
    expect(title).to.equal(expectedTitle);
});
