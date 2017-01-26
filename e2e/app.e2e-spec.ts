import { PpppPage } from './app.po';

describe('pppp App', function() {
  let page: PpppPage;

  beforeEach(() => {
    page = new PpppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
