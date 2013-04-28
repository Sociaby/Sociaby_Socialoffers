var casper = require('casper').create();

casper.start('http://magen.to/', function() {
    // 1 - Can access magento normally
    this.test.assertTitle('Home page', 'Can access magento normally.');
    this.test.assertExists('script[id^="sociaby_ct_"]','Can find the tracking code script');
});


casper.run(function() {
    this.test.done(2);
    this.test.renderResults(true);
});


