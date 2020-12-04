const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlFormGridPage = require('./pages/vl-form-grid.page');

describe('vl-form-column', async () => {
  let vlFormGridPage;

  before(() => {
    vlFormGridPage = new VlFormGridPage(getDriver());
    return vlFormGridPage.load();
  });

  it('de form columns in de voorkeuren grid hebben de juiste grootte', async () => {
    const labelColumn = await vlFormGridPage.getNameLabelFormColumn();
    const inputColumn = await vlFormGridPage.getNameInputFormColumn();
    await assert.eventually.equal(labelColumn.getSize(), 2);
    await assert.eventually.equal(inputColumn.getSize(), 10);
  });
});
