import {VlGrid, VlColumn} from "/node_modules/vl-ui-grid/vl-grid.js";

/**
 * VlFormGrid
 * @class
 * @classdesc Class die een grid layout mogelijk maakt in een formulier.
 * @extends VlGrid
 */
export class VlFormGrid extends VlGrid {
  connectedCallback() {
    this.classList.add('vl-form-grid');
    this._applyFormLabels();
  }

  get _labels() {
    return this.querySelectorAll("label");
  }

  _applyFormLabels() {
    this._labels.forEach(label => {
      label.classList.add("vl-form__label");
    });
  }
}

/**
 * VlFormColumn
 * @class
 * @classdesc Class die een kolom in een formulier grid layout representeert.
 * @extends VlColumn
 */
export class VlFormColumn extends VlColumn {

  connectedCallback() {
    this.classList.add('vl-form-column');
    super.connectedCallback();
  }

  get _classPrefix() {
    return 'vl-form-col--';
  }

  get _classPrefix() {
    return 'vl-col--';
  }
}

customElements.define('vl-form-grid', VlFormGrid);
customElements.define('vl-form-column', VlFormColumn);