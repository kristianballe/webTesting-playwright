const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

  
Given('the user go to herokuapp', async function () {
    await this.page.goto('https://the-internet.herokuapp.com/upload', {timeout: 5000} );
})

When('the user chooses a file', async function () {
    const fileInput = await this.page.locator('input#file-upload');
    await fileInput.setInputFiles('files/sampleFile.jpeg');
})

When('the user click the upload button', async function () {
    await this.page.locator('#file-submit').click();
})


Then('the user should successfully upload a file', async function () {
    const successfulMessage = await this.page.locator('//div[@class = "example"]');
    const successfulMessageContent = await successfulMessage.textContent();
    expect(successfulMessageContent).to.contain("File Uploaded!");
});

