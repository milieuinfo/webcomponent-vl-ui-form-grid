const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlFormGridPage = require('./pages/vl-form-grid.page');

describe('vl-form-grid', async () => {
  const vlFormGridPage = new VlFormGridPage(driver);

  before(() => {
    return vlFormGridPage.load();
  });

  it('de form grid met voorkeuren is stacked', async () => {
    const formGrid = await vlFormGridPage.getVoorkeurFormGrid();
    await assert.eventually.isTrue(formGrid.isStacked());
  });
});

describe('vl-form-column', async () => {
  const vlFormGridPage = new VlFormGridPage(driver);

  before(() => {
    return vlFormGridPage.load();
  });

  it('de form columns in de voorkeuren grid hebben de juiste grootte', async () => {
    const voornaamColumn = await vlFormGridPage.getVoornaamFormColumn();
    await assert.eventually.equal(voornaamColumn.getSize(), 12);
  });
});
