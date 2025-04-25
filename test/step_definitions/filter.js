const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

  
When('the user click the filter to select Z to A', async function () {

    await this.page.locator('select.product_sort_container').selectOption('za');

})


Then('the product should be in descending order by name', async function () {
    const nameElements = await this.page.$$('[data-test="inventory-item-name"]');

    const names = [];
    for (const el of nameElements) {
        const name = await el.textContent();
        names.push(name.trim());
    }

    const sorted = [...names].sort((a,b) => b.localeCompare(a));

    expect(names).to.deep.equal(sorted);

});

