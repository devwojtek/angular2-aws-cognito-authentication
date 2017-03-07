import { KlouddmsPrototypePage } from './app.po';

describe('klouddms-prototype App', () => {
  let page: KlouddmsPrototypePage;

  beforeEach(() => {
    page = new KlouddmsPrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
