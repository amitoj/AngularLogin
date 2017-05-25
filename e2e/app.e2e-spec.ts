import { LoginTemplatePage } from './app.po';

describe('login-template App', () => {
  let page: LoginTemplatePage;

  beforeEach(() => {
    page = new LoginTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
