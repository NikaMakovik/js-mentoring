let driver = Symbol();
let driverEnforcer = Symbol();
let webdriver = require('selenium-webdriver');

class Browser {
  constructor(enforcer) {
    if (enforcer !== driverEnforcer)
       throw "Instantiation failed: use Browser.instance instead of new.";
       this.browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
    }

  static get instance() {
    if (!this[driver])
        this[driver] = new Browser(driverEnforcer);
    return this[driver];
  }
  
  static set instance(v) { throw "Can't change constant property!" }
}


let browser = Browser.instance.browser;
// console.log(browser)
 
browser.get('http://en.wikipedia.org/wiki/Wiki');
browser.findElements(webdriver.By.css('[href^="/wiki/"]')).then(function(links){
    console.log('Found', links.length, 'Wiki links.' )
    browser.quit();
});