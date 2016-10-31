import { YesteryearDesignsPage } from './app.po';

describe('yesteryear-designs App', function() {
  let page: YesteryearDesignsPage;

  beforeEach(() => {
    page = new YesteryearDesignsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
