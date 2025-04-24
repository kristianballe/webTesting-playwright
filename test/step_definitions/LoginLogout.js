const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('the user go to BugBank app', async function () {
    // Use this.page, as it's initialized in the Before hook
    await this.page.goto('https://bugbank.netlify.app/');
    // await this.page.waitForTimeout(5000);
});

When('the user enters credentials', async function () {
    const emailField = 'input[type="email"]:visible';
    const passwordField = 'input[type="password"]:visible';
    await this.page.locator(emailField).first().type('imkristian.balle@gmail.com');
    await this.page.locator(passwordField).first().type('test1234');
    // await this.page.pause();
    // await this.page.waitForTimeout(5000);
})

When('the user click the access button', async function () {
    const submitBtn = 'button:text("Acessar")'
    await this.page.locator(submitBtn).first().click();
    // await this.page.pause();
})

When('the user enters invalid credentials', async function () {
    const emailField = 'input[type="email"]:visible';
    const passwordField = 'input[type="password"]:visible';
    await this.page.locator(emailField).first().type('imkristian.balle@gmail.com');
    await this.page.locator(passwordField).first().type('test1234');
    // await this.page.pause();
    // await this.page.waitForTimeout(5000);
})


Then('the app proceeds to dashboard', async function () {
    await this.page.waitForURL('**/home', {timeout:5000});
    const currentUrl = this.page.url();
    expect(currentUrl).contains('/home');
});

Then('the app should pop up a menu indicates invalid message', async function () {
    const invalidText = 'p[id="modalText"]';
    
    const invalidMessage = this.page.locator(invalidText);
    const isVisible = await invalidMessage.isVisible();
    expect(isVisible).to.be.true;
    
    const textContent = await invalidMessage.textContent();
    expect(textContent).to.contain('verifique suas');
});