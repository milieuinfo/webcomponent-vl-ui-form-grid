import {VlGrid, VlColumn} from "/node_modules/vl-ui-grid/vl-grid.src.js";
import {NativeVlElement} from '/node_modules/vl-ui-core/vl-core.src.js';

/**
 * VlFormGrid
 * @class
 * @classdesc Class die een grid layout mogelijk maakt in een formulier.
 * @extends VlGrid
 */
export class VlFormGrid extends VlGrid {
  connectedCallback() {
    this.classList.add('vl-form-grid');
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

  get _pushPrefix() {
    return 'vl-form-push--';
  }

}
/**
 * VlFormLabel
 * @class
 * @classdesc Class die een label in een formulier grid layout representeert.
 */
export class VlFormLabel extends NativeVlElement(HTMLLabelElement) {

  connectedCallback() {
    this.classList.add('vl-form__label');
  }

  get _stylePath() {
    return '../style.css';
  }

}

customElements.define('vl-form-grid', VlFormGrid);
customElements.define('vl-form-column', VlFormColumn);
customElements.define('vl-form-label', VlFormLabel,  {extends: 'label'});