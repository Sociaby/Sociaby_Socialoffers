var casper = require('casper').create();

casper.start('http://magen.to/', function() {
    // 1 - Can access magento normally
    this.test.assertTitle('Home page', 'Can access magento normally.');
});

casper.thenOpen("http://magen.to/sony-vaio-vgn-txn27n-b-11-1-notebook-pc.html", function() {
    // 2 - Product info
    this.test.assertExists('div.product-essential', 'Product info is displayed.');
    // 3 - Product name
    this.test.assertExists('div.product-essential div.product-name h1', 'Product name is shown.');
    // 4 - Correct product name
    this.echo("Do we see the correct product name?");
    this.test.assertSelectorHasText('div.product-essential div.product-name h1', 'Sony VAIO VGN-TXN27N/B 11.1" Notebook PC');
});

casper.then(function() {
    this.click('form#product_addtocart_form  button.button.btn-cart');
});
casper.then(function() {
    // 5 - Can attempt checkout on the product
    this.test.assert(this.getCurrentUrl() === "http://magen.to/checkout/cart/", 'Can attempt checkout on product');
    // 6 - Can add the product successfully to cart
    this.echo("Can we add the product succecssfully to cart?");
    this.test.assertSelectorHasText('li.success-msg ul li span','Sony VAIO VGN-TXN27N/B 11.1" Notebook PC was added to your shopping cart.');
   
});
casper.thenOpen('http://magen.to/checkout/onepage/',function() {
    this.echo("Simulating product checkout..");
    // 7 - fill the checkout forms
    // 7.1 : form#login-form as guest
    this.fill('#checkout-step-login', {
	'checkout_method' : 'guest'      
    }, false);
    this.click('button#onepage-guest-register-button');

    // 7.2 : form#co-billing-form and co-shipping-form
    this.fill('form#co-billing-form', {
	'billing[firstname]' : 'Test',
        'billing[lastname]'  : 'McTest',
        'billing[email]'     : 'mctest@gmail.com',
        'billing[street][]'   : '123 Corner LiveLong and Prosper Streets',
        'billing[city]'      : 'Trek',
        'billing[postcode]'  : '10231',
        'billing[region_id]' : 1,
        'billing[telephone]' : '8091231234',
    }, false);
    this.click('form#co-billing-form button');

    this.wait(5000, function() {
       // 7.3 : form#co-shipping-method-form
       this.fill('form#co-shipping-form', {
       }, false);
       this.click('form#co-shipping-method-form button');
    });


    this.wait(3000, function() {
       // 7.4 : co payment form
       this.fill('form#co-payment-form', {
   	  'payment[method]' : 'checkmo'
       }, false);
       this.click('#checkout-step-payment button');
    });



    this.wait(3000, function() {
       // 7.5 : click the checkout button.
       this.click('button.btn-checkout');
    });
});

casper
  .wait(5000, 
    function() { this.echo("End simulation.") } 
  )
  .then(function() {
    this.echo("Now at " + this.getCurrentUrl());
    this.echo("By default, tracking code is disabled.");
    this.test.assertDoesntExist('script[id^="sociaby_ct_"]','Cannot find the tracking code script.');
});

casper.thenOpen('http://magen.to/', function() {
    this.test.assertDoesntExist('script[id=^"sociaby_ct_"]','Cannot find the tracking code script on other pages');
});


casper.run(function() {
    this.test.done(8);
    this.test.renderResults(true);
});


