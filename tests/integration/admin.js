var casper = require('casper').create();
var adminKey;

casper
    .start('http://magen.to/admin', function() {
        this.test.assertTitle('Log into Magento Admin Page', 'Can access admin login page normally.');
        this.test.assertExists('form#loginForm', 'main login form is found');
        this.fill('form#loginForm', {
            'login[username]' : 'admin',
    	'login[password]' : 'admin123'
        }, true);
    })

    .userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)')
    .viewport(1024, 768)

    .then(function() {
        this.test.assertTitle('Dashboard / Magento Admin', 'Can login to magento admin properly');
        this.test.assertExists('ul#nav', 'Navigation bar is shown.');
        adminKey = this.getCurrentUrl().match(/([a-z0-9]+)\/$/i)[0];
        this.echo("Current URL Key is : " + adminKey);
    })
    .run(function() {
        //this.test.done(9); 
        this.test.renderResults(true);
    });
