import { NgStumblePage } from './app.po';

describe('ng-stumble App', function () {
  let page: NgStumblePage;

  beforeEach(() => {
    page = new NgStumblePage();
  });

  xit('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
