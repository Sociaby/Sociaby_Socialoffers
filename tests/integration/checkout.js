var casper = require('casper').create();


casper.start('http://magen.to/', function() {
    // 1 - Can access magento normally
    this.test.assertTitle('Home page', 'Can access magento normally.');
});

casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');
casper.viewport(1024, 768);


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

casper.then(function() {
    // 7 - does the discount widget exist?
    this.test.assertExists('div.discount','Discount/Coupon code widget is shown');
    // 8 - does the discount input exist?
    this.echo("Can we see the discount input box?");
    this.test.assertExists('div.discount div.discount-form div.input-box input#coupon_code');
    // 9 - is the sociaby offers script tag async script present/ does it exist?
    this.echo("Can we find the sociaby async tag?");
    this.test.assertExists('script[id^="sociaby_"]');
    // 10 - is the async tag using thumbnail links instead of small image?
    this.test.assertSelectorHasText('script[id^="sociaby_"]','thumbnail', 'The async tag is using thumbnail images');
    // 11 - does the sociaby share button exist? (fails in localhost)
    // TODO
})

casper.run(function() {
    //this.test.done(9); 
    this.test.renderResults(true);
});
