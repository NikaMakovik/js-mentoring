describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.ignoreSynchronization = true;
      browser.get('https://www.bbc.com/');

      expect(browser.getTitle()).toEqual('BBC - Homepage');
    });
  });