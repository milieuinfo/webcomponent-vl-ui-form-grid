const VlFormGrid = require('../components/vl-form-grid');
const { Page, Config } = require('vl-ui-core');
const { By } = require('selenium-webdriver');

class VlFormGridPage extends Page {
    async _getVlFormGrid(selector) {
        return new VlFormGrid(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-form-grid.html');
    }
}

module.exports = VlFormGridPage;
