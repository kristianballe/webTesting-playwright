const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const path = require('path');
const fs = require('fs');

  
Given('the user go to herokuapp download', async function () {
    await this.page.goto('https://the-internet.herokuapp.com/download', {timeout: 5000} );
})

When('the user click the a download file', async function () {
    await this.page.waitForTimeout(3000);
    const downloadLink = this.page.locator('a[href="download/learn.jpg"]');
    await downloadLink.click();
})


Then('the user should download a file', async function () {
    
    const downloadDirectory = path.join(__dirname, 'downloads');
    const downloadedFilePath = path.join(downloadDirectory, 'learn.jpg');

    const download = await this.page.waitForEvent('download');

    await download.saveAs(downloadedFilePath);

    const fileExists = fs.existsSync(downloadedFilePath);
    expect(fileExists).to.be.true;

    const stats = fs.statSync(downloadedFilePath);
    expect(stats.size).to.be.greaterThan(0);

});

