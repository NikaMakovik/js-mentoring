require('babel-core/register');

exports.config = {
    directConnect: true,
    framework: 'jasmine',
    specs: ['**/task15.js'],
      // allScriptsTimeout: 999999,
      // jasmineNodeOpts: {
      // defaultTimeoutInterval: 999999
  //  },
    multiCapabilities: [{
      browserName: 'chrome'
    }],
    onPrepare: () => {
      browser.ignoreSynchronization = true;
      browser.manage().window().maximize();
      // browser.manage().timeouts().implicitlyWait(5000);
   }
}  