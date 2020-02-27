const { VlFormGrid, VlFormColumn } = require('../components/vl-form-grid');
const { Page, Config } = require('vl-ui-core').Test;

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

    async getVoorkeurFormGrid() {
        return this._getVlFormGrid('#form-grid-voorkeur');
    }

    async getVoornaamFormColumn() {
        return this._getVlFormColumn('#form-column-voornaam');
    }

    async getNaamFormColumn() {
        return this._getVlFormColumn('#form-column-naam');
    }

    async getLoveFormColumn() {
        return this._getVlFormColumn('#form-column-love');
    }

    async getOpmerkingFormColumn() {
        return this._getVlFormColumn('#form-column-opmerking');
    }

    async getSaveFormColumn() {
        return this._getVlFormColumn('#form-column-save');
    }
}

module.exports = VlFormGridPage;
