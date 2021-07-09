import { OrbitReportPage } from './app.po';

describe('orbit-report App', function() {
  let page: OrbitReportPage;

  beforeEach(() => {
    page = new OrbitReportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
