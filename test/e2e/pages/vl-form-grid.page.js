const {VlFormGrid, VlFormColumn} = require('../components/vl-form-grid');
const {Page, Config} = require('vl-ui-core').Test;

class VlFormGridPage extends Page {
  async _getVlFormGrid(selector) {
    return new VlFormGrid(this.driver, selector);
  }

  async _getVlFormColumn(selector) {
    return new VlFormColumn(this.driver, selector);
  }

  async load() {
    await super.load(`${Config.baseUrl}/demo/vl-form-grid.html`);
  }

  async getFormGrid() {
    return this._getVlFormGrid('[is="vl-form-grid"]');
  }

  async getNameLabelFormColumn() {
    return this._getVlFormColumn('#surname-label-column');
  }

  async getNameInputFormColumn() {
    return this._getVlFormColumn('#surname-input-column');
  }
}

module.exports = VlFormGridPage;
