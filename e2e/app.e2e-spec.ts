import { RiskCpPage } from './app.po';

describe('risk-cp App', () => {
  let page: RiskCpPage;

  beforeEach(() => {
    page = new RiskCpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
