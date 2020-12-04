const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlFormGridPage = require('./pages/vl-form-grid.page');

describe('vl-form-grid', async () => {
  let vlFormGridPage;

  before(() => {
    vlFormGridPage = new VlFormGridPage(getDriver());
    return vlFormGridPage.load();
  });

  it('de form grid met voorkeuren is stacked', async () => {
    const formGrid = await vlFormGridPage.getFormGrid();
    await assert.eventually.isTrue(formGrid.isStacked());
  });
});
