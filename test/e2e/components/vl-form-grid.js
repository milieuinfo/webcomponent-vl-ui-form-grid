const { VlGrid, VlColumn } = require('vl-ui-grid').Test;

class VlFormGrid extends VlGrid {
    get _classPrefix() {
        return 'vl-form-grid--';
    }
}

class VlFormColumn extends VlColumn {
    get _columnClassPrefix() {
        return 'vl-form-col--';
    }

    get _pushClassPrefix() {
        return 'vl-form-push--';
    }
}

module.exports = { VlFormGrid, VlFormColumn };
