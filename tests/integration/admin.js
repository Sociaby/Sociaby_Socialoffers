var casper = require('casper').create();


casper.start('http://magen.to/admin', function() {
    this.test.assertTitle('Log into Magento Admin Page', 'Can access admin login page normally.');
    this.test.assertExists('form#loginForm', 'main login form is found');
    this.fill('form#loginForm', {
        'login[username]' : 'admin',
	'login[password]' : 'admin123'
    }, true);
});

casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');
casper.viewport(1024, 768);


casper.then(function() {
    this.test.assertTitle('Dashboard / Magento Admin', 'Can login to magento admin properly');
    this.test.assertExists('ul#nav', 'Navigation bar is shown.');
});

casper.run(function() {
    //this.test.done(9); 
    this.test.renderResults(true);
});
