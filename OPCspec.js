describe('login page', function() {
    browser.driver.get('http://rogue1.fzerolabs.com:2000/#/login');
    it('should render login page', function() {

      // Checking the current url
      var currentUrl = browser.driver.getCurrentUrl();
      expect(currentUrl).toMatch('/login');
    });
    it('should sign in', function() {

      // Find page elements
      var userNameField = browser.driver.findElement(By.id('username'));
      var userPassField = browser.driver.findElement(By.id('password'));
      var userLoginBtn  = browser.driver.findElement(By.name('action'));

      // Fill input fields
      userNameField.sendKeys('test@example.com');
      userPassField.sendKeys('test');

      // Ensure fields contain what we've entered
      expect(userNameField.getAttribute('value')).toEqual('test@example.com');
      expect(userPassField.getAttribute('value')).toEqual('test');

      // Click to sign in - waiting for Angular as it is manually bootstrapped.
      userLoginBtn.click().then(function() {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch('/home');
      }, 10000);
    });
});