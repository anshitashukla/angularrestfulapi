import { Angularrestfullapi1Page } from './app.po';

describe('angularrestfullapi1 App', function() {
  let page: Angularrestfullapi1Page;

  beforeEach(() => {
    page = new Angularrestfullapi1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
