const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.page = await this.browser.newPage();
});

After(async function () {

  await this.page.close();
  await this.browser.close();

  const downloadedFilePath = path.join(__dirname, 'downloads', 'learn.jpg');

  if (fs.existsSync(downloadedFilePath)) {
    try {
      fs.unlinkSync(downloadedFilePath); // Delete the downloaded file
      console.log('Downloaded file has been deleted successfully.');
    } catch (err) {
      console.error('Error deleting the file:', err);
    }
  } else {
    console.log('File does not exist, skipping deletion.');
  }

  // await this.page.close();
  // await this.browser.close();

  // const downloadDirectory = path.join(__dirname, 'downloads');
  // const downloadedFilePath = path.join(downloadDirectory, 'learn.jpg');

  // if (fs.existsSync(downloadedFilePath)) {
  //   fs.unlinkSync(downloadedFilePath); // Delete the downloaded file
  //   console.log('Downloaded file has been deleted successfully.');


});