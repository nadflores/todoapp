import { EskwelaappPage } from './app.po';

describe('eskwelaapp App', function() {
  let page: EskwelaappPage;

  beforeEach(() => {
    page = new EskwelaappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
