exports.config = {
  framework: 'jasmine',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }, {
    browserName: 'internet explorer'
    // ,
    // "ie.forceCreateProcessApi": true,
    // "ie.browserCommandLineSwitches": "-private",
    // "ie.ensureCleanSession": "true",
    // "seleniumAddress": 'http://10.0.1.XXX:4444/wd/hub'
    // "seleniumAddress": "http://localhost:4444/wd/hub"
  }]
}